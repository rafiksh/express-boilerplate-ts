# express-boilerplate-ts

<p align="center">
  <b>A pleasant way to build a Node.js RESTful API Services with beautiful code written in TypeScript.</b></br>
</p>

<br />

##  Why

The main goal with this project is a ready to use server application to be focused immediately on business and not spending hours on project configuration.


### Features

- **Clear Structure** with different layers such as controllers, services, models, middlewares...
- **Typescript** 
- **Path aliases**
- **MongoDB & Mongoose**
- **API Documentation** thanks to [swagger](http://swagger.io/) 


## ❯ Table of Contents

- [Getting Started](#-getting-started)
- [Scripts and Tasks](#-scripts-and-tasks)
- [API Routes](#-api-routes)
- [Project Structure](#-project-structure)
- [Further Documentations](#-further-documentations)
- [License](#-license)


## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Install yarn globally

```bash
yarn global add yarn
```

### Step 2: Create new Project

Fork or download this project. Configure your package.json for your new project.

Then copy the `.env.example` file and rename it to `.env`. In this file you have to add your database connection information.

Create a new database with the name you have in your `.env`-file.

Then setup your application environment.

```bash
yarn run setup
```

> This installs all dependencies with yarn. After that it migrates the database and seeds some test data into it. So after that your development environment is ready to use.

### Step 3: Serve your App

Go to the project dir and start your app with this yarn script.

```bash
yarn start serve
```

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the server according to these changes.
> The server address will be displayed to you as `http://0.0.0.0:3000`.


### Install

- Install all dependencies with `yarn install`

### Linting

- Run code quality analysis using `yarn lint`. This runs tslint.
- There is also a vscode task for this called `lint`.

### Tests

- Run the unit tests using `yarn start test` (There is also a vscode task for this called `test`).
- Run the integration tests using `yarn start test.integration`.
- Run the e2e tests using `yarn start test.e2e`.

### Running in dev mode

- Run `yarn start:dev` to start nodemon with ts-node, to serve the app.
- The server address will be displayed to you as `http://0.0.0.0:3000`

### Building the project and run it

- Run `yarn start build` to generated all JavaScript files from the TypeScript sources (There is also a vscode task for this called `build`).
- To start the builded app located in `dist` use `yarn start`.


## API Routes

The route prefix is `/api` by default, but you can change this in the .env file.
The swagger and the monitor route can be altered in the `.env` file.

| Route          | Description |
| -------------- | ----------- |
| **/swagger**   | This is the Swagger UI with our API documentation |
| **/monitor**   | Shows a small monitor page for the server |
| **/examples** | Example entity endpoint |


## Project Structure

| Name                              | Description |
| --------------------------------- | ----------- |
| **.vscode/**                      | VSCode tasks, launch configuration and some other settings |
| **dist/**                         | Compiled source files will be placed here |
| **src/**                          | Source files |
| **src/controllers/**              | REST API Controllers |
| **src/middlewares/**              | Express Middlewares like helmet security features |
| **src/db/**                       | DB layer |
| **src/services/**                 | Service layer |
| **src/validation/**               | Custom validation, which can be used as middleware validators |
| **test**                          | Tests |
| .env.test                         | Test environment configurations |


## Further Documentations

| Name & Link                       | Description                       |
| --------------------------------- | --------------------------------- |
| [Express](https://expressjs.com/) | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. |
| [Jest](http://facebook.github.io/jest/) | Delightful JavaScript Testing Library for unit and e2e tests SOON|
| [swagger Documentation](http://swagger.io/) | API Tool to describe and document your api. |


## License

[MIT License](/LICENSE)
