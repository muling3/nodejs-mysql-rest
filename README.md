# NodeJs Rest Api connectin to mysql database
Its an application which connects to a mysql database and performs crud operations.
Implemented using NodeJs

---

## TODO's
- Refactor code to MVC architecture
- Implement Logger Middleware
- Implement user authentication using JWT
- Any other thought that comes through
  
  ---

## Environment Variables
Make sure you define all this environment variables in your `.env` file.
1. DATABASE_NAME=test_db
1. TABLE_NAME=users_table
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

### Sample output
`screenshots` folder contains all the screenshots to see how it works using `curl` tool.
The commands run are as follows:
1. `GET` REQUEST: 
   - `curl localhost:4000 | jq`
2. `GET/:id` REQUEST: 
   - `curl localhost:4000/1 | jq`
3. `POST` REQUEST: 
   - `curl -X POST -H "Content-Type: application/json" -d '{"name":"Karim Benzema", "email": "karimb@gmail.com", "age": 34}' localhost:4000 | jq`
4. `PUT/:id` REQUEST: 
    - `curl -X PUT -H "Content-Type: application/json" -d '{"name":"Karim Benzema", "email":"kbenzema@gmail.com", "age": 34}' localhost:4000/4 | jq`
5. `DELETE/:id` REQUEST: 
   - `curl -X DELETE localhost:4000/4 | jq`




More features cominng...