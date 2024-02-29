import type { StorybookConfig } from "@storybook/marko-vite";
import { taglib } from "@marko/compiler";

// taglib.register("@marko-tags");

export default {
  framework: "@storybook/marko-vite",
  stories: ["../src/**/{,*.}stories.ts"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
      },
    },
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
} satisfies StorybookConfig;
