import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton, RadioButtonProps } from "../components/RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
    size: { control: { type: "radio" }, options: ["L", "S"] },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "RadioButton component and all states. Supports sizes L and S, checked/unchecked, and disabled states.",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Playground: Story = {
  args: {
    checked: false,
    label: "Radio",
    size: "L",
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <RadioButton
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked",
    size: "L",
    disabled: false,
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: "Unchecked",
    size: "L",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    label: "Disabled",
    size: "L",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    checked: false,
    label: "Small Size",
    size: "S",
    disabled: false,
  },
};

export const AllStates: Story = {
  render: () => {
    const [selected, setSelected] = useState("one");
    return (
      <div className="flex flex-col gap-4">
        <RadioButton
          checked={selected === "one"}
          onChange={() => setSelected("one")}
          label="Option One"
          size="L"
        />
        <RadioButton
          checked={selected === "two"}
          onChange={() => setSelected("two")}
          label="Option Two"
          size="L"
        />
        <RadioButton
          checked={false}
          onChange={() => {}}
          label="Disabled"
          size="L"
          disabled
        />
        <RadioButton
          checked={selected === "small"}
          onChange={() => setSelected("small")}
          label="Small Size"
          size="S"
        />
      </div>
    );
  },
}; 