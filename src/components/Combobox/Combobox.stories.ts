import type { Meta, Story } from '@storybook/marko';
import {
  addRenderBodies,
  buildExtensionTemplate,
} from '../../../.storybook/utils';
import Component, { type Input } from './Combobox.marko';

async function createStoryFromExample(name: string) {
  const example = await import(`./examples/${name}.marko`);
  const code = await import(`./examples/${name}.marko?raw`);
  return buildExtensionTemplate(example.default, code.default, {
    renderBody: `Combobox Option`,
  });
}

export default {
  title: 'Combobox',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Component,
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    collection: { control: 'array' },
    allowCustomValue: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    closeOnSelect: { control: 'boolean' },
    dir: { control: { type: 'select', options: ['ltr', 'rtl'] } },
    disabled: { control: 'boolean' },
    highlightedValue: { control: 'text' },
    inputBehavior: { control: { type: 'select', options: ['input', 'none'] } },
    inputValue: { control: 'text' },
    invalid: { control: 'boolean' },
    loop: { control: 'boolean' },
    multiple: { control: 'boolean' },
    name: { control: 'text' },
    openOnClick: { control: 'boolean' },
    placeholder: { control: 'text' },
    readOnly: { control: 'boolean' },
    selectionBehavior: { control: { type: 'select', options: ['automatic', 'manual'] } },
    selectOnBlur: { control: 'boolean' },
    value: { control: 'text' },
    // Note: Event handlers and methods that are not easily controllable or showcased via Storybook UI are omitted
  },
} as Meta<Input>;

const story = await createStoryFromExample('default');

export const Default = story.bind({});

// Additional stories can be defined here to showcase different states or configurations of the Combobox component.
// For instance, "WithCustomValue", "AutoFocused", "DisabledCombobox", etc. 
// You can setup args for each story to tailor the combobox behavior and list of items.