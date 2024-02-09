import type { Meta, Story } from "@storybook/marko";
import {
  addRenderBodies,
  buildExtensionTemplate,
} from "../../../.storybook/utils";
import Component, { type Input } from "./Checkbox.marko";

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
  title: "Checkbox",
  component: Component,
  parameters: {
      docs: {
          description: {
              component: Component,
          },
        },
      },
  argTypes: {
    id: { control: "text" },
    checked: { control: "boolean" },
    dir: { control: { type: "select", options: ["ltr", "rtl"] } },
    disabled: { control: "boolean" },
    form: { control: "text" },
    // getRootNode: This might not be easily controllable via the Storybook UI
    ids: { control: "object" },
    invalid: { control: "boolean" },
    name: { control: "text" },
    // onCheckedChange: Event handler functions are typically not controllable via Storybook UI
    required: { control: "boolean" },
    value: { control: "text" },
  },
} as Meta<Input>;
const story = await createStoryFromExample("default");

export const Default= story.bind({})

// Default Story, represents the component in its simplest form
// Default.args = {
//   id: "defaultCheckbox",
//   checked: false,
//   dir: "ltr",
//   disabled: false,
//   name: "defaultCheckbox",
//   required: false,
//   renderBody: `Default Checkbox`,
// };

// // Checked Story, represents the component when it is checked
// export const Checked: Story<Input> = {
//   args: {
//     ...Default.args, // Spreads the default args
//     checked: true,
//   },
//   renderBody: ({ api }) =>
//     `Checked Checkbox - ${api.checked ? "Checked" : "Unchecked"}`,
// };

// // Disabled Story, represents the component when it is disabled
// export const Disabled: Story<Input> = {
//   args: {
//     ...Default.args,
//     disabled: true,
//   },
//   renderBody: ({ api }) =>
//     `Disabled Checkbox - ${api.checked ? "Checked" : "Unchecked"}`,
// };
