# blvd react guidelines

At blvd, we use [React](https://reactjs.org/) a lot. It's one of the most-used
Javascript frameworks in the world, with an extensive community support and
library ecosystem. We like it better than Angular, but we're not your parents.
Go absolutely wild.

## Tooling

### Build setup

While tools like `create-react-app` can be useful, its out-of-the-box
configuration can be a bit limiting, and ejecting kind of defeats its purpose.

You should prioritise setting up your own development tool for your specific
stack. We recommend the following libraries:

- [webpack](https://webpack.js.org/)/[Parcel](https://parceljs.org/) - module bundling
- [Babel](https://babeljs.io/) - JS/TS transpilation

> Personally, we prefer webpack over Parcel due to its ecosystem support.
Compared to previous versions, webpack 4 has a significantly reduced initial
setup time + config file size. For an example minimal webpack 4 setup for
React, see [mvws](https://github.com/resir014/mvws).

### IDE

Use [Visual Studio Code](https://code.visualstudio.com). It has first-class
support for JavaScript and TypeScript, complete with code-aware statement
completion, Emmet integration for JSX elements, as well top-notch debugging
environment.

> Any other IDE should do, as long as it supports the [Language Server Protocol](https://github.com/Microsoft/language-server-protocol).
If you prefer [Atom](https://atom.io), you should install the [Atom IDE](https://ide.atom.io/)
package.

## Style

The following style guide should be seen as an extension to the [airbnb react style guide](https://github.com/airbnb/javascript/tree/master/react).
All of the rules listed within should be followed as closely as possible,
with **exceptions** listed below.

### Class components

#### Use `public` for all default React lifecycles (TypeScript)

To meet the TypeScript styleguide regarding class properties, all React
component lifecycles (including `static` lifecycles like
`getDerivedStateFromProps`) **shall** be set to `public`.

### Stateless components

#### Avoid `function` stateless components

If declaring a stateless component, you should avoid declaring them as a `function`.

```jsx
// Bad example
function Component({ children }) {
  return <div>{children}</div>;
}

// Good example
const Component = ({ children }) => (
  <div>{children}</div>
)
```

### Naming

#### Use `.jsx` and/or `.tsx` extensions for React components

Any JS/TS files with a JSX syntax should always be marked as such.

> Note that using `.js` for JSX files will also give problems for Emmet
autocompletion on VS Code, see [Microsoft/vscode#4962](https://github.com/Microsoft/vscode/issues/4962).

### Methods

#### Use `private` when defining internal methods (TypeScript)

If declaring an internal class method, you should always prefix it with `private`.

> This is an extension to the blvd typescript styleguide, where class methods
should always be marked either `public`, `private`, or `protected`.

#### Avoid `.bind(this)`

Don't use `.bind(this)` when binding functions to component context! This can
(and should) be replaced by ES6 arrow functions.

```jsx
// Bad example
class FancyButton extends React.Component {
  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Click me!</button>
    );
  }

// Bad example
class FancyButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}

// Good example
class FancyButton extends React.Component {
  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>Click me!</button>
    )
  }
}
```

#### Prefer arrow functions for event handlers

Another alternative to the above example would be converting the `handleClick`
call into an arrow function, which is commonly used for event handlers, e.g.

```jsx
class FancyButton extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}
```

> Note that arrow functions used to come with its own
[performance pitfalls](https://jsperf.com/arrow-functions), even though newer
browsers have balanced things out. But still, your mileage may vary.

### Render props

#### Use children prop instead of `render={...}`

If using a component with render props, prefer to use a children-based render prop.

```jsx
class FancierButton extends React.Component {
  render() {
    return (
      <Fragment>
        {/* Not so good */}
        <LayoutContainer
          render={({ theme, setTheme }) => (
            <div>
              <CurrentTheme>Current theme: {theme}</CurrentTheme>
              <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Switch theme
              </button>
            </div>
          )}
        />

        {/* Better */}
        <LayoutContainer>
          {({ theme, setTheme }) => (
            <div>
              <CurrentTheme>Current theme: {theme}</CurrentTheme>
              <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Switch theme
              </button>
            </div>
          )}
        </LayoutContainer>
      </Fragment>
    )
  }
}
```

> Multiline self-closing tags are less-readable, especially when a render prop
extends 10 or so lines, the closing tags can get lost down there. A weird
analogy is to imagine the starting and closing tags as airports. An ideal trip
on an airplane would end on the runway of another airport and not at, like,
a wall.

### Static typing (TypeScript)

#### Dont inline prop types

Instead of defining prop types inline, you should declare them separately.

```tsx
// Bad example
const App: React.SFC<{ message: string }> = ({ message }) => <div>{message}</div>
```

```tsx
// Good example
type AppProps = {
  message: string
}

const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>
```

> This improves code reusability and organization.

#### Use `type`s over `interface`s for prop declarations

- Consider using `type`s for your components' props/states.
- Use `interface`s only when your props/state declaration is also a public
  API definition.

> For reference, see [React + TypeScript Cheatsheet § Types or Interfaces?](https://github.com/sw-yx/react-typescript-cheatsheet#types-or-interfaces)

## Using linters + Prettier

The tslint.json file provided imports the blvd typescript style guide into
TSLint. To use them, include the following packages.

A `.prettierrc` is also included for those who use [Prettier](https://prettier.io/).
Prettier is a code formatter which ensures your code is formatted to a
consistent style. It works alongside your IDEs and linters, and our
ESLint/TSLint configs works alongside them.

```bash
yarn add --dev tslint tslint-config-blvd tslint-plugin-prettier tslint-config-prettier
```
