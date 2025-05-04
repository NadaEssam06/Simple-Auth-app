<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
# Simple-Auth-app
📋 Features

  Authentication Middleware using JWT

  Public Routes

      POST /auth/signup – Register a new user

      POST /auth/signin – Login and receive a JWT

  Protected Routes

      GET /users/profile – Get current user's profile

      GET /users/others – Get all users excluding the logged-in user

🛠️ Tech Stack

  NestJS (Typecript)

  MongoDB (via Mongoose)

  JWT for Authentication

  bcrypt for Password Hashing

  Swagger for API Docs

  @nestjs/config for Environment Config


Install required packages:
```
npm i @nest/mongoose mongoose
npm i types/jsonwebtoken
npm i types/bcrypt
npm i @nestjs/swagger
npm i @nestjs/config
```

🗂️ Folder Structure (simplified)
```
src/
├── middlewares
│   ├── auth.middleware.ts
├── models/users
│   ├── dto
│       └── user.dto.ts
│   ├── users.modules.ts
│   ├── users.controller.ts
│   └── users.service.ts
├── schemas/
│   └── user.schema.ts
├── main.ts
├── app.module.ts
```
🧪 API Routes
Method	Endpoint	Description	Auth Required
POST	/users/sign-up	Register new user	❌
POST	/users/sign-in 	Login user	❌
GET	/users/my-profile	Get logged-in user profile	✅
GET	/users/all	Get all other users	✅


And load config using @nestjs/config.
🧾 Swagger

Access Swagger UI at:

http://localhost:3000/api-doc

