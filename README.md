# CommUnity

## 1. Project Name

**CommUnity**

## 2. Project Description

CommUnity is a community event platform for discovering and organizing local
civic and volunteer activities. Users can browse upcoming events, view event
details, create events, and manage events they have created or joined. The
application also supports email/password authentication and Google sign-in.

## 3. Technologies, Packages, and Libraries

- **Next.js 16** and **React 19** for the web application
- **TypeScript** for type-safe application code
- **Tailwind CSS 4** and **DaisyUI 5** for styling and UI components
- **Better Auth** for authentication, with its MongoDB adapter and JWT plugins
- **MongoDB** for authentication data
- **Flatpickr** and **React Flatpickr** for date selection
- **React Icons** for icons
- **React Toastify** for notifications
- **ESLint** for linting

## 4. API

The application requests event and event-registration data from a separate
REST API at `http://localhost:3200`. It uses endpoints including `/events`,
`/myevents/:userId`, and `/event-joins`. The API server is **not included in
this repository**; obtain and start that backend separately on port `3200` for
event-related features to work.

Authentication is handled by Better Auth through this app's
`/api/auth` route. Better Auth stores its data in MongoDB and is configured for
Google sign-in.

## 5. Local Setup

### Prerequisites

- Node.js 20.9 or later and npm
- A MongoDB connection string
- The separate CommUnity REST API running at `http://localhost:3200`
- Google OAuth credentials if you want to use Google sign-in

### Steps

1. Clone this repository and open its project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   BETTER_AUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
   ```

   Set the Google OAuth authorized redirect URI to
   `http://localhost:3000/api/auth/callback/google`. Keep credentials private
   and do not commit `.env.local`.

4. Start the separate REST API on port `3200`.
5. Start the web application:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run lint
npm run build
npm run start
```
