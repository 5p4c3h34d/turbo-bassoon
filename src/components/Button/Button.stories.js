import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
    text: "MEET THE TEAM",
  },
};
