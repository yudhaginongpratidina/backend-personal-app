# DOC API FOR CATEGORY PROJECT

## GET ALL CATEGORY PROJECTS

- Endpoint : `/category-projects/`
- Method : `GET`
- Response :

```json
{
  "message": "Success get all category project",
  "data": [
    {
      "id": 0,
      "name": "...",
      "createdAt": "...",
      "updatedAt": "..."
    },
    ....
  ]
}
```

## GET CATEGORY PROJECT BY ID

- Endpoint : `/category-projects/:id`
- Method : `GET`
- Response :

```json
{
  "message": "Success get category project by id",
  "data": {
    "id": 0,
    "name":"...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## CREATE CATEGORY PROJECT

- Endpoint : `/category-projects/`
- Method : `POST`
- Request :

```json
{
  "name" : "...."
}
```

- Response :

```json
{
  "message": "Success create category project",
  "data": {
    "id": 0,
    "name":"...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## UPDATE CATEGORY PROJECT BY ID

- Endpoint : `/category-projects/:id`
- Method : `PATCH`
- Request :

```json
{
  "name" : "...."
}
```

- Response :

```json
{
  "message": "Success update category project",
  "data": {
    "id": 0,
    "name": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## DELETE CATEGORY PROJECT BY ID

- Endpoint : `/category-projects/:id`
- Method : `DELETE`
- Response :

```json
{
  "message": "Success delete category project",
  "data": {
    "id": 0,
    "name": "...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```