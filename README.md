## Description
  api to test -> https://weekday-order.arpitsharma111.repl.co/order

## Sample Curl

```
  curl --location --request GET 'https://weekday-order.arpitsharma111.repl.co/order' \
  --header 'Content-Type: application/json' \
  --data-raw '[{"orderId": 12, "meals": ["A", "A"], "distance": 5},
  {"orderId": 21, "meals": ["A", "M"], "distance": 1},
  {"orderId": 14, "meals": ["M", "M", "M", "M", "A", "A", "A"], "distance": 10},
  {"orderId": 32, "meals": ["M"], "distance": 0.1},
  {"orderId": 22, "meals": ["A"], "distance": 3}]'
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
