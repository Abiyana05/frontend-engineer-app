import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", onClick }) => {
  const base = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";

  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
