# ES6 Package Starter

This project is a simple starter kit for building packages in ES6 to be published to npm.

## Motivation
I spent a lot of time constantly building and publishing small packages to my company's private npm repository. Every time I needed to build a new package, I would typically use my most recent project as a starting point for the next, but found myself having to do a lot of modification to "reset" it back to a base point that I could build from.

The purpose of this project is to act as a very simple starting point for writing packages using the latest tech and common practices. You can simply clone this project and start adding your own code without having to worry about setting up linting, testing, or building as it's already all in place.

I've done my best to limit the number of opinions imposed. If you'd prefer to use a different test framework, assertion library, linting rules, etc, everything is very easy to adjust to your liking.

## Get Started
1. **Clone the project**. `git clone https://github.com/danny-hines/es6-package-starter.git`
2. **Install dependencies**. `npm install` or `yarn`
3. **Start the watch tasks**. `npm start` or `yarn start`  
As you develop your project, this command will watch all of your files and automatically run linting and tests whenever you hit save.
4. **Review the sample code**.  
This project includes a simple Add function along with a corresponding spec file.
5. **Replace with your own code**.  
You can now begin writing your package, replacing the sample code. As long as the start command is running, any changes you make will automatically trigger your tests and linting.
6. **Publish your package**. `npm publish` or `yarn publish`  
Before your package is published, it automatically will be linted, tested, and compiled to ES5.

## Core Dependencies
|**Package**|**Description**|
|-----------|---------------|
| [Babel](http://babeljs.io) | Compiles ES6 to ES5 so that your package can be used in environments where the latest language features may yet to be supported. |
| [Mocha](http://mochajs.org) | Automated tests with [expect](https://github.com/mjackson/expect) for very terse assertions. |
| [ESLint](http://eslint.org) | Pluggable linting utility for JavaScript to help enforce code quality. |
