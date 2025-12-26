# CampusSync - College Management System

A comprehensive full-stack application for managing college resources and activities with role-based access control.

## Features

- **Role-based Authentication**: Supports 5 different user roles
  - Student
  - Lab Incharge
  - Event Coordinator
  - Staff Incharge
  - Head of Department (HOD)

- **Secure Registration & Login**: JWT-based authentication with bcrypt password hashing
- **Role-specific Dashboard**: Customized interface based on user role
- **Responsive UI**: Mobile-friendly design using Tailwind CSS
- **Modern UI/UX**: Enhanced with gradients, animations, and interactive elements

## Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS for cross-origin requests

### Frontend
- React.js
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls
- Context API for state management

## User Roles & Permissions

1. **Student**
   - Access to academic information
   - Library resources
   - Event participation
   - Lab access

2. **Lab Incharge**
   - Lab management
   - Student access control
   - Equipment status monitoring
   - Lab reports

3. **Event Coordinator**
   - Event planning
   - Registration management
   - Resource booking
   - Budget management

4. **Staff Incharge**
   - Staff management
   - Resource allocation
   - Department coordination
   - Policy implementation

5. **Head of Department (HOD)**
   - Department management
   - Faculty supervision
   - Academic planning
   - Student affairs
   - Administrative tools

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies for both client and server:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

4. Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
```

5. Start both servers:

```bash
# Start backend server
cd server
npm run dev

# Start frontend server (in a new terminal)
cd client
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/update-profile` - Update user profile

### Admin (HOD & Staff Incharge only)
- `GET /api/auth/users` - Get all users
- `GET /api/auth/users/:id` - Get user by ID
- `PUT /api/auth/users/:id` - Update user
- `DELETE /api/auth/users/:id` - Delete user

## Project Structure

```
CampusSync/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # Authentication context
│   │   ├── hooks/          # Custom hooks
│   │   └── App.jsx
│   └── package.json
└── server/                 # Node.js backend
    ├── config/             # Database configuration
    ├── controllers/        # API controllers
    ├── middleware/         # Authentication middleware
    ├── models/             # Mongoose models
    ├── routes/             # API routes
    └── package.json
```

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Role-based access control
- Input validation
- Protection against common vulnerabilities

## UI Enhancements

- Modern, responsive design with Tailwind CSS
- Animated transitions and hover effects
- Gradient backgrounds and shadows
- Interactive components with visual feedback
- Role-specific navigation and content
- Consistent design language across the application

## Usage

1. Register with your preferred role
2. Login to access role-specific features
3. Navigate through the dashboard to access different features
4. Logout when finished

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request