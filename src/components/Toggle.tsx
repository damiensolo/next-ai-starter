"use client";
import React from "react";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  size?: "L" | "S";
  variant?: "default" | "icon" | "short";
  disabled?: boolean;
  className?: string;
  name?: string;
  value?: string;
}

/**
 * Toggle component matching Figma design tokens and all states.
 */
export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label = "",
  size = "L",
  variant = "default",
  disabled = false,
  className = "",
  name,
  value,
}) => {
  // Sizing and style tokens
  const sizes = {
    L: {
      track: "w-9 h-5",
      knob: "h-4 w-4",
      label: "text-[18px] leading-[32px]",
      gap: "gap-2",
    },
    S: {
      track: "w-9 h-5",
      knob: "h-4 w-4",
      label: "text-[16px] leading-[24px] tracking-[0.032px]",
      gap: "gap-2",
    },
  };
  const current = sizes[size];

  // Colors from design tokens
  const bgOn = "bg-[#171717]"; // Background/bg-strong
  const bgOff = "bg-neutral-100"; // Background/bg-subtle
  const knob = "bg-white"; // White
  const labelColor = "text-neutral-900"; // Text/text-body

  // Icon SVGs for icon/short variants
  const IconOn = (
    <svg viewBox="0 0 9 7" fill="none" className="w-2.5 h-2.5">
      <path
        d="M7.37 1.12c.16-.16.42-.16.59 0 .15.15.16.39.03.55l-.03.04-4.17 4.17a.4.4 0 01-.55.03l-.04-.03-2.08-2.08a.4.4 0 01.55-.55l.04.03L3.5 4.99 7.37 1.12z"
        fill="#171717"
        stroke="#171717"
      />
    </svg>
  );
  const IconOff = (
    <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
      <path
        d="M3.08 2.57a.4.4 0 00-.48.04.4.4 0 000 .57l1.89 1.89-1.89 1.89a.4.4 0 10.57.57l1.89-1.89 1.89 1.89a.4.4 0 10.57-.57l-1.89-1.89 1.89-1.89a.4.4 0 00-.57-.57l-1.89 1.89-1.89-1.89z"
        fill="#171717"
      />
    </svg>
  );

  // Short variant track height
  const shortTrack = "w-9 h-4";
  const shortKnob = "h-4 w-4";

  return (
    <label
      className={`inline-flex items-center ${current.gap} cursor-pointer select-none ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={() => !disabled && onChange(!checked)}
        disabled={disabled}
        name={name}
        value={value}
        aria-checked={checked}
      />
      <span
        className={`relative flex items-center ${
          variant === "short" ? shortTrack : current.track
        } rounded-[10px] transition-colors duration-150 box-border
          ${checked ? bgOn : bgOff}
        `}
      >
        <span
          className={`absolute transition-all duration-150 ${
            variant === "short"
              ? checked
                ? "right-0"
                : "right-[20px]"
              : checked
              ? "right-0.5"
              : "right-[18px]"
          } top-1/2 -translate-y-1/2 ${
            variant === "short" ? shortKnob : current.knob
          } rounded-full ${knob} flex items-center justify-center shadow-[0_1px_1px_0_rgba(48,49,51,0.1),0_0_1px_0_rgba(48,49,51,0.05)]`}
        >
          {variant === "icon" && (checked ? IconOn : IconOff)}
          {variant === "short" && (checked ? IconOn : IconOff)}
        </span>
      </span>
      {label && (
        <span
          className={`font-sans not-italic font-normal ${current.label} ${labelColor}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Toggle; 