# GitHub Copilot Instructions for poseycounty

## Code Quality Standards

### ESLint Compliance

**MANDATORY**: All code written must comply with the project's ESLint configuration (`eslint.config.mjs`).

- **Before completing any task**: Run `npm run lint:strict` to verify zero warnings and zero errors
- **Fix all linting issues**: Do not deliver code with linting warnings or errors
- **If a rule is unavoidable**:
  1. First, try to refactor the code to comply with the rule
  2. If truly unavoidable, disable the rule inline with a comment explaining why:
     ```typescript
     // eslint-disable-next-line rule-name -- Reason why this is necessary
     ```
  3. As a last resort, update `eslint.config.mjs` to disable the rule project-wide with a comment explaining the decision

### Testing Requirements

**MANDATORY**: When creating or modifying code that contains business logic, event handlers, or utility functions:

1. **Create comprehensive tests**:
   - Component tests in `index.test.tsx`
   - Logic/utility tests in `logic.test.tsx`
   - Aim for 100% code coverage

2. **Test files must pass linting**:
   - All test files must comply with ESLint rules
   - Use appropriate ESLint disable comments only when absolutely necessary (e.g., mocking frameworks)
   - Common acceptable patterns:

     ```typescript
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const { unusedProp, ...rest } = props;

     /* eslint-disable @typescript-eslint/no-unused-vars */
     const { prop1, prop2, prop3, ...imgProps } = props;
     /* eslint-enable @typescript-eslint/no-unused-vars */
     ```

3. **Verify tests pass**:
   - Run `npm test` to ensure all tests pass
   - Run `npm run lint:strict` to ensure test files have no linting issues
   - Update coverage reports if needed

### Component Structure

When creating React components, follow the established pattern:

```
ComponentName/
  ├── index.tsx        # Main component with JSX
  ├── logic.tsx        # Business logic and handlers
  ├── styles.css      # Component styles
  ├── index.test.tsx   # Component integration tests
  └── logic.test.tsx   # Logic unit tests
```

### Workflow for Every Code Change

1. **Write the code** following TypeScript and React best practices
2. **Create/update tests** if the change involves logic or components
3. **Run linting**: `npm run lint:strict`
4. **Fix any issues**: Address all warnings and errors
5. **Run tests**: `npm test`
6. **Verify all pass**: Both tests and linting must have zero issues

### Project-Specific Rules

- **No `require()`**: Use ES6 imports (`import`) instead of CommonJS (`require()`)
- **Unused variables in destructuring**: Prefix with underscore or use ESLint disable comments
- **Test mocks**: Acceptable to disable certain rules for framework-specific mocking patterns
- **Strict mode**: Project runs `eslint --max-warnings=0`, so even warnings will fail CI/CD

### When in Doubt

- Check existing components in `src/components/modules/` for patterns
- Look at existing test files for testing patterns
- Consult `eslint.config.mjs` for the exact rules in place
- Ask the user if you're unsure whether a rule should be disabled

## Remember

**Quality over speed**: Take the time to write clean, tested, lint-compliant code. It saves time in the long run.
