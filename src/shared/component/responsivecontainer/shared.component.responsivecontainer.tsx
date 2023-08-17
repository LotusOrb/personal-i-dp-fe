import React from "react";
import classNames from "classnames";

import "./shared.component.responsivecontainer.scss";

export interface SharedComponentResponsiveContainerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  minHeight?: string | number;
}
export const SharedComponentResponsiveContainer: React.FC<
  SharedComponentResponsiveContainerProps
> = ({ children, className, style, minHeight, ...restProps }) => {
  const css = classNames({
    [`SharedComponentResponsiveContainer`]: true,
    [`${className}`]: className,
  });
  return (
    <div
      {...restProps}
      className={css}
      style={{ ...style, minHeight: minHeight ? minHeight : "2rem" }}
    >
      {children}
    </div>
  );
};
