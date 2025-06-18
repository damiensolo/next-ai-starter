"use client";
import React from "react";

export interface RadioButtonProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  size?: "L" | "S";
  disabled?: boolean;
  className?: string;
  name?: string;
  value?: string;
}

/**
 * RadioButton component matching Figma design tokens and states.
 */
export const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  label,
  size = "L",
  disabled = false,
  className = "",
  name,
  value,
}) => {
  // Sizing and style tokens
  const sizes = {
    L: {
      icon: "h-[18px] w-[18px]",
      text: "text-[18px] leading-[28px]",
      gap: "gap-2",
    },
    S: {
      icon: "h-4 w-4",
      text: "text-[14px] leading-[20px] tracking-[0.07px]",
      gap: "gap-2",
    },
  };
  const current = sizes[size];

  // Colors from design tokens
  const colorChecked = "text-[#171717]"; // Icon/icon-default
  const colorUnchecked = "text-[#D4D4D4]"; // Icon/icon-inactive
  const textChecked = "text-neutral-900"; // Text/text-body
  const textUnchecked = "text-neutral-900";
  const textDisabled = "text-neutral-300"; // Text/text-inactive

  return (
    <label
      className={`inline-flex items-center ${current.gap} cursor-pointer select-none ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
    >
      <input
        type="radio"
        className="sr-only"
        checked={checked}
        onChange={() => !disabled && onChange(true)}
        disabled={disabled}
        name={name}
        value={value}
        aria-checked={checked}
      />
      <span
        className={`relative flex items-center justify-center ${current.icon} rounded-full border-2 transition-colors duration-150
          ${checked ? `border-[#171717]` : `border-[#D4D4D4]`} 
          ${disabled ? `border-[#D4D4D4] bg-white` : "bg-white"}
          ${!disabled && !checked ? "group-hover:border-[#171717]" : ""}
        `}
      >
        {checked && (
          <span
            className={`block rounded-full bg-[#171717] ${size === "L" ? "h-2.5 w-2.5" : "h-2 w-2"}`}
          />
        )}
      </span>
      <span
        className={`font-sans not-italic font-normal ${current.text} ${disabled ? textDisabled : textChecked}`}
      >
        {label}
      </span>
    </label>
  );
};

export default RadioButton; 