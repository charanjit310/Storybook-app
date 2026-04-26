import Button from "./Button";

const colors = ["primary", "secondary", "danger", "outline-primary"];

export default {
  title: "Assignment/Button",
  component: Button,

  argTypes: {
    onClick: { action: "clicked" },

    color: {
      control: "select",
      options: colors,
    },

    size: {
      control: { type: "select" },
      options: [undefined, "sm", "lg"],
    },
  },
};

export const Primary = {
  args: {
    children: "Primary Button",
    color: "primary",
    block: false,
    disabled: false,
  },
};

export const Secondary = {
  args: {
    children: "Secondary Button",
    color: "secondary",
    block: false,
    disabled: false,
  },
};
