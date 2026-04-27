import Button from "../Button/Button";
import Tooltip from "./Tooltip";

export default {
  title: "Practice/Tooltip",
  component: Tooltip,
  //  Default values
  args: {
    TooltipText: "This is Tooltip Text",
    Position: "Bottom",
  },

  argTypes: {
    Position: {
      control: "select",
      options: ["Top", "Bottom", "Left", "Right"],
    },
    TooltipText: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Reusable Tooltip component with multiple positions.",
      },
    },
  },
};

export const Bottom = {
  args: {
    children: "Hover me...",
    TooltipText: "This is Tooltip Text",
  },
};

export const Top = {
  args: {
    children: "Hover me...",
    TooltipText: "This is Tooltip Text",
    Position: "Top",
  },
};

export const Left = {
  args: {
    children: "Hover me...",
    TooltipText: "This is Tooltip Text",
    Position: "Left",
  },
};

export const Right = {
  args: {
    children: "Hover me...",
    TooltipText: "This is Tooltip Text",
    Position: "Right",
  },
};

export const ButtonWithTooltip = {
  args: {
    children: <Button>Submit</Button>,
    TooltipText: "This is Tooltip Text",
    Position: "Left",
  },
};
