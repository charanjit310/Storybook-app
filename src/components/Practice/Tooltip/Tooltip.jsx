import classNames from "classnames";
import styles from "./Tooltip.module.scss";

const Tooltip = ({ children, Position, TooltipText, className, ...props }) => {
  let tooltipPositionCLass = styles.alignBottom;

  if (Position === "Top") tooltipPositionCLass = styles.alignTop;
  if (Position === "Left") tooltipPositionCLass = styles.alignLeft;
  if (Position === "Right") tooltipPositionCLass = styles.alignRight;

  const classes = classNames(
    styles.tooltiptext,
    tooltipPositionCLass,
    className,
  );

  return (
    <div className={styles.tooltip}>
      {children}

      <span className={classes} {...props}>
        {TooltipText}
      </span>
    </div>
  );
};

export default Tooltip;
