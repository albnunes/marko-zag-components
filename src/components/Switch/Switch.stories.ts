// Import the necessary Storybook types for Marko components
import type { Meta, Story } from '@storybook/marko';
// Import the utility functions for story generation (assumed to exist)
import {
  addRenderBodies,
  buildExtensionTemplate,
} from '../../../.storybook/utils';
// Import the Switch component. Adjust the import path according to your project structure.
import Component, { type Input } from './Switch.marko';

// Dynamic example creation function (adjust paths and utilities according to your setup)
async function createStoryFromExample(name: string) {
  const example = await import(`./examples/${name}.marko`);
  const code = await import(`./examples/${name}.marko?raw`);
  // Adjust the buildExtensionTemplate utility to your needs
  return buildExtensionTemplate(example.default, code.default, {
    renderBody: `Switch Label`, // Example render body. Customize as needed.
  });
}

// Define story metadata
export default {
  title: 'Switch',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: "Documentation for the Switch component",
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    dir: { control: { type: 'select', options: ['ltr', 'rtl'] } },
    disabled: { control: 'boolean' },
    form: { control: 'text' },
    id: { control: 'text' },
    invalid: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    required: { control: 'boolean' },
    value: { control: 'text' },
    // Note: Parameters involving functions or complex objects may not be directly controllable through Storybook UI.
  },
} as Meta<Input>;

// Implement story based on an example
const story = await createStoryFromExample('default');

// Define default export for the story
export const Default = story.bind({});

// Additional stories can be added here to showcase different configurations or states of the switch component.
// For example, "Checked", "Disabled", "WithLabel", etc., to provide a comprehensive view of the component's capabilities.