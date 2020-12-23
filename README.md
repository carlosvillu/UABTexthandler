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
    "skips": {
      ".read": "auth.uid != null",
      ".write": "auth.uid != null"
    },
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

```
{
 "rules": {
   ".read": true,
   ".write": true
 }
}
```

## Commands:

```
curl -X DELETE "https://uab-text-handler-dev.firebaseio.com/texts/.json"
```
