# api-testing-challenges

## Table of contents


<!-- toc -->
- [Setup and installation](#install)
- [Challenges](#challenges)
  * [Find the secret](#secret-profile)
  * [Find the 500](#find-the-500-errors)
<!-- tocstop -->


## Install
After cloning the repo locally you can install it by opening a command prompt in the location to which you have cloned it and then calling the command below. Note that this requires you to have the npm package manger installed. If you don't have it, you can easily install it from [here](https://www.npmjs.com/get-npm)

```bash
$ npm install
```

### Setup
Once you have it installed you can start the server for the challenge you are interested in by calling

```bash
$ node <server-name>
```
Where the available servers are:

- find_the_secret_server.js
- find_the_500_server.js

## Challenges
These challenges are all designed to be 'black box.' The purpose of them is to help you learn more about how APIs work and what kinds of things to think about when testing them. For you to get the most out of them, try to solve them by using only API calls. Don't go looking in the server implementations or the databases for the answers. See if you can figure them out with only using the APIs

### Secret profile
The challenge:

There is a secret profile (profile 1) that you are not supposed to be able to access. Using only API calls, can you find out the name of that profile?

#### Routes

The find the secret challenge can be solved using the following routes:

```
GET    /blogposts
GET    /blogposts/<id>
GET    /comments
GET    /comments/<id>
GET    /profiles
GET    /profiles/<id>
```

You may also need to use the following parameters:

##### Relationships

To include children resources, add `_embed`

```
GET /blogposts?_embed=comments
GET /blogposts/1?_embed=comments
```

To include parent resource, add `_expand`

```
GET /comments?_expand=blogpost
GET /comments/1?_expand=blogpost
```

### Find The 500 Errors
The challenge:

There are (at least) two 500 errors to be found in this little application. See if you can find them using only API calls.

#### Routes

The find the 500 challenge has the following routes:

```
GET    /blogposts
GET    /blogposts/<id>
GET    /comments
GET    /comments/<id>
GET    /profiles
GET    /profiles/<id>
GET    /avatars
GET    /avatars/<id>
```
POST and PUT commands are also available. To figure out what parameters they take, just do a GET call on the corresponding resource to see what parameters it has.
```
POST    /blogposts
POST    /comments
POST    /profiles
POST    /avatars

PUT    /blogposts/<id>
PUT    /comments/<id>
PUT    /profiles/<id>
PUT    /avatars/<id>
```

DELETE commands will also work, but you shouldn't need them to solve this challenge

NOTE that you can get the database for this into a bad state. If you feel like things are a mess and you can't proceed anymore you can reset the challenge and start over, by reseting the find_the_500_db.json file back to it's original state (use git to do this) and then restarting the server.

You may also need to use the following parameters:

##### Relationships

To include children resources, add `_embed`

```
GET /blogposts?_embed=comments
GET /blogposts/1?_embed=comments
```

To include parent resource, add `_expand`

```
GET /comments?_expand=blogpost
GET /comments/1?_expand=blogpost
```

