# ScaleWoB Architecture Patterns and Guidelines

## Core Architectural Principles

### 1. HashRouter Architecture

**Critical Requirement**: Use HashRouter, not BrowserRouter, for GitHub Pages compatibility

```tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
```

### 2. Component Architecture

- **Functional components only** with React hooks
- **TypeScript interfaces** for all props
- **Custom hooks** for complex stateful logic
- **Composition over inheritance** patterns

### 3. Service Layer Pattern

- **Singleton services** for data management
- **Environment service** with caching and error handling
- **Type-safe data flow** from services to components

## Key Architectural Patterns

### ScaleWoB Bridge System

**Purpose**: Two-way communication between CDN environments and main website

**Implementation**:

- `postMessage API` for cross-origin communication
- Event-driven architecture for user interaction tracking
- Command pattern for parent window to environment communication

**Key Files**:

- `src/scripts/scalewob-bridge.js` - Main bridge implementation
- `src/services/environmentService.ts` - Environment data management

### Environment Management Pattern

**Data Flow**:

1. Environment definitions in `env/environments.json`
2. Type definitions in `src/types/environment.ts`
3. URL configuration in `src/config/environmentUrls.ts`
4. Service layer caching and error handling

**Caching Strategy**:

- 5-minute default cache timeout
- Intelligent retry logic with exponential backoff
- Type-safe error boundaries

### Parameter Evaluation System

**Dynamic Input Handling**:

- Typed evaluation inputs (string, number, boolean)
- Environment-specific parameter definitions
- Runtime parameter validation and submission

## Component Organization Patterns

### Layout Pattern

All routes except `/launcher/:envId` use the Layout component:

```tsx
<Route
  path="/"
  element={
    <Layout>
      <Homepage />
    </Layout>
  }
/>
```

### Page Component Pattern

**Route-level components** in `src/pages/`:

- Homepage (`/`)
- LeaderboardHome (`/leaderboard`)
- Gallery (`/gallery`)
- EnvironmentWrapper (`/launcher/:envId`) - standalone

### Shared Component Pattern

**Common components** in `src/components/common/`:

- Layout, Navigation, Footer
- Reusable UI elements

## State Management Patterns

### Local State Pattern

- **useState** for simple component state
- **useEffect** for side effects and data fetching
- **useCallback/useMemo** for performance optimization

### Service Pattern

- **EnvironmentDataService** for environment data
- **Singleton pattern** for global state management
- **Intelligent caching** with configurable timeouts

### Error Handling Pattern

- **Error boundaries** for graceful degradation
- **Service-level error handling** with retry logic
- **User-friendly error messages**

## Styling Architecture Patterns

### Tailwind CSS v4 Pattern

- **Utility-first** approach
- **Custom color palette**: warm, coral, gold themes
- **Responsive design**: Mobile-first breakpoints
- **Performance optimization**: CSS containment

### Theme Consistency Pattern

- **Custom utility classes**: btn-primary, card, gradient-warm
- **Color themes** defined in `src/styles/globals.css`
- **Consistent spacing** and typography scales

## Data Flow Patterns

### Environment Data Flow

```
JSON Environment Data → TypeScript Types → Service Layer → Components
```

### Parameter Evaluation Flow

```
Environment Config → Parameter Types → Runtime Validation → Submission
```

### Bridge Communication Flow

```
Parent Window → postMessage → Bridge Script → Environment Events → Parent
```

## Performance Patterns

### Code Organization

- **Lazy loading** for large components
- **Route-based code splitting** potential
- **Bundle analysis** monitoring

### Environment Loading

- **On-demand loading** for environments
- **CDN caching** utilization
- **Non-blocking UI** during environment initialization

### Bridge Performance

- **Event delegation** for efficiency
- **Message throttling** where appropriate
- **Memory leak prevention** for cross-origin communication

## Development Patterns

### TypeScript Patterns

- **Strict mode** enabled
- **Interface-first** development
- **Generic types** for reusable components
- **Enum usage** for constrained values

### Testing Patterns

- **Manual testing** focus (no automated tests currently)
- **Build verification** as testing substitute
- **Cross-browser validation** for bridge communication

### Deployment Patterns

- **GitHub Actions** CI/CD pipeline
- **Path-based triggers** for efficient builds
- **Production optimization** through Vite

## Security Patterns

### Cross-Origin Communication

- **postMessage API** with origin validation
- **Command validation** in bridge script
- **Secure data transfer** between domains

### Data Validation

- **TypeScript compile-time validation**
- **Runtime parameter validation**
- **Input sanitization** for user inputs

## Extensibility Patterns

### Environment System

- **Plugin-like architecture** for new environments
- **Type-safe extension points**
- **Configuration-driven** environment definitions

### Component Library

- **Reusable component patterns**
- **Consistent prop interfaces**
- **Theme integration** points

These patterns should be followed when extending or modifying the ScaleWoB codebase to maintain consistency and reliability.
