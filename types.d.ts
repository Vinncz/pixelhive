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

type TagData = {
    'tag_id': number,
    'tag_name': string,
    'dataToo' ?: GroupData[]
};

type GroupData = {
    'group_id': number,
    'group_name': string,
    'product': ProductData[]
};

type Tag = {
    'tag_id': number,
    'tag_name': string,
}
type Group = {
    'group_id': number,
    'group_name': string
}
type Product = {
    'product_id': number,
    'product_name': string,
    'product_desc': string,
    'merchant_id': number,
    'product_price': number,
    'product_status': string,
    'created_at': string,
    'group_id': number
}
type Merchant = {
    "merchant_id": number,
    "merchant_name": string,
    "merchant_image": string
}
type User = {
    "user_id": number,
    "username": string,
    "user_image": string
}

type ProductData = {
    'product_id': number,
    "product_image": string,
    'product_name': string,
    'product_desc': string,
    'merchant_id': number,
    'product_price': number,
    'product_status': string,
    'created_at': string,
    'group_id': number
};

type ProductGroup = {
    "product_group_id": number,
    "product_tags_id": number,
};

type Merchant = {
    "merchant_id": number,
    "merchant_name": string,
    "merchant_image": string
}
