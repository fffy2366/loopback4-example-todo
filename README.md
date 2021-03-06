# @loopback/example-todo

This is the basic tutorial for getting started with Loopback 4!

## Overview

This tutorial demonstrates how to create a basic API for a todo list using
LoopBack 4.

![todo-tutorial-overview](https://loopback.io/pages/en/lb4/imgs/todo-overview.png)

## Setup

First, you'll need to install a supported version of Node:

- [Node.js](https://nodejs.org/en/) at v8.9 or greater

Additionally, this tutorial assumes that you are comfortable with certain
technologies, languages and concepts.

- JavaScript (ES6)
- [REST](http://www.restapitutorial.com/lessons/whatisrest.html)

Lastly, you'll need to install the LoopBack 4 CLI toolkit:

```sh
npm i -g @loopback/cli
```

## Tutorial

To follow this tutorial, begin with the
[Create your app scaffolding](http://loopback.io/doc/en/lb4/todo-tutorial-scaffolding.html)
section.

### Steps

1.  [Create your app scaffolding](http://loopback.io/doc/en/lb4/todo-tutorial-scaffolding.html)
2.  [Add your Todo model](http://loopback.io/doc/en/lb4/todo-tutorial-model.html)
3.  [Add a datasource](http://loopback.io/doc/en/lb4/todo-tutorial-datasource.html)
4.  [Add a repository](http://loopback.io/doc/en/lb4/todo-tutorial-repository.html)
5.  [Add a controller](http://loopback.io/doc/en/lb4/todo-tutorial-controller.html)
6.  [Putting it all together](http://loopback.io/doc/en/lb4/todo-tutorial-putting-it-together.html)
7.  Bonus:
    [Integrate with a geo-coding service](http://loopback.io/doc/en/lb4/todo-tutorial-geocoding-service.html)

## Try it out

If you'd like to see the final results of this tutorial as an example
application, follow these steps:

1.  Run the `lb4 example` command to select and clone the todo repository:

    ```sh
    $ lb4 example
    ? What example would you like to clone? (Use arrow keys)
    > todo: Tutorial example on how to build an application with LoopBack 4.
    todo-list: Continuation of the todo example using relations in LoopBack 4.
    hello-world: A simple hello-world Application using LoopBack 4.
    log-extension: An example extension project for LoopBack 4.
    rpc-server: A basic RPC server using a made-up protocol.
    ```

2.  Switch to the directory.

    ```sh
    cd loopback4-example-todo
    ```

3.  Finally, start the application!

    ```sh
    $ npm start

    Server is running on port 3000
    ```

Feel free to look around in the application's code to get a feel for how it
works. If you're interested in learning how to build it step-by-step, then
continue with this tutorial!

### Need help?

Check out our [Gitter channel](https://gitter.im/strongloop/loopback) and ask
for help with this tutorial.

### Bugs/Feedback

Open an issue in [loopback-next](https://github.com/strongloop/loopback-next)
and we'll take a look.

## Contributions

- [Guidelines](https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md)
- [Join the team](https://github.com/strongloop/loopback-next/issues/110)

## Tests

Run `npm test` from the root folder.

## Contributors

See
[all contributors](https://github.com/strongloop/loopback-next/graphs/contributors).

## License

MIT


## deploy
[pm2-docker](http://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/)
[docker-pm2](https://github.com/keymetrics/docker-pm2)
