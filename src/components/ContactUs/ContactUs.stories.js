import { ContactUs } from ".";

export default {
  title: "Components/ContactUs",
  component: ContactUs,
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
  },
};
