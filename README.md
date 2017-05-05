# reactapp_restapi

# Assignment 2 - A web API for [Assignment 1][assignment1]

- __Lead Maintainer:__ [Kristina Matuleviciute][Lead]

## Overview
Assignment 1 -
Simple app with [ReactJS] - for client side, [Webpack] for module bundle and [Expressjs] for server side.
3 views: Home page, Table with friends' contacts information and add, delete functions, Picture gallery as a slide show. This application is responsive, all views are availble in smaller screens
Assignment 2 -
A web API for Assignment 1.
The integrated API with Reactapp.
Technologies: Node, Express, MongoDB, Mongoose. 	 


## Installation requirements

## Install

To install the app locally, simply clone the repo,

```
git clone https://github.com/KristinaMatuleviciute/reactapp.git
cd reactapp
```

Next, install and build via npm,

```
npm install
```

## Running

To run app:

```
npm run start
```

In a different terminal window run:
(You need to have mongodb installed.)

```
sudo mongod
```

## Routing between server side and client side [index.js][index]:

Get all users: GET /api/users/
Create user: POST /api/users/
Update user: PUT /api/users/:id
Delete user: DELETE /api/users/:id
Get user's profile page: api/users/profile/:id

## License

Copyright (c) 2017, Kristina Matuleviciute. Licensed under [MIT].

[mit]: ./LICENSE
[Lead]: https://github.com/KristinaMatuleviciute
[assignment1]:https://github.com/KristinaMatuleviciute/reactapp
[index]:https://github.com/KristinaMatuleviciute/reactapp_restapi/blob/master/api/users/index.js
