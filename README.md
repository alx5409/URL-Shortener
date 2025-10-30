# URL-Shortener

A simple URL Shortener backend API built with Node.js, TypeScript, Express, and MongoDB.

## Features (IN PROGRESS)

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
   - Copy `.env.example` to `.env` and fill in your MongoDB URI and other settings.
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

- `POST /api/auth/register` — Register a new user

## Status

This project is in active development.