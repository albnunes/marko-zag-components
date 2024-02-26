import type { Meta } from "@storybook/marko";
import {
  // addRenderBodies,
  buildExtensionTemplate,
} from "../../../.storybook/utils";
import Component, { type Input } from "./Tree.marko";

async function createStoryFromExample(name: string) {
  const example = await import(`./examples/${name}.marko`);
  const code = await import(`./examples/${name}.marko?raw`);

  return buildExtensionTemplate(example.default, code.default, {

    renderBody: `Tree`,
  });
}


export default {
  title: "Tree",
  component: Component,
  parameters: {
      docs: {
          description: {
              component: Component,
          },
        },
      },
  argTypes: {
    selectionMode: { control: { type: "select", options: ["single", "multiple"] } },
    openOnClick: { control: "boolean" },
    labelProps: {control: "text"}
  },
} as Meta<Input>;
const storyDefault = await createStoryFromExample("default");
const storyDinamyc = await createStoryFromExample("dynamic");
const storyAttributeTags = await createStoryFromExample("attribute-tags");

export const Default= storyDefault.bind({})
export const Dinamyc= storyDinamyc.bind({})
export const AttributeTags= storyAttributeTags.bind({})

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
