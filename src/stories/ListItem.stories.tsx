import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "@/components/ListItem";
import { CheckCircle, Circle, Star, Heart } from "lucide-react";

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile list item component that supports different sizes and icons.",
      },
    },
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "large"],
      description: "The size variant of the list item",
      table: {
        defaultValue: { summary: "small" },
      },
    },
    text: {
      control: "text",
      description: "The text content of the list item",
    },
    icon: {
      control: "select",
      options: ["CheckCircle", "Circle", "Star", "Heart", "none"],
      mapping: {
        CheckCircle: CheckCircle,
        Circle: Circle,
        Star: Star,
        Heart: Heart,
        none: undefined,
      },
      description: "The icon to display",
    },
    onClick: {
      action: "clicked",
      description: "Optional click handler",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Small: Story = {
  args: {
    text: "List Item",
    size: "small",
    icon: CheckCircle,
  },
};

export const Large: Story = {
  args: {
    text: "List Item",
    size: "large",
    icon: CheckCircle,
  },
};

export const WithoutIcon: Story = {
  args: {
    text: "List Item without icon",
    size: "small",
  },
};

export const WithDifferentIcon: Story = {
  args: {
    text: "List Item with star icon",
    size: "small",
    icon: Star,
  },
};

export const Clickable: Story = {
  args: {
    text: "Clickable List Item",
    size: "small",
    icon: CheckCircle,
    onClick: () => console.log("List item clicked"),
  },
}; 