# node-express-mongo case study example

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

##### The is a demostration of nodejs, express and mongo based apis.
In order to setup this app follow the instruction and see it running in the live action. 
- clone this repository 
- run `npm install`
- set mongo-db endpoint in the `.env` file.
- run application
    -   in order to run application
    -   `npm run dev`
    -   in order to run tests
    -   `npm run test`

## APIs Endpoint

###### The application contains total of two post APIs:

##### 1. create records

```
Request Type: 
Post

Endpoint:
/records/create

Sample Payload: 
{
    "minCount": 200,
    "maxCount": 50000,
    "startDate": "2016-01-26",
    "endDate": "2022-01-20"
}
```

##### 2. get records

```
Request Type: 
Post

Endpoint:
/records/get

Sample Payload: 
{
    "minCount": 200,
    "maxCount": 50000,
    "startDate": "2016-01-26",
    "endDate": "2022-01-20"
}
```
