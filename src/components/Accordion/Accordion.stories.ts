import type { Meta, Story } from "@storybook/marko";
import {
  addRenderBodies,
  buildExtensionTemplate,
} from "../../../.storybook/utils";
import Component, { type Input } from "./Accordion.marko";

async function createStoryFromExample(name: string) {
  const example = await import(`./examples/${name}.marko`);
  const code = await import(`./examples/${name}.marko?raw`);
  // const story = () => ({
  //   component: example,
  //   name,
  // });
  // story.storyName = name;
  // story.parameters = {
  //   controls: { hideNoControlsWarning: true },
  //   docs: {
  //     source: {
  //       code,
  //     },
  //   },
  // };
  // return story
  return buildExtensionTemplate(example.default, code.default, {

    renderBody: `Checkbox`,
  });
}
// const Template = (args: any) => ({
//   input: addRenderBodies(args),
// });
// const Template = (args: any) => ({
//   input: addRenderBodies(args),
// });

export default {
    title: 'Accordion',
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
      collapsible: { control: 'boolean' },
      dir: { control: { type: 'select', options: ['ltr', 'rtl'] } },
      disabled: { control: 'boolean' },
      form: { control: 'text' },
      ids: { control: 'object' },
      multiple: { control: 'boolean' },
      orientation: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
      value: { control: 'text' },
      // Note: Event handler functions and methods to get root node might not be easily controllable or showcased via Storybook UI
    },
  } as Meta<Input>;
const story = await createStoryFromExample("default");

export const Default= story.bind({})

