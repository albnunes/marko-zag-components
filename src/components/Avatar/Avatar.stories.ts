import type { Meta, Story } from "@storybook/marko";
import {
  addRenderBodies,
  buildExtensionTemplate,
} from "../../../.storybook/utils";
import Component, { type Input } from "./Avatar.marko";

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
    renderBody: `Avatar`,
  });
}
// const Template = (args: any) => ({
//   input: addRenderBodies(args),
// });
// const Template = (args: any) => ({
//   input: addRenderBodies(args),
// });

export default {
    title: 'Avatar',
    component: Component,
    parameters: {
      docs: {
        description: {
          component: "Story documentation for the Avatar component",
        },
      },
    },
    argTypes: {
      id: { control: 'text' },
      // Additional props like 'src', 'alt', etc., could be added here based on component's Input.
      // Note that functions or complex object props may not be directly controllable through Storybook UI.
    },
  } as Meta<Input>;
const story = await createStoryFromExample("default");

export const Default = story.bind({});
