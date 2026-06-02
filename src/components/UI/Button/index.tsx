import React from "react";
import Link from "next/link";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline-white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

// Props when rendered as an HTML <button> tag
type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

// Props when rendered as a Next.js <Link> tag
type ButtonAsLinkProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}) => {
  const baseClasses =
    variant === "primary"
      ? "btn-primary"
      : variant === "outline-white"
      ? "btn-outline-white"
      : "btn-secondary";
  const sizeClasses =
    size === "sm"
      ? "btn-sm"
      : size === "lg"
      ? "btn-lg"
      : "btn-md";
  const combinedClasses = `${baseClasses} ${sizeClasses} ${className}`.trim();

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
