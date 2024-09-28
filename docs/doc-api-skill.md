# # DOCUMENTATION API SKILL

## GET ALL SKILL

- Endpoint : `/skills/`
- Method : `GET`
- Response :

```json
{
  "message": "Success get all skill",
  "data": [
    {
      "id": 0,
      "name": "....",
      "createdAt": "....",
      "updatedAt": "...."
    },
    ....
  ]
}
```


## GET SKILL BY ID

- Endpoint : `/skills/:id`
- Method : `GET`
- Response :

```json
{
  "message": "Success get skill by id",
  "data": {
    "id": 0,
    "name": "....",
    "createdAt": "....",
    "updatedAt": "...."
  }
}
```

## CREATE SKILL

- Endpoint : `/skills/`
- Method : `POST`
- Request Body :

```json
{
  "name" : "...."
}
```

- Response Body :

```json
{
  "message": "Success create skill",
  "data": {
    "id": 0,
    "name": "....",
    "createdAt": "....",
    "updatedAt": "...."
  }
}
```

## UPDATE SKILL BY ID

- Endpoint : `/skills/:id`
- Method : `PATCH`
- Request Body :

```json
{
  "name" : "...."
}
```

- Response Body :

```json
{
  "message": "Success update skill",
  "data": {
    "id": 0,
    "name": "....",
    "createdAt": "....",
    "updatedAt": "...."
  }
}
```

## DELETE SKILL BY ID

- Endpoint : `/skills/:id`
- Method : `DELETE`
- Response :

```json
{
  "message": "Success delete skill",
  "data": {
    "id": 0,
    "name": "....",
    "createdAt": "....",
    "updatedAt": "...."
  }
}
```