define({ "api": [
  {
    "type": "post",
    "url": "/accounts",
    "title": "Add the new account",
    "version": "1.0.0",
    "name": "AddAccount",
    "group": "Accounts",
    "permission": [
      {
        "name": "Create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data '{ \"name\": \"myaccount\", \"email\": \"myemail@mail.com\" }' -k -v https://127.0.0.1:9999/api/v1/accounts",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "account",
            "description": "<p>The new account</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 CREATED",
          "content": "HTTP/1.1 201 Created\n{\n     \"id\": 5465c70e7906b5bb7960f912,\n     \"name\": \"account1\",\n     \"email\": \"email@email.com\",\n     \"acl\": [],\n     \"created\": \"2016-02-03T05:00:00.000Z\",\n     \"amount\": 0,\n     \"removed\": false,\n     \"removedDate\", \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_SAVED",
            "description": "<p>The entity was not saved</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_SAVED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 5,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not saved'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'Path `email` is required.'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/account-controller.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "delete",
    "url": "/accounts/:id",
    "title": "Delete the existing account",
    "version": "1.0.0",
    "name": "DeleteAccount",
    "group": "Accounts",
    "permission": [
      {
        "name": "Delete"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE -u 'youremail@mail.com':'userpassword' -k -v https://127.0.0.1:9999/api/v1/accounts/547b689eba9d33302c164b6e",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "account",
            "description": "<p>The empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 NO_CONTENT",
          "content": "HTTP/1.1 204\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/account-controller.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "get",
    "url": "/accounts/:id",
    "title": "Get account by id",
    "version": "1.0.0",
    "name": "GetAccount",
    "group": "Accounts",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from account model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent accounts</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword' -H 'accept-version: 2016.3.1' https://127.0.0.1:9999/api/v1/accounts/5465c70e7906b5bb7960f08f",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "account",
            "description": "<p>The account. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5465c70e7906b5bb7960f08f,\n    \"name\": \"account1\",\n    \"email\": \"email@email.com\",\n    \"acl\": [],\n    \"created\": \"2016-02-03T05:00:00.000Z\",\n    \"amount\": 0,\n    \"removed\": false,\n    \"removedDate\", \"\"\n}",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/account-controller.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "get",
    "url": "/accounts",
    "title": "Get all accounts",
    "version": "1.0.0",
    "name": "GetAccounts",
    "group": "Accounts",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "description": "<p>The list of field names from account model separated by comma that used for sorting</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from account model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page_num",
            "defaultValue": "1",
            "description": "<p>The page number that used as a first for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "10",
            "description": "<p>The number of accounts to send for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent accounts</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword' -H 'accept-version: 2016.3.1' https://127.0.0.1:9999/api/v1/accounts?pretty=true&sort=created",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "accounts",
            "description": "<p>The array of accounts. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 5465c70e7906b5bb7960f08f,\n        \"name\": \"account1\",\n        \"email\": \"email@email.com\",\n        \"acl\": [],\n        \"created\": \"2016-02-03T05:00:00.000Z\",\n        \"amount\": 0,\n        \"removed\": false,\n        \"removedDate\", \"\"\n    },\n    {\n        \"id\": 5465c70e7906b5bb7960f090,\n        \"name\": \"account2\",\n        \"email\": \"foo@bar.com\",\n        \"acl\": [],\n        \"created\": \"2014-11-23T11:23:00.000Z\",\n        \"amount\": 100,\n        \"removed\": false,\n        \"removedDate\": \"\"\n    }\n]",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/account-controller.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "put",
    "url": "/accounts/:id",
    "title": "Update the existing account",
    "version": "1.0.0",
    "name": "UpdateAccount",
    "group": "Accounts",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data '{ \"name\": \"mynewaccount\", \"email\": \"mynewemail@mail.com\" }' -k -v https://127.0.0.1:9999/api/v1/accounts/54688a597129c4c6419c4f76",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "account",
            "description": "<p>The updated account</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 54688a597129c4c6419c4f76,\n     \"name\": \"account1\",\n     \"email\": \"email@email.com\",\n     \"acl\": [],\n     \"created\": \"2016-02-03T05:00:00.000Z\",\n     \"amount\": 0,\n     \"removed\": false,\n     \"removedDate\", \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BAD_DIGEST",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/3,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "400 BAD_DIGEST",
          "content": "HTTP/1.1 400 BadDigest\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'The name field is empty'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/account-controller.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "post",
    "url": "/payments",
    "title": "Add the new payment",
    "version": "1.0.0",
    "name": "AddPayment",
    "group": "Payments",
    "permission": [
      {
        "name": "Create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data '{ \"worktyId\": \"545f95ee2f82bdb917ad6f81\" }' -k -v https://127.0.0.1:9999/api/v1/payments",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "payment",
            "description": "<p>The new payment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 CREATED",
          "content": "HTTP/1.1 201 Created\n{\n      \"id\": 547b689eba9d33302c164b50,\n      \"accountId\": 54688a597129c4c6419c4f11,\n      \"worktyId\": \"545f95ee2f82bdb917ad6f81,\n      \"msg\": \"payment for generic workty\",\n      \"created\": \"2014-11-23T11:45:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_SAVED",
            "description": "<p>The entity was not saved</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_SAVED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 5,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not saved'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'Path `worktyId` is required.'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/payment-controller.js",
    "groupTitle": "Payments"
  },
  {
    "type": "delete",
    "url": "/payments/:id",
    "title": "Delete the existing payment",
    "version": "1.0.0",
    "name": "DeletePayment",
    "group": "Payments",
    "permission": [
      {
        "name": "Delete"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE -u 'youremail@mail.com':'userpassword' -k -v https://127.0.0.1:9999/api/v1/payments/545f95ee2f82bdb917ad6f81",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payment",
            "description": "<p>The empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 NO_CONTENT",
          "content": "HTTP/1.1 204\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/payment-controller.js",
    "groupTitle": "Payments"
  },
  {
    "type": "get",
    "url": "/payments/:id",
    "title": "Get payment by id",
    "version": "1.0.0",
    "name": "GetPayment",
    "group": "Payments",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from payment model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent payments</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword' https://127.0.0.1:9999/api/v1/payments/547b689eba9d33302c164b6e",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payment",
            "description": "<p>The payment. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 547b689eba9d33302c164b6e,\n     \"accountId\": 54688a597129c4c6419c4f11,\n     \"worktyId\": 54688a597129c4c6419c4f22,\n     \"msg\": \"payment for generic workty\",\n     \"created\": \"2014-11-23T11:45:00.000Z\"\n}",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/payment-controller.js",
    "groupTitle": "Payments"
  },
  {
    "type": "get",
    "url": "/payments",
    "title": "Get all payments",
    "version": "1.0.0",
    "name": "GetPayments",
    "group": "Payments",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "description": "<p>The list of field names from payment model separated by comma that used for sorting</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from payment model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page_num",
            "defaultValue": "1",
            "description": "<p>The page number that used as a first for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "10",
            "description": "<p>The number of workflows to send for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent payments</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword' -H 'accept-version: 2016.3.1' https://127.0.0.1:9999/api/v1/payments?pretty=true&sort=created",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payments",
            "description": "<p>The array of payments for current account. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n    {\n         \"id\": 54688a597129c4c6419c4f76,\n         \"accountId\": 54688a597129c4c6419c4f11,\n         \"worktyId\": 54688a597129c4c6419c4f22,\n         \"msg\": \"payment for generic workty\",\n         \"created\": \"2014-11-23T11:45:00.000Z\"\n    },\n    {\n         \"id\": 54688a597129c4c6419c4f77,\n         \"accountId\": 54688a597129c4c6419c4f11,\n         \"worktyId\": 54688a597129c4c6419c4f23,\n         \"msg\": \"payment for encrypt pdf file workty\",\n         \"created\": \"2014-11-23T11:45:00.000Z\"\n    }\n]",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/payment-controller.js",
    "groupTitle": "Payments"
  },
  {
    "type": "put",
    "url": "/payments/:id",
    "title": "Update the existing payment",
    "version": "1.0.0",
    "name": "UpdatePayment",
    "group": "Payments",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data '{ \"msg\": \"another message\" }' -k -v https://127.0.0.1:9999/api/v1/payments/545f95ee2f82bdb917ad6f81",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payment",
            "description": "<p>The updated payment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n      \"id\": 545f95ee2f82bdb917ad6f81,\n      \"accountId\": 54688a597129c4c6419c4f11,\n      \"worktyId\": \"545f95ee2f82bdb917ad6f81,\n      \"msg\": \"another message\",\n      \"created\": \"2014-11-23T11:45:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BAD_DIGEST",
            "description": "<p>No data to update</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/3,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "400 BAD_DIGEST",
          "content": "HTTP/1.1 400 BadDigest\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/payment-controller.js",
    "groupTitle": "Payments"
  },
  {
    "type": "post",
    "url": "/workflows",
    "title": "Add the new workflow",
    "version": "1.0.0",
    "name": "AddWorkflow",
    "group": "Workflows",
    "permission": [
      {
        "name": "Create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -u 'youremail@mail.com':'userpassword'  -H 'Content-type: application/json' --data  '{ \"name\": \"myworkflow\", \"desc\": \"workflow\" }' -k -v https://127.0.0.1:9999/api/v1/workflows",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>The new workflow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 CREATED",
          "content": "HTTP/1.1 201 Created\n{\n      \"id\": 5465c70e7906b5bb7960f095,\n      \"name\": \"myworkflow\",\n      \"desc\": \"workflow\",\n      \"accountId\": 54688a597129c4c6419c4f00,\n      \"worktiesInstancesIds\": [],\n      \"created\": \"2014-11-23T11:23:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_SAVED",
            "description": "<p>The entity was not saved</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_SAVED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 5,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not saved'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'Path `name` is required.'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "post",
    "url": "/workflows/:id/worktiesInstances",
    "title": "Add the new workty instance into workflow",
    "version": "1.0.0",
    "name": "AddWorktyInstance",
    "group": "Workflows",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "first",
              "last"
            ],
            "optional": true,
            "field": "position_type",
            "description": "<p>The position type that used to insert new workty instance into workflow. First - inserts new workty instance at the first position, position_index/id are ignored. Last - inserts new workty instance at the last position, position_index/id are ignored.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "position_index",
            "description": "<p>The position index that used to insert new workty instance into workflow. Inserts new workty instance on N position index (shifted right), where N = 0...last - 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": true,
            "field": "position_id",
            "description": "<p>The id of existing workty instance that used to insert new workty instance into workflow. Inserts new workty instance on the index of workty with id (shifted right).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "workflow",
              "workty",
              "state",
              "properties"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data '{ \"name\": \"newworktyinstance\", \"desc\": \"newworktydesc\", \"worktyId\": \"225f95ee2f82bdb917ad3565\" }' -k -v https://127.0.0.1:9999/api/v1/workflows/545f95ee2f82bdb917ad6f81/worktiesInstances?position_type=first",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "worktyInstance",
            "description": "<p>The new workty instance</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 CREATED",
          "content": "HTTP/1.1 201 Created\n{\n       \"id\": 545f9b4e2f82bdb917ad6fa3,\n       \"workflowId\": 545f95ee2f82bdb917ad6f81,\n       \"worktyId\": 225f95ee2f82bdb917ad3565,\n       \"name\": \"newworktyinstance\",\n       \"desc\": \"newworktydesc\",\n       \"stateId\": 545f95ee2f82bdb917ad6213,\n       \"propertiesIds\": [],\n       \"created\": \"2015-11-23T13:15:10.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_SAVED",
            "description": "<p>The entity was not saved</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "POSITION_IDX_INVALID",
            "description": "<p>Position index is invalid</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "POSITION_ID_INVALID",
            "description": "<p>Position id is invalid</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "POSITION_TYPE_INVALID",
            "description": "<p>Wrong position type value, allowed values are first, last, after, before</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_SAVED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 5,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not saved'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 POSITION_IDX_INVALID",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 10,\n        error_link: https://127.0.0.1:9999/api/v1/10,\n        message: 'Position index is invalid'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 POSITION_ID_INVALID",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 11,\n        error_link: https://127.0.0.1:9999/api/v1/11,\n        message: 'Position id is invalid'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 POSITION_TYPE_INVALID",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 12,\n        error_link: https://127.0.0.1:9999/api/v1/12,\n        message: 'Wrong position type value, allowed values: first, last'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'Path `worktyId` is required.'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "delete",
    "url": "/workflows/:id",
    "title": "Delete the existing workflow",
    "version": "1.0.0",
    "name": "DeleteWorkflow",
    "group": "Workflows",
    "permission": [
      {
        "name": "Delete"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE -u 'youremail@mail.com':'userpassword' -k -v https://127.0.0.1:9999/api/v1/workflows/547b689eba9d33302c164b6e",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>The empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 NO_CONTENT",
          "content": "HTTP/1.1 204\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "delete",
    "url": "/workflows/:id/worktiesInstances/:worktyInstanceId",
    "title": "Delete the existing workty instance",
    "version": "1.0.0",
    "name": "DeleteWorktyInstance",
    "group": "Workflows",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE -u 'youremail@mail.com':'userpassword' -k -v https://127.0.0.1:9999/api/v1/workflows/545f95ee2f82bdb917ad6f81/worktiesInstance/5468b29f75efbc095535f705",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "worktyInstance",
            "description": "<p>The empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 NO_CONTENT",
          "content": "HTTP/1.1 204\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_DELETED",
            "description": "<p>The entity was not deleted</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/3,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_DELETED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 4,\n        error_link: https://127.0.0.1:9999/api/v1/4,\n        message: 'The entity was not deleted'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "get",
    "url": "/workflows/:id",
    "title": "Get workflow by id",
    "version": "1.0.0",
    "name": "GetWorkflow",
    "group": "Workflows",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from workflow model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "worktiesinstances",
              "account",
              "worktiesinstances.state"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent workflows</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword'  -H 'accept-version: 2016.3.1' https://127.0.0.1:9999/api/v1/workflows/5465c70e7906b5bb7960f08f",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>The workflow. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 5465c70e7906b5bb7960f08f,\n     \"name\": \"Worfklow 1\",\n     \"desc\": \"Description 1\",\n     \"accountId\": 54688a597129c4c6419c4f00,\n     \"worktiesInstancesIds\": [54688a597129c4c6419c4100, 54688a597129c4c6419c4200, 54688a597129c4c6419c4300],\n     \"created\": \"2014-11-23T11:23:00.000Z\"\n}",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "get",
    "url": "/workflows",
    "title": "Get all workflows",
    "version": "1.0.0",
    "name": "GetWorkflows",
    "group": "Workflows",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "description": "<p>The list of field names from workflow model separated by comma that used for sorting</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from workflow model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page_num",
            "defaultValue": "1",
            "description": "<p>The page number that used as a first for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "10",
            "description": "<p>The number of workflows to send for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent workflows</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "worktiesinstances",
              "account",
              "worktiesinstances.state",
              "worktiesinstances.properties",
              "worktiesinstances.workty"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword'  -H 'accept-version: 2016.3.1' https://127.0.0.1:9999/api/v1/workflows?pretty=true&sort=created",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workflows",
            "description": "<p>The array of workflows for current account. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n    {\n         \"id\": 54688a597129c4c6419c4f76,\n         \"name\": \"Worfklow 1\",\n         \"desc\": \"Description 1\",\n         \"accountId\": 54688a597129c4c6419c4f00,\n         \"worktiesInstancesIds\": [54688a597129c4c6419c4100, 54688a597129c4c6419c4200, 54688a597129c4c6419c4300],\n         \"created\": \"2014-11-23T11:23:00.000Z\"\n    },\n    {\n         \"id\": 54688a597129c4c6419c4f77,\n         \"name\": \"Worfklow 2\",\n         \"desc\": \"Description 2\",\n         \"accountId\": 54688a597129c4c6419c4f00,\n         \"worktiesInstancesIds\": [54688a597129c4c6419c4101, 54688a597129c4c6419c4201, 54688a597129c4c6419c4301],\n         \"created\": \"2014-11-23T11:45:00.000Z\"\n    }\n]",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "get",
    "url": "/workflows/:id/worktiesInstances",
    "title": "Get all workties instances for workflow",
    "version": "1.0.0",
    "name": "GetWorktiesInstances",
    "group": "Workflows",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from workty instance model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page_num",
            "defaultValue": "1",
            "description": "<p>The page number that used as a first for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "10",
            "description": "<p>The number of workties instances to send for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent workties instances</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "workflow",
              "workty",
              "state",
              "properties"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -u 'youremail@mail.com':'userpassword' -k -v https://127.0.0.1:9999/api/v1/workflows/545f95ee2f82bdb917ad6f7f/worktiesInstances?pretty=true&sort=created&page_num=1&per_page=3",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "worktiesInstances",
            "description": "<p>The array of workties instances for current account and workflow. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 545f9b4e2f82bdb917ad6fa0,\n        \"workflowId\": 545f95ee2f82bdb917ad6f7f,\n        \"worktyId\": 545f95ee2f82bdb917ad6111,\n        \"name\": \"myworktyinstance\",\n        \"desc\": \"description\",\n        \"stateId\": 545f95ee2f82bdb917ad6212,\n        \"propertiesIds\": [545f95ee2f82bdb917ad6f70, 545f95ee2f82bdb917ad6f71, 545f95ee2f82bdb917ad6f72],\n        \"created\": \"2015-11-23T11:45:00.000Z\"\n    },\n    {\n        \"id\": 545f9b4e2f82bdb917ad6fa2,\n        \"workflowId\": 545f95ee2f82bdb917ad6f7f,\n        \"worktyId\": 545f95ee2f82bdb917ad6112,\n        \"name\": \"myworktyinstance2\",\n        \"desc\": \"description2\",\n        \"stateId\": 545f95ee2f82bdb917ad6213,\n        \"propertiesIds\": [545f95ee2f82bdb917ad6f73, 545f95ee2f82bdb917ad6f74],\n        \"created\": \"2015-11-23T13:15:10.000Z\"\n    }\n]",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "get",
    "url": "/workflows/:id/worktiesInstances/:worktyInstanceId",
    "title": "Get workty instance for workflow by id",
    "version": "1.0.0",
    "name": "GetWorktyInstance",
    "group": "Workflows",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from workty instance model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "workflow",
              "worktyinstance",
              "state",
              "properties"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent worties instances</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword' https://127.0.0.1:9999/api/v1/workflows/545f95ee2f82bdb917ad6f83/worktiesInstances/545f9b4e2f82bdb917ad6fa3",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "worktyInstance",
            "description": "<p>The workty instance. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 545f9b4e2f82bdb917ad6fa3,\n    \"workflowId\": 545f95ee2f82bdb917ad6f83,\n    \"worktyId\": 545f9b4e2f82bdb917ad6fa0,\n    \"name\": \"myworktyinstance2\",\n    \"desc\": \"description2\",\n    \"stateId\": 545f95ee2f82bdb917ad6213,\n    \"propertiesIds\": [545f95ee2f82bdb917ad6f73, 545f95ee2f82bdb917ad6f74],\n    \"created\": \"2015-11-23T13:15:10.000Z\"\n}",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:id/pausing",
    "title": "Pause the existing workflow",
    "version": "1.0.0",
    "name": "PauseWorkflow",
    "group": "Workflows",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword' -k -v https://127.0.0.1:9999/api/v1/workflows/545f95ee2f82bdb917ad6f7f/pausing",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>The updated workflow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n      \"id\": 54688a597129c4c6419c4f76,\n      \"name\": \"myworkflow\",\n      \"desc\": \"workflow\",\n      \"accountId\": 54688a597129c4c6419c4f00,\n      \"worktiesInstancesIds\": [],\n      \"created\": \"2014-11-23T11:23:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:id/running",
    "title": "Run the existing workflow",
    "version": "1.0.0",
    "name": "RunWorkflow",
    "group": "Workflows",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword' -k https://127.0.0.1:9999/api/v1/workflows/547b689eba9d33302c164b6e/running",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>The updated workflow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n      \"id\": 54688a597129c4c6419c4f76,\n      \"name\": \"myworkflow\",\n      \"desc\": \"workflow\",\n      \"accountId\": 54688a597129c4c6419c4f00,\n      \"worktiesInstancesIds\": [],\n      \"created\": \"2014-11-23T11:23:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "delete",
    "url": "/workflows/:id/running",
    "title": "Stop the workflow",
    "version": "1.0.0",
    "name": "StopWorkflow",
    "group": "Workflows",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE -u 'youremail@mail.com':'userpassword'  -k -v https://127.0.0.1:9999/api/v1/workflows/545f95ee2f82bdb917ad6f7f/running",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>The updated workflow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n      \"id\": 54688a597129c4c6419c4f76,\n      \"name\": \"myworkflow\",\n      \"desc\": \"workflow\",\n      \"accountId\": 54688a597129c4c6419c4f00,\n      \"worktiesInstancesIds\": [],\n      \"created\": \"2014-11-23T11:23:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:id",
    "title": "Update the existing workflow",
    "version": "1.0.0",
    "name": "UpdateWorkflow",
    "group": "Workflows",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data  '{ \"name\": \"myworkflow\", \"desc\": \"workflow\" }' -k -v https://127.0.0.1:9999/api/v1/workflows/54688a597129c4c6419c4f76",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>The updated workflow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n      \"id\": 54688a597129c4c6419c4f76,\n      \"name\": \"myworkflow\",\n      \"desc\": \"workflow\",\n      \"accountId\": 54688a597129c4c6419c4f00,\n      \"worktiesInstancesIds\": [],\n      \"created\": \"2014-11-23T11:23:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BAD_DIGEST",
            "description": "<p>No data to update</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/3,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "400 BAD_DIGEST",
          "content": "HTTP/1.1 400 BadDigest\n{\n    error: {\n        code: 18,\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'The name field is empty'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:id/worktiesInstances/:worktyInstanceId",
    "title": "Update the existing workty instance",
    "version": "1.0.0",
    "name": "UpdateWorktyInstance",
    "group": "Workflows",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "first",
              "last"
            ],
            "optional": true,
            "field": "position_type",
            "description": "<p>The position type that used to insert new workty instance into workflow First - inserts new workty instance at the first position, position_index/id are ignored Last - inserts new workty instance at the last position, position_index/id are ignored</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "position_index",
            "description": "<p>The position index that used to insert new workty instance into workflow. Inserts new workty instance on N position index (shifted right), where N = 0...last - 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": true,
            "field": "position_id",
            "description": "<p>The id of existing workty instance that used to insert new workty instance into workflow. Inserts new workty instance on the index of workty with id (shifted right)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "state"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword'  -H 'Content-type: application/json' --data  '{ \"name\": \"mynewworktyinstance\", \"desc\": \"mynewworktydesc\", }' -k -v https://127.0.0.1:9999/api/v1/workflows/545f95ee2f82bdb917ad6f81/worktiesInstances/5468b5142b6f8d5556db5f82",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "worktyInstance",
            "description": "<p>The updated workty instance</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n       \"id\": 5468b5142b6f8d5556db5f82,\n       \"workflowId\": 545f95ee2f82bdb917ad6f81,\n       \"worktyId\": 225f95ee2f82bdb917ad3565,\n       \"name\": \"mynewworktyinstance\",\n       \"desc\": \"mynewworktydesc\",\n       \"stateId\": 545f95ee2f82bdb917ad6213,\n       \"propertiesIds\": [],\n       \"created\": \"2015-11-23T13:15:10.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BAD_DIGEST",
            "description": "<p>No data to update</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "400 BAD_DIGEST",
          "content": "HTTP/1.1 400 BadDigest\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'Path `worktyId` is required.'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:id/worktiesInstances/:worktyInstanceId/properties/:propertyId",
    "title": "Update the existing workty instance property",
    "version": "1.0.0",
    "name": "UpdateWorktyInstance",
    "group": "Workflows",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data '{ name: \"myproperty\", value: \"mypropertyvalue\" }' -k -v https://127.0.0.1:9999/api/v1/workflows/545f95ee2f82bdb917ad6f81/worktiesInstances/5468b5142b6f8d5556db5f82/properties/55210867e7e1583c5f4c7939",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "worktyInstanceProperty",
            "description": "<p>The updated workty instance property</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n       \"id\": 55210867e7e1583c5f4c7939,\n       \"name\": \"myproperty\",\n       \"desc\": \"mypropertyvalue\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BAD_DIGEST",
            "description": "<p>No data to update</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "400 BAD_DIGEST",
          "content": "HTTP/1.1 400 BadDigest\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workflow-controller.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "post",
    "url": "/workties",
    "title": "Add the new workty",
    "version": "1.0.0",
    "name": "AddWorkty",
    "group": "Workties",
    "permission": [
      {
        "name": "Create"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data '{ \"name\": \"myworkty\", \"desc\": \"workty\" }' -k -v https://127.0.0.1:9999/api/v1/workties",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "workty",
            "description": "<p>The new workty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 CREATED",
          "content": "HTTP/1.1 201 Created\n{\n      \"id\": 5465c70e7906b5bb7960f08f,\n      \"name\": \"generic\",\n      \"desc\": \"generic workty\",\n      \"accountId\": 54688a597129c4c6419c89dd,\n      \"typeId\": 54688a597129c4c6419c89ee,\n      \"created\": \"2014-11-23T11:45:00.000Z\",\n      \"categoryId\": 54688a597129c4c6419c89dd,\n      \"languageTypeId\": 54688a597129c4c6419c59aa,\n      \"validationStateId\": 54688a597129c4c6419c4201,\n      \"entryPointModuleFileName\": \"app.js\",\n      \"compressedCode\": 0FA5671888A,\n      \"propertiesIds\": [],\n      \"price\": 0,\n      \"discountPercent\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_SAVED",
            "description": "<p>The entity was not saved</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_SAVED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 5,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not saved'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'Path `name` is required.'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workty-controller.js",
    "groupTitle": "Workties"
  },
  {
    "type": "post",
    "url": "/workties/:id/properties",
    "title": "Add the new workty property",
    "version": "1.0.0",
    "name": "AddWorktyProperty",
    "group": "Workties",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data '{ \"property\": { \"name\": \"myworktyparameter\", \"value\": \"some value\" }}' -k -v https://127.0.0.1:9999/api/v1/workties/545f95ee2f82bdb917ad6f81/properties",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "worktyProperty",
            "description": "<p>The new workty property</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 CREATED",
          "content": "HTTP/1.1 201 Created\n{\n      \"id\": 5465c70e7906b5bb7960f08f,\n      \"name\": \"myworktyparameter\",\n      \"value\": \"some value\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_SAVED",
            "description": "<p>The entity was not saved</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_SAVED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 5,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not saved'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'Path `name` is required.'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workty-controller.js",
    "groupTitle": "Workties"
  },
  {
    "type": "delete",
    "url": "/workties/:id",
    "title": "Delete the existing workty",
    "version": "1.0.0",
    "name": "DeleteWorkty",
    "group": "Workties",
    "permission": [
      {
        "name": "Delete"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE -u 'youremail@mail.com':'userpassword' -k -v https://127.0.0.1:9999/api/v1/workties/545f95ee2f82bdb917ad6f81",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workty",
            "description": "<p>The empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 NO_CONTENT",
          "content": "HTTP/1.1 204\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workty-controller.js",
    "groupTitle": "Workties"
  },
  {
    "type": "delete",
    "url": "/workties/:id/properties/:propertyId",
    "title": "Delete the existing workty property",
    "version": "1.0.0",
    "name": "DeleteWorktyProperty",
    "group": "Workties",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE -u 'youremail@mail.com':'userpassword' -k -v https://127.0.0.1:9999/api/v1/workties/545f95ee2f82bdb917ad6f81/properties/545f95ee2f82bdb917ad44f2",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "worktyProperty",
            "description": "<p>The empty object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "204 NO_CONTENT",
          "content": "HTTP/1.1 204\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_DELETED",
            "description": "<p>The entity was not deleted</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/3,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_DELETED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 4,\n        error_link: https://127.0.0.1:9999/api/v1/4,\n        message: 'The entity was not deleted'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workty-controller.js",
    "groupTitle": "Workties"
  },
  {
    "type": "get",
    "url": "/workties",
    "title": "Get all workties",
    "version": "1.0.0",
    "name": "GetWorkties",
    "group": "Workties",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "description": "<p>The list of field names from workty model separated by comma that used for sorting</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from workty model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page_num",
            "defaultValue": "1",
            "description": "<p>The page number that used as a first for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "per_page",
            "defaultValue": "10",
            "description": "<p>The number of workties to send for pagination</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent workties</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "account",
              "properties",
              "type",
              "category",
              "languagetype",
              "validationstate"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword' -H 'accept-version: 2016.3.1' https://127.0.0.1:9999/api/v1/workties?pretty=true&sort=created",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workties",
            "description": "<p>The array of workties for current account. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n    {\n         \"id\": 5465c70e7906b5bb7960f08f,\n         \"name\": \"generic\",\n         \"desc\": \"generic workty\",\n         \"accountId\": 54688a597129c4c6419c89dd,\n         \"typeId\": 54688a597129c4c6419c89ee,\n         \"created\": \"2014-11-23T11:45:00.000Z\",\n         \"categoryId\": 54688a597129c4c6419c89dd,\n         \"languageTypeId\": 54688a597129c4c6419c59aa,\n         \"validationStateId\": 54688a597129c4c6419c4201,\n         \"entryPointModuleFileName\": \"app.js\",\n         \"compressedCode\": 0FA5671888A,\n         \"propertiesIds\": [],\n         \"price\": 0,\n         \"discountPercent\": 0\n    },\n    {\n        \"id\": 5465c70e7906b5bb7960f08f,\n         \"name\": \"encrypt pdf file\",\n         \"desc\": \"encrypt pdf file workty\",\n         \"accountId\": 54688a597129c4c6419c89dd,\n         \"typeId\": 54688a597129c4c6419c89ee,\n         \"created\": \"2014-12-26T10:45:10.000Z\",\n         \"categoryId\": 54688a597129c4c6419c89dd,\n         \"languageTypeId\": 54688a597129c4c6419c59aa,\n         \"validationStateId\": 54688a597129c4c6419c4201,\n         \"entryPointModuleFileName\": \"app.js\",\n         \"compressedCode\": 0FA5671888A,\n         \"propertiesIds\": [],\n         \"price\": 0,\n         \"discountPercent\": 0\n    }\n]",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n[\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workty-controller.js",
    "groupTitle": "Workties"
  },
  {
    "type": "get",
    "url": "/workties/:id",
    "title": "Get workty by id",
    "version": "1.0.0",
    "name": "GetWorkty",
    "group": "Workties",
    "permission": [
      {
        "name": "View"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": true,
            "field": "pretty",
            "description": "<p>The prettify flag for output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>The list of field names from workty model separated by comma that should be included in output result</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "account",
              "properties",
              "type",
              "category",
              "languagetype",
              "validationstate"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>The number of sent workties</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -k -v -u 'youremail@mail.com':'userpassword'  -H 'accept-version: 2016.3.1' https://127.0.0.1:9999/api/v1/workties/5465c70e7906b5bb7960f08f",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workty",
            "description": "<p>The workty. It can be empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5465c70e7906b5bb7960f08f,\n    \"name\": \"generic\",\n    \"desc\": \"generic workty\",\n    \"accountId\": 54688a597129c4c6419c89dd,\n    \"typeId\": 54688a597129c4c6419c89ee,\n    \"created\": \"2014-11-23T11:45:00.000Z\",\n    \"categoryId\": 54688a597129c4c6419c89dd,\n    \"languageTypeId\": 54688a597129c4c6419c59aa,\n    \"validationStateId\": 54688a597129c4c6419c4201,\n    \"entryPointModuleFileName\": \"app.js\",\n    \"compressedCode\": 0FA5671888A,\n    \"propertiesIds\": [],\n    \"price\": 0,\n    \"discountPercent\": 0\n}",
          "type": "json"
        },
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 13,\n         error_link: https://127.0.0.1:9999/api/v1/13,\n         message: 'The operation is forbidden'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 1,\n         error_link: https://127.0.0.1:9999/api/v1/1,\n         message: 'Unexpected error, please check request parameters or contact with our support service'\n     }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workty-controller.js",
    "groupTitle": "Workties"
  },
  {
    "type": "put",
    "url": "/workties/:id",
    "title": "Update the existing workty",
    "version": "1.0.0",
    "name": "UpdateWorkty",
    "group": "Workties",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password values for authorization</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data  '{ \"name\": \"myworkty\", \"desc\": \"worktydesc\" }' -k -v https://127.0.0.1:9999/api/v1/workties/545f95ee2f82bdb917ad6f81",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workty",
            "description": "<p>The updated workty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n      \"id\": 545f95ee2f82bdb917ad6f81,\n      \"name\": \"myworkty\",\n      \"desc\": \"worktydesc\",\n      \"accountId\": 54688a597129c4c6419c89dd,\n      \"typeId\": 54688a597129c4c6419c89ee,\n      \"created\": \"2014-11-23T11:45:00.000Z\",\n      \"categoryId\": 54688a597129c4c6419c89dd,\n      \"languageTypeId\": 54688a597129c4c6419c59aa,\n      \"validationStateId\": 54688a597129c4c6419c4201,\n      \"entryPointModuleFileName\": \"app.js\",\n      \"compressedCode\": 0FA5671888A,\n      \"propertiesIds\": [],\n      \"price\": 0,\n      \"discountPercent\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BAD_DIGEST",
            "description": "<p>No data to update</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/3,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "400 BAD_DIGEST",
          "content": "HTTP/1.1 400 BadDigest\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'The name field is empty'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workty-controller.js",
    "groupTitle": "Workties"
  },
  {
    "type": "put",
    "url": "/workties/:id/properties/:propertyId",
    "title": "Update the existing workty property",
    "version": "1.0.0",
    "name": "UpdateWorktyProperty",
    "group": "Workties",
    "permission": [
      {
        "name": "Update"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "accept-version",
            "description": "<p>The subversion value</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "useremail:userpassword",
            "description": "<p>The user email and password valuess for authorization</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "state"
            ],
            "optional": true,
            "field": "embed",
            "description": "<p>The list of embedded fields</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT -u 'youremail@mail.com':'userpassword' -H 'Content-type: application/json' --data  '{ \"property\": { \"name\": \"mynewworkty\", \"value\": \"some new value\" }}' -k -v https://127.0.0.1:9999/api/v1/workties/545f95ee2f82bdb917ad6f81/properties/545f95ee2f82bdb917ad44f2",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "worktyProperty",
            "description": "<p>The updated workty property</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n      \"id\": 545f95ee2f82bdb917ad44f2,\n      \"name\": \"mynewworkty\",\n      \"value\": \"some new value\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "OPERATION_FORBIDDEN",
            "description": "<p>Operation is forbidden</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "UNEXPECTED",
            "description": "<p>Unexpected error on server side</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_FOUND",
            "description": "<p>The entity was not found</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ENT_NOT_UPDATED",
            "description": "<p>The entity was not updated</p>"
          },
          {
            "group": "Error 5xx",
            "type": "500",
            "optional": false,
            "field": "ACCOUNT_REMOVED",
            "description": "<p>The account was removed</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "INVALID_CONTENT",
            "description": "<p>The input json value is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "BAD_DIGEST",
            "description": "<p>No data to update</p>"
          },
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "INVALID_CREDENTIALS",
            "description": "<p>Invalid credentials</p>"
          },
          {
            "group": "Error 4xx",
            "type": "409",
            "optional": false,
            "field": "VALIDATION_ERR",
            "description": "<p>Validation error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "500 OPERATION_FORBIDDEN",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 13,\n        error_link: https://127.0.0.1:9999/api/v1/13,\n        message: 'The operation is forbidden'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 UNEXPECTED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 1,\n        error_link: https://127.0.0.1:9999/api/v1/1,\n        message: 'Unexpected error, please check request parameters or contact with our support service'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_FOUND",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 2,\n        error_link: https://127.0.0.1:9999/api/v1/2,\n        message: 'The entity was not found'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ENT_NOT_UPDATED",
          "content": "HTTP/1.1 500 InternalError\n{\n    error: {\n        code: 3,\n        error_link: https://127.0.0.1:9999/api/v1/5,\n        message: 'The entity was not updated'\n    }\n}",
          "type": "json"
        },
        {
          "title": "500 ACCOUNT_REMOVED",
          "content": "HTTP/1.1 500 InternalError\n{\n     error: {\n         code: 14,\n         error_link: https://127.0.0.1:9999/api/v1/14,\n         message: 'The account was removed. Please recover it'\n     }\n}",
          "type": "json"
        },
        {
          "title": "400 INVALID_CONTENT",
          "content": "HTTP/1.1 400 InvalidContent\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "400 BAD_DIGEST",
          "content": "HTTP/1.1 400 BadDigest\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/400\n    }\n}",
          "type": "json"
        },
        {
          "title": "401 INVALID_CREDENTIALS",
          "content": "HTTP/1.1 401 InvalidCredentials\n{\n     error: {\n         code: '',\n         error_link: https://127.0.0.1:9999/api/v1/401\n     }\n}",
          "type": "json"
        },
        {
          "title": "409 VALIDATION_ERR",
          "content": "HTTP/1.1 409 MissingParameter\n{\n    error: {\n        code: '',\n        error_link: https://127.0.0.1:9999/api/v1/409,\n        message: 'Validation error'\n        errors: [\n            message: 'Path `name` is required.'\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/v1/controllers/workty-controller.js",
    "groupTitle": "Workties"
  }
] });
