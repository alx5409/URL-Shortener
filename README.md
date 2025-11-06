A simple URL Shortener backend API built with Node.js, TypeScript, Express, and MongoDB.

## Features

- Register and authenticate users 
- Create short URLs for long links 
- Redirect from short URL to original URL
- Secure password storage with hashing
- RESTful API endpoints

## Tech Stack

- Node.js + TypeScript
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

1. **Clone the repository**
2. **Install dependencies**
   ```
   npm install
   ```
3. **Set up environment variables**
   - Ask the author for the original .env variables or set yours with URL, mongoDB and JWT_SECRET
4. **Build the project**
   ```
   npm run build
   ```
5. **Start the server**
   ```
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

## API Endpoints

- `POST /api/auth/register`   — Register a new user
- `GET /api/auth/login`       — Login existing users
- `GET /api/urls/shorten`     — Shorten a url after login
- `GET /api/urls/my-urls`     — Get all of the urls of an user
- `GET /:slug`                — Redirect a shortened URL to the original

## Status

This project is in active development.