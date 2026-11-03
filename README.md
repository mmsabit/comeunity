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
REST API. Its base URL is configured with `NEXT_PUBLIC_API_URL`; the deployed
CommUnity API is `https://community-server-yoao.vercel.app`. The app uses
endpoints including `/events`, `/events/:eventId`, `/myevents/:userId`, and
`/event-joins`. The API server is **not included in this repository**. To use
a local API instead, run the backend separately and set the base URL to its
address, such as `http://localhost:3200`.

Authentication is handled by Better Auth through this app's
`/api/auth` route. Better Auth stores its data in MongoDB and is configured for
Google sign-in.

## 5. Local Setup

### Prerequisites

- Node.js 20.9 or later and npm
- A MongoDB connection string
- Access to the deployed CommUnity REST API, or a separately running local copy
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
   NEXT_PUBLIC_API_URL=https://community-server-yoao.vercel.app
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
   ```

   For a local backend, set `NEXT_PUBLIC_API_URL` to its base URL instead,
   for example `http://localhost:3200`.

   Set the Google OAuth authorized redirect URI to
   `http://localhost:3000/api/auth/callback/google`. Keep credentials private
   and do not commit `.env.local`.

4. Start the web application:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run lint
npm run build
npm run start
```
