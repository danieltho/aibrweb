import {Button} from "./Button";

export default {
  component: Button
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default = {
  render: () => <Button label="Get starter" />,
};

export const Primary = {
  render: () => <Button primary label="Get starter" />,
};

export const Secondary = {
  render: () => <Button secondary label="Get starter" />,
};