[![Build Status](https://travis-ci.org/carlosvillu/UABTexthandler.svg?branch=master)](https://travis-ci.org/carlosvillu/UABTexthandler)

# deploy

Set up:

* NODE_ENV
* STAGE

run:

`$ make deploy`

# Links by ENVs:

* https://text-handler-production.surge.sh
* https://text-handler-development.surge.sh

# TODO:

## High pri
- [x] there must be a first page, right after login, that asks the user to select which type of evaluation he/she wants to perform: quality or structure
- [x] We need two different tables to store the evaluations: one for the structure evaluations and one of the quality evaluations
- [x] In the structure evaluation screen, the type of explanation drop-down menu is an optional field
- [x] Add, for both evaluation types, the prompt that was given
- [x] make a third type of table that stores the IDs of texts that have been skipped (saltados); there should be one table for skipped-quality texts and one for skipped-structure texts
- [x] Table of texts without quality evaluations
- [ ] In the quality evaluation, allow for 20% of texts WITHIN EACH EDUCATIONAL LEVEL to have 2 evaluations
- [ ] In both evaluations, add the "free comments" field to the downloadable table

## Low pri
- [ ] in the tables of skipped texts,  make it possible to click on the text's ID and show the evaluation screen for that text
- [x] In the evaluation screen, in the structure evaluation, leave text in the left fixed if you scroll up or down on the right
- [ ] In all evaluations, add a message that pops up when there are no remaining texts to be evaluated
- [ ] In questions that require a number for an answer, DO NOT LET the number be negative


## Schema:
```
{
  "rules": {
    "texts": {
      ".indexOn": ["idFile"],
      ".read": "auth.uid != null",
      ".write": "root.child('users').child(auth.uid).child('isAdmin').val() == true"
    },
    "evaluations": {
      ".read": "auth.uid != null",
      ".write": "root.child('users').child(auth.uid).child('isAdmin').val() == true"
    },
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

```
{
  "rules": {
    "texts": {
      ".indexOn": ["idFile"],
      ".read": "auth.uid != null",
      ".write": "auth.uid != null"
    },
    "evaluations": {
      ".read": "auth.uid != null",
      ".write": "auth.uid != null"
    },
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

## Commands:

```
curl -X DELETE "https://uab-text-handler-dev.firebaseio.com/texts/.json"
```
