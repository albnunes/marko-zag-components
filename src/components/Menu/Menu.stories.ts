// Import the necessary Storybook types for Marko components
import type { Meta, Story } from '@storybook/marko';
// Import the utility functions for story generation (Assumed to exist)
import {
  addRenderBodies,
  buildExtensionTemplate,
} from '../../../.storybook/utils';
// Import the Menu component. Adjust the import path according to your project structure.
import Component, { type Input } from './Menu.marko';

// Dynamic example creation function (adjust paths and utilities according to your setup)
async function createStoryFromExample(name: string) {
  const example = await import(`./examples/${name}.marko`);
  const code = await import(`./examples/${name}.marko?raw`);
  // Adjust the buildExtensionTemplate utility to your needs
  return buildExtensionTemplate(example.default, code.default, {
    renderBody: `Menu Item`, // Example render body. Customize as needed.
  });
}

// Define story metadata
export default {
  title: 'Menu',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: "Documentation for the Menu component",
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    "aria-label": { control: 'text' },
    anchorPoint: { control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] } },
    closeOnSelect: { control: 'boolean' },
    dir: { control: { type: 'select', options: ['ltr', 'rtl'] } },
    highlightedId: { control: 'text' },
    loop: { control: 'boolean' },
    open: { control: 'boolean' },
    positioning: { control: { type: 'radio', options: ['absolute', 'fixed', 'relative'] } },
    value: { control: 'text' },
    // Note: Parameters dealing with functions or complex objects may not be directly controllable through Storybook UI.
  },
} as Meta<Input>;

// Implement story based on an example
const story = await createStoryFromExample('default');

// Define default export for the story
export const Default = story.bind({});

// Add additional stories here to showcase different configurations or states of the menu component.
// For example, with different anchor points, with and without close on selection, etc.