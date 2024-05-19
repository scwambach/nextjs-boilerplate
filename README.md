# Next.js Boilerplate Starter

This is a comprehensive boilerplate starter for building web applications using Next.js. It comes pre-configured with the following technologies:

- Next.js
- Husky (Git hooks)
- Github Workflows
- Prettier (Code formatting)
- ESLint (Code linting)
- TypeScript
- Jest (Unit testing)
- Cypress (End-to-end testing)
- SCSS (Sass for styling)

## Getting Started

To get started with this boilerplate, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nextjs-boilerplate.git
   ```
2. **Navigate to the project directory**: `cd nextjs-boilerplate`
3. **Use correct Node version**: `nvm use`
4. **Install dependencies**: `npm i`
5. **Setup Sanity**
   * If you don't have the Sanity CLI, install if globally
     `npm install -g @sanity/cli`
   * Initialize a new Sanity project:
     `sanity init`
   * Follow the prompts to create a new project or link to an existing one.
   * Once Sanity is set up, copy the necessary configuration files to your project.
6. **Start the development server**: `npm run dev`

## Scripts:

`npm run dev`

- Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

`npm run build`

- Builds the app for production to the .next folder.

`npm run start`

- Starts the production build.

`npm run lint`

- Runs the Next.js linter.

`npm run test`

- Runs the tests using Jest.

`npm run test:watch`

- Runs the tests in watch mode.

`npm run coverage`

- Generates test coverage reports.

`npm run prepare`

- Installs Husky for Git hooks.

`npm run cypress:open`

- Opens the Cypress test runner.

`npm run cypress:run`

- Runs the Cypress tests.

`npm run check-format`

- Formats the codebase using Prettier.

`npm run check-lint`

- Lints the codebase using ESLint.

`npm run dev:test`

- Runs the development server and tests in watch mode concurrently.

```
nextjs-boilerplate/
├── public/                         # Static assets
├── src/
│   ├── app/                        # Next.js pages and layout
│   │   ├── [slug]/                 # Wildcard page template
│   │   ├── api/                    # Next.js api directory
│   │   │   └── auth/               # NextAuth folder
│   │   │       └── [...nextauth]/  # Wildcard page for all of NextAuth
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── favicon.ico             # Favicon
│   │   ├── layout.tsx              # Layout component
│   │   ├── page.tsx                # Sample page component
│   ├── components/                 # React components
│   │   ├── blocks/                 # All Block-level components
│   │   ├── global/                 # All Global components
│   │   ├── modules/                # All Module-level components
│   │   ├── utility/                # All Utility-level components
│   ├── forms/                      # Form library
│   ├── queries/                    # Sanity GROQ Queries
│   ├── styles/                     # SCSS styles
│   └── utils/                      # Utility functions
├── .eslintrc.json                  # ESLint configuration
├── jest.config.js                  # Jest configuration
├── cypress.json                    # Cypress configuration
├── tsconfig.json                   # TypeScript configuration
└── .prettierrc                     # Prettier configuration

```

I'm sure there's more, but you get the idea...

## License

Feel free to customize this README according to your specific project needs.
