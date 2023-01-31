# Password Less Authentication

In out day to day life we use several web, mobile and desktop applications, and we create our accounts in these applications by providing username, email and password.
Now as the number of applications increase the number of password will also increase the risk of compromising the account, because you are storing your credentials in 
a site that is less secure and it may compromise your other accounts if you have same passowrd for more than one application.

To tackle the above program we need something more trustful way of accessing the account and here is it the **password less authentication**. In this auntentication we 
use our email as a trusted source of logging us into the system. In this the user has to register his/her email in the system and then for logging in the system send a 
login link to the user which is only valid for a certain period of time, and by clicking the link user get direct access into the system without password.


## Folder Structure

![Folder Structure](https://github.com/imyogeshgaur/password-less/blob/master/Screenshot%20(95).png)

## Working of Project 

Step 1 : Create a .env file inside backend folder with following credentials 

```
  JWT_SECRET = YOUR_JWT_SECRET_STRING
  SENDER_MAIL = OUTLOOK_ACCOUNT_ID
  SENDER_PASSWORD = OUTLOOK_ACCOUNT_PASSWORD
  DB_URI = MONGO_DB_URI FOR NOSQL AND MYSQL_DB_URI FOR SQL 
  BASE_URL = FRONTEND_URL
```

step 2 : Run follwing command in frontend and backend folder to install all dependencies

```
  npm i
```

Step 3 : Run follwing command in frontend and backend folder to run backend and frontend respectively
```
  npm start
```
