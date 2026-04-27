import React, { useCallback } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  children,
  color = "primary",
  size,
  block,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const handleClick = useCallback(
    (e) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    },
    [disabled, onClick],
  );

  const classes = classNames(
    styles.button,
    "btn",
    `btn-${color}`,
    size && `btn-${size}`,
    block && "w-100",
    className,
  );

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
