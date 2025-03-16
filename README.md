# Webora University - Education & Learning Management Platform

Webora University is a comprehensive learning management platform for coaches and course creators. It enables educators to create and manage online communities, deliver courses, and engage with their students through a feature-rich environment.

## Features

- **Course Management**: Create, organize, and deliver structured courses with modules and sections
- **Community Building**: Create groups with channels for discussions and content sharing
- **Custom Domains**: Set up white-label experiences with custom domain support
- **Messaging System**: Direct messaging between users and group members
- **Content Creation**: Rich text editor for creating engaging course content
- **User Management**: Manage members, permissions, and access to content
- **Subscription Management**: Monetize your courses with subscription plans

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Authentication routes
│   │   ├── (landing)/          # Landing pages
│   │   ├── api/                # API routes
│   │   └── group/              # Group features
│   │       ├── [groupid]/
│   │       │   ├── channel/    # Discussion channels
│   │       │   ├── courses/    # Course management
│   │       │   ├── messages/   # Messaging system
│   │       │   └── settings/   # Group settings
│   ├── actions/                # Server actions
│   ├── components/             # Reusable components
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utility functions
├── prisma/                     # Database schema
└── public/                     # Static assets
```

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Payments**: Stripe
- **File Storage**: Uploadcare
- **Deployment**: Vercel

## Custom Domain Functionality

The platform allows learning groups (course creators, coaches) to set up custom domains for their learning communities. This is a premium feature that enhances branding and professionalism for course creators.

The Vercel environment variables are used to:

1. **Add custom domains**: Course creators can add their own domain to their learning group
2. **Verify domain configuration**: The platform checks if the DNS is configured correctly
3. **Route traffic**: The middleware handles routing requests from custom domains to the appropriate group content

### Key Components

1. **Custom Domain Management UI**:

   - Located at `/group/[groupid]/settings/domains`
   - Allows group owners to add and configure custom domains
   - Shows domain verification status

2. **Domain API Integration**:

   - Uses Vercel's API to register and verify domains
   - Requires authentication with Vercel's API using the bearer token

3. **Middleware for Domain Routing**:
   - Intercepts requests to custom domains
   - Maps them to the appropriate group content

### Environment Variables Explained

1. **PROJECT_ID_VERCEL**:

   - Identifies the Vercel project where domains will be registered
   - Used in API calls to Vercel's domain management endpoints

2. **TEAM_ID_VERCEL**:

   - Identifies the Vercel team that owns the project
   - Required for API calls to Vercel's domain management endpoints

3. **AUTH_BEARER_TOKEN**:
   - Authentication token for Vercel's API
   - Provides authorization to manage domains through Vercel's API

## Business Value

This custom domain functionality provides several benefits for the learning management platform:

1. **Premium Feature**: Can be offered as a premium feature for course creators
2. **Professional Branding**: Allows course creators to maintain their brand identity
3. **White-Label Solution**: Enables a white-label experience for learners
4. **Competitive Advantage**: Differentiates from platforms that don't offer custom domains

## Implementation Details

The custom domain functionality is implemented through:

1. **Vercel API Integration**:

   - `onAddCustomDomain`: Registers a domain with Vercel and updates the group record
   - `onGetDomainConfig`: Checks the configuration status of a domain

2. **Middleware**:
   - Intercepts requests to custom domains
   - Calls an API endpoint to verify the domain
   - Rewrites the URL to serve the appropriate group content

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohmdev/webora-university.git
   cd webora-university
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` and fill in the required values:

   ```bash
   cp .env.example .env
   ```

4. Set up the database:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Environment Variables

- **Database**: `DATABASE_URL`
- **Authentication**: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
- **Payments**: `NEXT_PUBLIC_STRIPE_PUBLISH_KEY`, `STRIPE_SECRET_KEY`
- **File Storage**: `UPLOAD_CARE_PUBLIC_KEY`, `UPLOAD_CARE_SECRET`
- **Custom Domains**: `PROJECT_ID_VERCEL`, `TEAM_ID_VERCEL`, `AUTH_BEARER_TOKEN`

## Deployment

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com).
