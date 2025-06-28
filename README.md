# Health Check-in App
This is a simple health check-in app.

## Tech Stack:
- React Native
- Expo
- Tamagui
- NestJS

## Implementation Approach:
- In a backend used Service Pattern to create a health check-in service, then provide a controller to handle the request and response.
- In a frontend, I used a form to collect the user's mood, energy, and notes.
- Then, I used a mock API call to the backend to submit the data.
- The backend will return a response with a message and a list of recommendations.
- The frontend will display the message and the recommendations, in a result page.
- The frontend will also display a button to submit the check-in again.

## UI Descisions
- Tamagui is already have atomic design system, so I used it to create the UI.
- Used high level components to create the UI, like CheckInHeader, ErrorDisplay, etc.
- Tamagui already have a cli implementation, it provide a a layout component to create a layout.

## Features:
- Check-in Form with Mood, Energy, and Notes
- Results Page with Recommendations
- Mock API calls to a backend server 

### To run the app:
- Clone the repository


#### Backend: 
- Run `pnpm install`
- Run `pnpm run start:dev`

#### Frontend:
- Run `bun install`
- Run `bun start`

#### Open the app in the Expo Go app.
- Scan the QR code with the Expo Go app, or open the app in the browser. `http://localhost:8081`
- Backend is running on `http://localhost:3000`
- Frontend is running on `http://localhost:8081`

