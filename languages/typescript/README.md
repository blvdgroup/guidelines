# blvd typescript guidelines

## Using Babel

TS supports a number of ES6 features built into the compiler. However, chaining
TS into Babel allows for finer control of the compile process, so I'd still
recommend that. To do as such, be sure to set `"target": "es6"` in your
`tsconfig.json`, so that babel can handle transpiling from es6 to es5. Most of
the time, you'll also want `"moduleResolution": "node"` to be explicitly set.

## Style

Style in TypeScript projects should be seen as an extension of [the blvd
Javascript guidelines](../javascript/README.md). All the rules outlined
there still apply.

### Types

#### Avoid `any`

The whole point is that TypeScript allows you to be more specific than this! So
avoid this when possible and be at least a little more specific with your type
declarations.

> Any is not explicitly banned, but it should be avoided.

### References

#### Declare variable type when using `let`

If declaring a non-immutable variable, declare a type for the variable.

```typescript
// Bad
let a
let b = 2

// Good
let a: string
let b: number = 2
```

> If declaring a `const` variable, this is unnecessary and can impede
readability. Just another reason to use `const`ants!

### Functions

#### Declare function return type

If declaring a function, you should always specify the return type, even if it
is nothing (i.e. `never`.)

```typescript
// Bad
function rng() {
  return Math.random()
}

// Good
function rng(): number {
  return Math.random()
}
```

#### Declare argument type

If declaring a function with arguments, you should always specify the type of
the argument, even if it is `any`.

```typescript
// Bad
function login(user, pass): LoginResponse {}

// Good
function login(user: string, pass: string): LoginResponse {}
```

### Interfaces

#### Use PascalCase when naming Interfaces

```typescript
// Bad
interface fastFoodRestaurant {}

// Good
interface FastFoodRestaurant {}
```

#### Do not prefix interfaces with `I`

```typescript
// Bad
interface IPerson {}

// Good
interface Person {}
```

> If you need a better way to specify an item as an interface specifically, to
avoid name collisions, you should suffix with Interface or Shape.

#### Do not write empty interfaces

Basically, all of the interfaces above are bad. Sorry.

### Enums

#### Use PascalCase when naming Enums

```typescript
// Bad
enum weatherType {}

// Good
enum WeatherType {}
```

### Imports

#### Don't use `/// <reference path="..."`

This is outdated syntax, and ES6 style imports should be used instead.

#### Don't use `require('')`

In every case, this can be replaced by using, again, ES6 style imports.

#### Don't import files just for side effects

This is bad, and rarely seen nowadays. This also means you should not be writing
files which are designed to be imported for side effects.

## Using TSLint

The tslint.json file provided attempts to import as much of the airbnb style
guide possible into TSLint. It tries, but some of the rules available in eslint
are not available in TSLint, so get more mad at Palantir than you already are.

It also includes the rules outlined here.

```bash
yarn add tslint tslint-config-airbnb
```
