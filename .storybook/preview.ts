import type { Preview } from "@storybook/react";
import "./storybook.css";
import "../src/styles/main.scss";
import { CssBaseline, createTheme, ThemeProvider } from "@material-ui/core";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import DocumentationTemplate from "./DocumentationTemplate.mdx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#12263A",
    },
    secondary: {
      main: "#1668B4",
    },
  },
});

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      main: theme,
    },
    defaultTheme: "main",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    decorators,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
};

export default preview;
