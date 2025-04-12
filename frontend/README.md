# User Management System - Frontend

This is a simple user management dashboard with login and signup functionality.

## Features

- User authentication (Login/Signup)
- User management dashboard
- User listing with mock data
- Responsive UI

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Main application pages
- `/src/styles.css` - Global styles

## Note

The frontend is not connected to the backend API yet. It currently uses mock data for demonstration purposes.

## Backend API Endpoints

The backend provides the following API endpoints:

- `POST /api/register` - Register a new user
- `POST /api/login` - Authenticate a user
- `GET /api/profile` - Get user profile (requires authentication)

## Future Improvements

- Connect to the backend API
- Add user edit/delete functionality
- Implement form validation
- Add pagination for user listing
- Role-based access control 