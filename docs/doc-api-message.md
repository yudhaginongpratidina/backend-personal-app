# DOCUMENTATION API MESSAGE

## GET ALL MESSAGE

Endpoint : `/messages/`
Method : `GET`
Response :

```json
{
  "message": "Success get all message",
  "data": [
    {
      "id": 0,
      "fullname": ".....",
      "email": ".....",
      "message": ".....",
      "status": "......",
      "createdAt": ".....",
      "updatedAt": "....."
    }
  ]
}
```

## GET MESSAGE BY ID

Endpoint : `/messages/:id`
Method : `GET`
Response :

```json
{
  "message": "Success get message by id",
  "data": [
    {
      "id": 0,
      "fullname": ".....",
      "email": ".....",
      "message": ".....",
      "status": "......",
      "createdAt": ".....",
      "updatedAt": "....."
    }
  ]
}
```

## GET MESSAGE BY STATUS

Endpoint : `/messages/status/:status`
Method : `GET`
Response :

```json
{
  "message": "Success get message by status",
  "data": [
    {
      "id": 0,
      "fullname": ".....",
      "email": ".....",
      "message": ".....",
      "status": "......",
      "createdAt": ".....",
      "updatedAt": "....."
    }
  ]
}
```

## CREATE MESSAGE

Endpoint : `/messages`
Method : `POST`
Request Body :

```json
{
  "fullname": ".....",
  "email": "....",
  "message": "...."
}
```

Response :

```json
{
  "message": "Success create message",
  "data": {
    "id": 0,
    "fullname": "....",
    "email": "....",
    "message": "....",
    "status": "....",
    "createdAt": "....",
    "updatedAt": "...."
  }
}
```


## UPDATE STATUS MESSAGE

Endpoint : `/messages/:id/update/status`
Method : `PATCH`
Request Body :

```json
{
  "status" : "..."
}
```

Response Body :

```json
{
  "message": "Success update message status",
  "data": {
    "id": 0,
    "fullname": "....",
    "email": "....",
    "message": "....",
    "status": "....",
    "createdAt": "....",
    "updatedAt": "...."
  }
}
```

## DELETE MESSAGE BY ID

Endpoint : `/messages/:id`
Method : `DELETE`

Response Body :

```json
{
  "message": "Success delete message",
  "data": {
    "id": 0,
    "fullname": "....",
    "email": "....",
    "message": "....",
    "status": "....",
    "createdAt": "....",
    "updatedAt": "...."
  }
}
```


