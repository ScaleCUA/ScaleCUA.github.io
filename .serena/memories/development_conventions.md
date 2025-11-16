# Development Conventions and Code Style

## Code Style and Formatting

### Prettier Configuration

- **Semicolons**: Required
- **Trailing commas**: ES5 style
- **Quotes**: Single quotes for strings, double quotes for JSX
- **Print width**: 80 characters
- **Tab width**: 2 spaces (no tabs)
- **Bracket spacing**: Enabled
- **Bracket same line**: Disabled
- **Arrow function parentheses**: Avoid when possible
- **End of line**: LF (Unix style)
- **JSX quotes**: Double quotes

### TypeScript Configuration

- **Strict mode**: Enabled
- **Target**: ES2020
- **Module resolution**: Bundler mode
- **JSX**: react-jsx transform
- **No unused locals/parameters**: Enabled
- **No fallthrough cases in switch**: Enabled

### ESLint Rules

- **React**: No need to import React in JSX files
- **Prop-types**: Not required (TypeScript handles this)
- **Unused variables**: Error (prefix with underscore to ignore)
- **Explicit function return types**: Disabled
- **Explicit module boundary types**: Disabled
- **Any types**: Warning level
- **Prefer const**: Required
- **No var**: Required

## Component Architecture

### Patterns

- **Functional components** with TypeScript interfaces for props
- **Custom hooks** for complex state logic
- **Responsive design** with mobile-first approach
- **Consistent styling** using Tailwind CSS utility classes

### State Management

- **React built-in state** (useState, useEffect) - no external state library
- **Environment data** loaded asynchronously with proper loading states
- **Error handling** for failed environment loads

## File Naming and Organization

### Component Files

- **PascalCase** for React components
- **Descriptive names** that reflect functionality
- **Co-location** of related components

### Type Definitions

- **CamelCase** for type names and interfaces
- **Descriptive names** ending with `Type`, `Props`, `Data`, etc.
- **Organized** in `src/types/` directory

### Service Files

- **camelCase** for service functions
- **Singleton patterns** where appropriate
- **Error boundaries** and graceful degradation

## Styling Conventions

### Tailwind CSS Usage

- **Custom warm color palette**: warm, coral, gold themes
- **Responsive design**: Mobile-first approach
- **Utility classes**: btn-primary, card, gradient-warm, etc.
- **Performance optimizations**: CSS containment and will-change properties

### CSS Architecture

- **Component-specific** styles within CSS modules or inline
- **Global styles** in `src/styles/globals.css`
- **Theme consistency** across all components

## Git Workflow

### Branch Strategy

- **Main branch**: `main` for production
- **Feature branches**: Not heavily used (small project)
- **Direct commits**: Acceptable for this project size

### Commit Messages

- Follow conventional commits when possible
- Focus on the "why" rather than the "what"
- Clear, concise descriptions

## Development Process

### Pre-commit Workflow

1. **Format** code with Prettier
2. **Auto-fix** ESLint issues
3. **Run ESLint** checks
4. **Build** project to verify compilation

### Quality Gates

- **All linting** must pass
- **Build must** succeed without errors
- **TypeScript compilation** must be clean
- **Code formatting** must be consistent
