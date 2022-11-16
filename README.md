# NodeJs Shopping Cart rest Api connecting to mysql database
Its an application which connects to a mysql database and performs crud operations.
Implemented using `express` and `mysql2`

---

## Implemented
- User router, products router, cart router
- Clean code
- Integration tests for all the router endpoints

## TODO's
- Logger Middleware
- User authentication using JWT
- Authorisation Middleware
- Error handler
- Any other thought that comes through
  
  ---

## Environment Variables
Make sure you define all this environment variables in your `.env` file.
1. DATABASE_NAME=test_db
1. USER_TABLE=users_table
1. PRODUCT_TABLE=products_table
1. CART_TABLE=cart_table
1. HOST=localhost
1. DB_USER=root
1. DB_PASSWORD=password
1. PORT=4000
   
   ---

### How it works
1. You can either `clone` the repo or `download` the source code 
2. After step one above run `npm install` in the root directory.
3. Create a `.env` file and paste the above environment variables.
4. Run a `mysql instance` and make sure the `database` you mentioned in your `.env` file is created and create a table as per your `.env` file. To help you with the task have created a `migration script` which you can easily run and get up and running.
5. In the project root directory run `npm run start` and see the magic.

However at first when you run a get request your rows will be an empty array.

---


More features cominng...