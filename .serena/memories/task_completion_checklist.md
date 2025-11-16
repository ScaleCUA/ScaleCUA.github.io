# Task Completion Checklist for ScaleWoB

## Required Steps Before Considering a Task Complete

### 1. Code Quality Checks

- [ ] **ESLint passes**: `npm run lint` shows no errors
- [ ] **Auto-fix applied**: `npm run lint:fix` run to fix any auto-fixable issues
- [ ] **Code formatted**: `npm run format` applied consistently
- [ ] **TypeScript compilation**: No TypeScript errors, `tsc --noEmit` clean

### 2. Build Verification

- [ ] **Build succeeds**: `npm run build` completes without errors
- [ ] **No warnings**: Build process produces no critical warnings
- [ ] **Output verification**: Generated files in `dist/` directory
- [ ] **Preview test**: `npm run preview` works correctly (optional)

### 3. Code Standards Compliance

- [ ] **Component structure**: Follows functional component patterns
- [ ] **Type safety**: All TypeScript types properly defined
- [ ] **Props interface**: Clear and complete prop type definitions
- [ ] **Error handling**: Proper error boundaries and graceful degradation
- [ ] **Loading states**: Appropriate loading indicators for async operations

### 4. Testing and Verification

- [ ] **Manual testing**: Functionality works as expected
- [ ] **Responsive design**: Works on mobile and desktop viewports
- [ ] **Route functionality**: HashRouter navigation works correctly
- [ ] **Environment communication**: Bridge system functions if applicable
- [ ] **Cross-browser check**: Basic functionality in multiple browsers (optional but recommended)

### 5. Documentation and Comments

- [ ] **Code comments**: Complex logic explained where necessary
- [ ] **Type documentation**: Interface and type definitions are self-documenting
- [ ] **Prop documentation**: Component purposes clear from types and names

### 6. Git Readiness

- [ ] **Changes staged**: All relevant changes added to git staging area
- [ ] **Clean working directory**: No uncommitted changes in tracked files
- [ ] **Commit message**: Clear, descriptive commit message following conventional commits

## Quick Pre-commit Command

Run the complete pre-commit workflow to automate most checks:

```bash
npm run precommit
```

This single command handles:

- Code formatting (`npm run format`)
- ESLint auto-fix (`npm run lint:fix`)
- ESLint verification (`npm run lint`)
- Build verification (`npm run build`)

## Critical Requirements for ScaleWoB

### HashRouter Compatibility

- [ ] **HashRouter used**: Never BrowserRouter (GitHub Pages requirement)
- [ ] **Route paths**: All routes work with hash-based navigation
- [ ] **GitHub Pages**: Deployment will fail with BrowserRouter

### Environment System

- [ ] **Type safety**: Environment data properly typed
- [ ] **Error handling**: Graceful failure for missing environments
- [ ] **Bridge communication**: postMessage API used correctly
- [ ] **CDN integration**: External environment loading works

### Performance Considerations

- [ ] **Bundle size**: No unnecessary dependencies added
- [ ] **Lazy loading**: Large components loaded on-demand where applicable
- [ ] **CSS optimization**: Tailwind CSS purging working correctly
- [ ] **Asset optimization**: Images and assets properly optimized

## Task-Specific Checklists

### For New Components

- [ ] **Functional component**: Uses hooks, not class components
- [ ] **TypeScript interface**: Props properly typed
- [ ] **Responsive design**: Mobile-first approach
- [ ] **Consistent styling**: Uses Tailwind utility classes
- [ ] **Export pattern**: Default export for components

### For Route Changes

- [ ] **HashRouter**: Routes work with hash-based navigation
- [ ] **Route components**: Wrapped in Layout where appropriate
- [ ] **Navigation**: Links work correctly with HashRouter
- [ ] **404 handling**: Appropriate fallback for unknown routes

### For Environment Features

- [ ] **Type definitions**: Updated environment types
- [ ] **Service layer**: Changes reflected in environmentService
- [ ] **Bridge compatibility**: Communication system updated if needed
- [ ] **Error handling**: Graceful degradation for environment failures

### For Styling Changes

- [ ] **Tailwind classes**: Using utility classes consistently
- [ ] **Color theme**: Follows warm color palette (warm, coral, gold)
- [ ] **Responsive breakpoints**: Mobile-first design maintained
- [ ] **Custom CSS**: Only when necessary, properly scoped

## Final Verification Steps

1. **Run complete pre-commit workflow**: `npm run precommit`
2. **Manual functionality test**: Test the specific feature you built
3. **Route navigation test**: Ensure all routes still work
4. **Build inspection**: Check that build output looks reasonable
5. **Git status check**: Ensure only intended changes are staged

Only when all applicable items in this checklist are satisfied should a task be considered complete.
