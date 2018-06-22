# blvd react guidelines

At blvd, we use [React](https://reactjs.org/) a lot. It's one of the most-used
Javascript frameworks in the world, with an extensive community support and
library ecosystem. We like it better than Angular, but we're not your parents.
Go absolutely wild.

## Tooling

While tools like `create-react-app` can be useful, its out-of-the-box
configuration can be a bit limiting, and ejecting kind of defeats its purpose.

You should prioritise setting up your own development tool for your specific
stack. We recommend the following libraries:

- [webpack](https://webpack.js.org/)/[Parcel](https://parceljs.org/) - module bundling
- [Babel](https://babeljs.io/) - JS/TS transpilation

## Class component lifecycles (TypeScript)

To meet the TypeScript styleguide regarding class properties, all React
component lifecycles (including `static` lifecycles like
`getDerivedStateFromProps`) **shall** be set to `public`.


## Context binding

**Do not** use `.bind(this)` when binding functions to component context! You
should use ES6 arrow functions instead.

```jsx
class FancyButton extends React.Component {
  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <Fragment>
        {/* Bad example */}
        <button onClick={this.handleClick.bind(this)}>Click me!</button>

        {/* Good example */}
        <button onClick={(e) => this.handleClick(e)}>Click me!</button>
      </Fragment>
    );
  }
}
```

Another alternative to the above example would be converting the `handleClick`
call into an arrow function, e.g.

```jsx
class FancyButton extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.handleClick}>Click me!</button>
      </Fragment>
    );
  }
}
```

> Note that arrow functions used to come with its own
[performance pitfalls](https://jsperf.com/arrow-functions), even though newer
browsers have balanced things out. But still, your mileage may vary.

## Render props

If using a component with render props, prefer to use a children-based render prop.

```jsx
class FancierButton extends React.Component {
  render() {
    return (
      <Fragment>
        {/* okay */}
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

        {/* better */}
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
    );
  }
}
```

> Multiline self-closing tags are less-readable, especially when a render prop
extends 10 or so lines, the closing tags can get lost down there. A weird
analogy is to imagine the starting and closing tags as airports. An ideal trip
on an airplane would end on the runway of another airport and not at, like,
a wall.

## [TODO]
