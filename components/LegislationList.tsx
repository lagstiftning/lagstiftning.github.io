import * as React from "react";
import { FC, ReactElement } from "react";
import { cn } from "./utils";

export type LegislationListProps = {
  children:
    | ReactElement<LegislationItemProps>
    | ReactElement<LegislationItemProps>[];
  className?: string;
};

export const LegislationList: FC<LegislationListProps> = ({
  children,
  className,
}) => {
  return (
    <ol
      className={cn(
        "grid grid-cols-1 gap-y-12 max-w-prose",
        className,
      )}
    >
      {children}
    </ol>
  );
};

export type LegislationItemProps = {
  children:
    | ReactElement<LegislationLinkProps>
    | ReactElement<LegislationDescriptionProps>[];
  className?: string;
};

export const LegislationItem: FC<LegislationItemProps> = ({
  children,
  className,
}) => {
  return (
    <li
      className={cn(
        "group flex flex-col gap-y-2 relative w-full h-full",
        className,
      )}
    >
      {children}
    </li>
  );
};

export type LegislationIconProps = {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
};

export type LegislationLinkProps = {
  children: string;
  className?: string;
  href: string;
};

export const LegislationLink: FC<LegislationLinkProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <a className={cn("text-link section-heading underline ", className)} href={href}>
      <span className="absolute inset-0" />
      {children}
    </a>
  );
};

export type LegislationDescriptionProps = {
  children: ReactElement | ReactElement[] | string;
  className?: string;
};

export const LegislationDescription: FC<LegislationDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("body-text", className)}>
      {children}
    </div>
  );
};
