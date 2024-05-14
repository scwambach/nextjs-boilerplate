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

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-boilerplate.git
2. Navigate to the project directory: `cd nextjs-boilerplate`
3. Install dependencies: `yarn`
4. Start the development server: `yarn dev`

## Scripts
- __dev__: Start the development server.
- __dev:test__: Start the development server with `jest watch`.
- __build__: Build the production-ready application.
- __start__: Start the production server.
- __lint__: Lint the code using ESLint.
- __lint__:fix: Lint the code and automatically fix issues.
- __test__: Run unit tests using Jest.
- __test:watch__: Run unit tests in watch mode.
- __coverage__: Generate test coverage report.

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
