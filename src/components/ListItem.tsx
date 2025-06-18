"use client";

import { LucideIcon } from "lucide-react";
import React from "react";

export interface ListItemProps {
  /**
   * The text content of the list item
   */
  text: string;
  /**
   * The size variant of the list item
   * @default "small"
   */
  size?: "small" | "large";
  /**
   * Optional icon component to display
   * @default undefined
   */
  icon?: React.ElementType;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional className for custom styling
   */
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  text,
  size = "small",
  icon: IconComponent,
  onClick,
  className = "",
}) => {
  const baseStyles = "flex flex-row items-center gap-2";
  const sizeStyles = {
    small: "text-sm py-1",
    large: "text-base py-2",
  };

  const iconSizeStyles = {
    small: "w-6 h-6",
    large: "w-8 h-8",
  };

  return (
    <div
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : "listitem"}
      tabIndex={onClick ? 0 : undefined}
    >
      {IconComponent && (
        <IconComponent
          className={`${iconSizeStyles[size]} text-violet-500`}
          aria-hidden="true"
        />
      )}
      <span className="text-neutral-900 font-normal leading-5 tracking-[0.07px]">
        {text}
      </span>
    </div>
  );
}; 