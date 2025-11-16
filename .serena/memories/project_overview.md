# ScaleWoB Project Overview

## Project Purpose

ScaleWoB is a GUI Agent Benchmark website for fair evaluation of GUI agents using AI-generated environments. This React/TypeScript application showcases benchmark environments, leaderboards, and provides interactive demonstrations with a sophisticated environment communication system.

## Technology Stack

### Core Technologies

- **React 19.2.0** with TypeScript and functional components using hooks
- **HashRouter** for GitHub Pages compatibility (not BrowserRouter)
- **Vite** as build tool and development server
- **Tailwind CSS v4** for styling with custom warm color palette
- **ESLint 9.39.1** with TypeScript plugin for code quality
- **Prettier** for code formatting

### Development Tools

- **Husky** for Git hooks
- **Node.js 18** runtime environment
- **GitHub Actions** for CI/CD deployment

### Key Directories Structure

```
ScaleWoB.github.io/
├── src/
│   ├── pages/              # Route-level components (Homepage, LeaderboardHome, Gallery, etc.)
│   ├── components/
│   │   ├── common/         # Shared layout components (Layout, Navigation, Footer, etc.)
│   │   └── leaderboard/    # Leaderboard-specific components
│   ├── types/              # TypeScript type definitions
│   ├── config/             # Configuration files (environment URLs)
│   ├── services/           # Business logic and data services
│   ├── scripts/            # Bridge script for CDN environments
│   ├── styles/             # Global CSS and Tailwind extensions
│   └── utils/              # Utility functions
├── env/                    # Environment definitions and data
├── .github/workflows/      # CI/CD deployment workflows
└── dist/                   # Build output directory
```

## Key Features

### ScaleWoB Bridge System

- Sophisticated communication layer (`src/scripts/scalewob-bridge.js`)
- Enables two-way communication between CDN-hosted environments and the main website
- Tracks user interactions (clicks, typing, scrolling, navigation)
- Executes commands from parent window (click, type, navigate, get-state)
- Uses postMessage API for secure cross-origin communication

### Environment Integration

- Environment data: JSON in `env/environments.json` with TypeScript interfaces
- URL configuration: Centralized in `src/config/environmentUrls.ts` for CDN links
- Type safety: Comprehensive TypeScript types in `src/types/environment.ts`
- Service layer: Sophisticated caching and error handling in `src/services/environmentService.ts`

### Parameter Evaluation System

- Dynamic input handling: Support for typed evaluation inputs (string, number, boolean)
- Environment-specific parameters: Defined in environment configuration
- Runtime evaluation: Interactive parameter submission for environment testing

## Routing Architecture

The app uses **HashRouter** (essential for GitHub Pages) with these main routes:

- `/` - Homepage with hero section and features
- `/leaderboard` - Agent performance rankings
- `/gallery` - Environment showcase with filtering
- `/launcher/:envId` - Dynamic environment launcher

## Deployment Configuration

- **Repository name**: `ScaleWoB.github.io`
- **Base URL**: `/` (configured in vite.config.ts)
- **Automatic deployment**: GitHub Actions workflow on push to main branch
- **HashRouter requirement**: Essential for proper routing on GitHub Pages
- **Path-based triggers**: Only rebuilds when relevant files change

## Environment System

Each environment has:

- Task name and description: Clear definition of the evaluation task
- Platform: Web Applications, Desktop Apps, Mobile Interfaces
- Difficulty level: Intermediate, Advanced, Expert
- Performance metrics: Completion rates and complexity scores
- Color theme: Visual consistency (warm, coral, gold)
- Parameters: Typed evaluation inputs for dynamic configuration
- CDN URL: External hosting location for live environments
