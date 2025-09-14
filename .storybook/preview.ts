import type { Preview } from '@storybook/nextjs-vite';

// 👇 Import your Tailwind styles
import "../src/app/globals.css"; // adjust path if needed

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
