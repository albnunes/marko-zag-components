import type { Meta, Story } from "@storybook/marko";
import {
  addRenderBodies,
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
const story = await createStoryFromExample("default");
const dynamic = await createStoryFromExample("dynamic");
const attribute = await createStoryFromExample("attribute-tags");
const action = await createStoryFromExample("action");

export const Default= story.bind({})
export const Dynamic= dynamic.bind({})
export const Attribute= attribute.bind({})
export const Action= action.bind({})
