import React from "react";
import Link from "next/link";

interface BaseButtonProps {
  variant?: "primary" | "secondary";
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
  children,
  className = "",
  href,
  ...props
}) => {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-secondary";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={`h-[50px] ${combinedClasses}`}
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
