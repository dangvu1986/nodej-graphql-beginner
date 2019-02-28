# Simple graphql query by using nodejs, express and json file
- Step 1: clone source code from github
- Step 2: install npm package
```javascript
npm install
```
- Step 3: run nodejs server to test
```javascript
npm start
```

Sample query: get category by id, return categoryId, categoryName and all Products that belong to category
```graphql
{
  category(id:1) {
    id,
    name,
    products{
      id,
      name,
      price
    }
  }
}
```

Sample result:
```json
{
  "data": {
    "category": {
      "id": "1",
      "name": "Mobile Phone",
      "products": [
        {
          "id": "1",
          "name": "Iphone X",
          "price": 999
        },
        {
          "id": "2",
          "name": "Samsung S9",
          "price": 799
        }
      ]
    }
  }
}
```

