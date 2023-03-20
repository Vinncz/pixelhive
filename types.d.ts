type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
};

type Post = {
    "userID": number,
    "id": number,
    "title": string,
    "body": string
};

type ProductTag = {
    "tag_id": number,
    "tag_name": string
};

type Product = {
    "product_id": number,
    "product_name": string
};