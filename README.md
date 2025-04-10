# Neon Auth - Vite React Template App

This is a [Vite](https://vite.dev/) + [React](https://react.dev/) project using react-router that serves as template for the [Neon Auth](https://neon.tech/docs/guides/neon-auth) integration with [Stack Auth](https://docs.stack-auth.com/overview).

## Features

- React app with React Route, TypeScript and Tailwind CSS
- User authentication powered by Stack Auth
- Ready-to-deploy configuration for Vercel, Netlify, and Render

## Prerequisites

- [Neon](https://neon.tech) account
- Node.js 18+ installed locally

## Local Development Setup

### 1. Set up Neon Auth

1. Create a new Neon project or use an existing one
2. Navigate into Neon Auth
3. Click "Connect" and go through the OAuth flow until your Neon Auth integration is set

### 2. Run the development server

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` file and copy the variables from the Neon Auth dashboard:

   ```
   # Stack Auth
   VITE_STACK_PROJECT_ID=
   VITE_STACK_PUBLISHABLE_CLIENT_KEY=
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Learn More

- [Neon Auth Documentation](https://neon.tech/docs/guides/neon-identity)
- [Stack Auth Documentation](https://docs.stack-auth.com/)

## Authors

- [Shridhar Deshmukh](https://github.com/shridhad)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
