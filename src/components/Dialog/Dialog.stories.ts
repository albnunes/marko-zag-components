import type { Meta, Story } from '@storybook/marko';
import {
  addRenderBodies,
  buildExtensionTemplate,
} from '../../../.storybook/utils';
import Component, { type Input } from './Dialog.marko';

async function createStoryFromExample(name: string) {
  const example = await import(`./examples/${name}.marko`);
  const code = await import(`./examples/${name}.marko?raw`);
  return buildExtensionTemplate(example.default, code.default, {
    renderBody: `Dialog Content`,
  });
}

export default {
  title: 'Dialog',
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
    "aria-label": { control: 'text' },
    closeOnEscapeKeyDown: { control: 'boolean' },
    closeOnInteractOutside: { control: 'boolean' },
    dir: { control: { type: 'select', options: ['ltr', 'rtl'] } },
    modal: { control: 'boolean' },
    open: { control: 'boolean' },
    preventScroll: { control: 'boolean' },
    restoreFocus: { control: 'boolean' },
    role: { control: { type: 'select', options: ['dialog', 'alertdialog'] } },
    trapFocus: { control: 'boolean' },
    // Note: Methods and properties related to focus management and event handlers are not easily controllable via Storybook UI
  },
} as Meta<Input>;

const story = await createStoryFromExample('default');

export const Default = story.bind({});

// Additional story configurations can be created here
// for showcasing the Dialog component in various configurations or with specific props set.