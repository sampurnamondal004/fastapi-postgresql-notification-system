# Frontend for Realtime Notification System

This is a React frontend for the FastAPI/PostgreSQL realtime notification system.

## Features
- User selection (simulating authentication)
- Real-time notification display via WebSocket
- Send notifications to users
- Connection status indicators
- Responsive design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration
Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:8000
```

### Backend startup
Make sure the backend is running before starting the frontend:
```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

### Development
Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```
The built files will be in the `dist` directory.

## Architecture
See [ARCHITECTURE.md](../ARCHITECTURE.md) for detailed architecture documentation.

## Components
- `Header`: User selection interface
- `MainContent`: Main application content
- `NotificationList`: Displays list of notifications
- `NotificationItem`: Individual notification item
- `SendNotificationForm`: Form to send new notifications
- `ConnectionStatus`: Shows WebSocket connection status
- `Footer`: Application footer

## State Management
- `AuthContext`: Manages current user ID
- `NotificationContext`: Manages notification list and loading states
- `WebSocketContext`: Manages WebSocket connection

## API Integration
- `apiService.js`: Handles REST API calls
- `websocketService.js`: Handles WebSocket connection

## Styling
- CSS-based styling with responsive design
- Component-scoped styles where applicable
- Loading and error states

## Future Enhancements
- User authentication system
- Notification filtering and categories
- Read/unread status tracking
- Desktop notifications
- Offline message queuing
- Comprehensive testing suite