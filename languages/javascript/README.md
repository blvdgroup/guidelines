# blvd javascript guidelines

This document outlines style conventions you should follow in your javascript
project, but ALSO what programs you should be using to do as such. We're very
devoted to our stack.

## Language Level

Write in ES6. Please. Writing on old versions of JS is much more likely to
create less readable code and much more likely to introduce dumb, edge case
bugs. And it's less fun.

If ES5 compatibility is a concern, use Babel. We generally compile with
`"presets": ["es2015", "stage-3"]` at a minimum in the `.babelrc`, and this is
reflected in the style guide below.

### While we're at it

Always refer to the language as ES6, and whenever babel makes you type "es2015,"
be sure to channel your disappointment into your keyboard.

## Libraries

### jQuery/lodash/etc

Avoid using libraries that assign themselves the $ or _ variable, primarily
jQuery or lodash. "Lightweight" alternatives should also be avoided.

> Most of the features present in jQuery, lodash, and the like are language
features in ES6. These libraries present unneeded bloat for little to no gain.
If you need a single feature provided by such an "all in one" solution, consider
writing it yourself.

### Type checking

- Do **not** use [Flowtype](https://flow.org/).
- You can also use TypeScript's `--checkJs` flag to
  [type-check JavaScript files](https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files),
  but do **not** do this either.
- If you're *really* concerned about type checking in your JavaScript files, you
  might as well use [TypeScript](../typescript) altogether.

> Flowtype is icky. It has spotty performance on Windows, and real-time IDE
integration is sketchy at best. [TypeScript](http://www.typescriptlang.org/), on
the other hand, is a superset of JavaScript, and migrating your existing
JavaScript code to TypeScript is really easy. Read more about the differences
between Flowtype and TypeScript [here](https://github.com/niieani/typescript-vs-flowtype).

### Angular vs React

- Do **not** use angular 1 for new projects.
- React is OK.
- Angular 2 is OK.
- Consider React or Angular 2 before looking to alternatives, as it will before
  difficult to find support for them.
- Choose one - if you have both React and Angular in your dependencies, I will
  come to your house and personally slap you.

> Personally, the community at blvd seems to gravitate towards React much more
than angular, so consider that your first choice unless you're confident and
believe in yourself. And you should always believe in yourself :smile:.

### Browserify vs Webpack

- Prefer using webpack to browserify.
- Do **not** use Webpack 1 for new projects.
- Do not use both simultaneously.

> Webpack allows for a lot more flexibility in bundle generation, and generally
supersedes browserify.

### Gulp vs Grunt vs npm scripts

- Prefer using handwritten JS scripts for your build pipeline to gulp or grunt.
- If your stack is complex enough that a build system becomes a necessity,
  prefer gulp to grunt.

> This is really subjective, and nobody's gonna get mad at you for whatever you
choose. Gulp has community support and Grunt is sort of a confusing mess, in my
honest opinion. I mean, so is gulp, which is why I say avoid both if you can
help it. But gulp seems to be...less so.

### Yarn vs npm

- Use yarn.
- Commit the `yarn.lock` file.

> Yarn is faster, better, harder, stronger than npm. It's got the support behind
it and works off the existing npm registry. You should be using it.

## Style

The following style guide is based off of the [airbnb style guide](https://github.com/airbnb/javascript).
All of the rules listed within should be followed as closely as possible,
**except** for the rules listed below.

### 19.2

An additional trailing comma should not be used, as it causes issues in certain
edge cases (`...rest` syntax) and overall makes code less readable.

### 20.1

Semicolons should not be used, except when strictly necessary, such as at the
beginning of a line which starts with `(` or `[`.

> Note that lines starting with such characters are likely "cute code," which
values succinctness over readability, and should be avoided. Most of the time,
they will be caught and flagged as errors by the `no-unexpected-multiline` rule.

## Using eslint

The eslint config included in this file will work with any project, provided
that certain dependencies are installed with it. Run the following line, and
place the .eslintrc in the root of your project.

```
yarn add eslint eslint-config-airbnb-base eslint-plugin-import
```
