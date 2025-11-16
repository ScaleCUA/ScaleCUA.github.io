# Suggested Commands for ScaleWoB Development

## Development Commands

### Start Development Server

```bash
npm run dev
```

- Starts Vite development server on port 3000
- Hot module replacement enabled
- TypeScript compilation in watch mode

### Build Commands

```bash
npm run build          # TypeScript compilation + Vite build
npm run preview        # Preview production build locally
```

### Code Quality Commands

#### Linting

```bash
npm run lint           # Run ESLint checks (read-only)
npm run lint:fix       # Auto-fix ESLint issues where possible
```

#### Formatting

```bash
npm run format         # Format code with Prettier (writes changes)
npm run format:check   # Check code formatting without making changes
```

### Complete Workflow Commands

```bash
npm run precommit      # Full pre-commit workflow (format + lint:fix + lint + build)
```

## Git Commands

### Status and Checkouts

```bash
git status             # Check working directory status
git checkout -b feature-name    # Create and switch to feature branch
git checkout main      # Switch back to main branch
```

### Commit Workflow

```bash
git add .              # Stage all changes
git commit -m "feat: add new component"  # Commit with conventional message
git push origin main   # Push to main branch (triggers deployment)
```

## System Commands (Darwin/macOS)

### File Operations

```bash
ls -la                 # List files with details
find . -name "*.tsx"   # Find TypeScript React files
grep -r "function" src/  # Search for text in files
```

### Process Management

```bash
pkill -f "node.*vite"  # Kill running Vite processes
ps aux | grep node     # Check running Node processes
```

### Directory Navigation

```bash
cd src/components      # Navigate to components directory
cd ../..               # Go up two directories
pwd                    # Show current directory path
```

## Environment-specific Commands

### Environment Testing

```bash
# Test CDN environment communication
# Open browser dev tools and check console for bridge messages
```

### Build Verification

```bash
npm run build          # Verify TypeScript compilation
npm run preview        # Test production build locally
```

## Deployment Commands

### Manual Deployment (when needed)

```bash
git push origin main   # Triggers GitHub Actions deployment
```

### Build Artifact Management

```bash
# Build artifacts are automatically handled by GitHub Actions
# Manual verification:
ls -la dist/           # Check build output directory
```

## Troubleshooting Commands

### Dependency Issues

```bash
rm -rf node_modules package-lock.json
npm install            # Clean install dependencies
```

### Build Issues

```bash
npm run lint:fix       # Fix auto-fixable linting issues
npm run format         # Fix formatting issues
tsc --noEmit          # Check TypeScript compilation without building
```

### Development Server Issues

```bash
pkill -f "vite"       # Kill any hanging Vite processes
npm run dev           # Restart development server
```

## Performance Monitoring

```bash
# Monitor bundle size after build
du -sh dist/          # Check build output size
# Performance testing should be done in browser dev tools
```

## Quick Reference for Daily Development

1. **Start work**: `npm run dev`
2. **Check code**: `npm run lint && npm run format:check`
3. **Fix issues**: `npm run lint:fix && npm run format`
4. **Verify build**: `npm run build`
5. **Commit**: Git workflow as shown above
