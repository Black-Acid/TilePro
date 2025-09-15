# Overview

This is a professional tiling contractor website built for "The Tanko Tiling Company Limited". The application is a full-stack web solution featuring a modern React frontend with a Node.js/Express backend, designed to showcase tiling services and capture customer inquiries through a contact form system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React and TypeScript, utilizing a component-based architecture with shadcn/ui for consistent design components. The application uses Vite as the build tool and development server, providing fast hot module replacement and optimized builds. The frontend implements a single-page application (SPA) pattern with client-side routing via Wouter, featuring smooth scrolling navigation between sections.

The UI design system is built on Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes. The component library includes comprehensive form handling with React Hook Form and Zod validation, ensuring type-safe data handling throughout the application.

## Backend Architecture
The server uses Express.js with TypeScript in ESM format, implementing a RESTful API architecture. The application follows a layered approach with clear separation between routes, storage, and business logic. The storage layer uses an abstraction pattern (IStorage interface) that currently implements in-memory storage but can be easily swapped for database persistence.

The backend includes middleware for request logging, JSON parsing, and error handling. API endpoints are structured to handle contact form submissions with proper validation and error responses.

## Data Storage Solutions
The application uses Drizzle ORM configured for PostgreSQL, though currently implements in-memory storage for development. The schema defines two main entities: users and contact submissions. The database configuration supports migrations and is ready for production deployment with proper PostgreSQL connection.

The storage abstraction allows for easy migration from in-memory to persistent storage without changing the application logic, following the repository pattern for data access.

## Form Handling and Validation
Contact forms implement comprehensive validation using React Hook Form with Zod schemas for type-safe validation. The validation includes client-side checks for required fields, email format, minimum lengths, and proper phone number formatting. Server-side validation mirrors client-side rules to ensure data integrity.

The form submission process includes loading states, success notifications via toast messages, and proper error handling with user-friendly feedback.

## Development and Build Process
The application uses a monorepo structure with shared TypeScript types and schemas between client and server. The build process separates client and server builds, with Vite handling frontend bundling and esbuild processing the server code for production deployment.

Development includes hot module replacement for both client and server code, with TypeScript compilation checking across the entire codebase.

# External Dependencies

## UI and Design System
- **shadcn/ui**: Comprehensive React component library built on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography

## Frontend State Management
- **TanStack Query**: Server state management with caching, synchronization, and background updates
- **React Hook Form**: Performant form library with minimal re-renders
- **Wouter**: Minimalist client-side routing solution

## Backend Framework and Utilities
- **Express.js**: Web application framework for Node.js
- **Zod**: TypeScript-first schema validation library
- **date-fns**: Modern JavaScript date utility library

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM for TypeScript
- **Neon Database**: Serverless PostgreSQL database platform
- **Drizzle Kit**: CLI tools for database migrations and schema management

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking for JavaScript
- **esbuild**: Fast JavaScript bundler for server builds
- **Replit Plugins**: Development environment enhancements for Replit platform

## Email Services
- **SendGrid**: Email delivery service for transactional emails (configured but not actively used in current implementation)

## Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured for future authentication features)