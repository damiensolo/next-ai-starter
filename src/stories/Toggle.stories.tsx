import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toggle, ToggleProps } from "../components/Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
    size: { control: { type: "radio" }, options: ["L", "S"] },
    variant: { control: { type: "radio" }, options: ["default", "icon", "short"] },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Toggle component matching Figma design tokens and all states. Supports sizes L and S, all variants, and disabled state.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {
  args: {
    checked: false,
    label: "Toggle",
    size: "L",
    variant: "default",
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};

export const On: Story = {
  args: {
    checked: true,
    label: "On",
    size: "L",
    variant: "default",
    disabled: false,
  },
};

export const Off: Story = {
  args: {
    checked: false,
    label: "Off",
    size: "L",
    variant: "default",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    label: "Disabled",
    size: "L",
    variant: "default",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    checked: false,
    label: "Small Size",
    size: "S",
    variant: "default",
    disabled: false,
  },
};

export const IconVariant: Story = {
  args: {
    checked: true,
    label: "Icon Variant",
    size: "L",
    variant: "icon",
    disabled: false,
  },
};

export const ShortVariant: Story = {
  args: {
    checked: false,
    label: "Short Variant",
    size: "L",
    variant: "short",
    disabled: false,
  },
};

export const AllStates: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <Toggle
          checked={checked}
          onChange={() => setChecked(!checked)}
          label="Default"
          size="L"
          variant="default"
        />
        <Toggle
          checked={checked}
          onChange={() => setChecked(!checked)}
          label="Icon"
          size="L"
          variant="icon"
        />
        <Toggle
          checked={checked}
          onChange={() => setChecked(!checked)}
          label="Short"
          size="L"
          variant="short"
        />
        <Toggle
          checked={false}
          onChange={() => {}}
          label="Disabled"
          size="L"
          variant="default"
          disabled
        />
        <Toggle
          checked={checked}
          onChange={() => setChecked(!checked)}
          label="Small"
          size="S"
          variant="default"
        />
      </div>
    );
  },
}; 