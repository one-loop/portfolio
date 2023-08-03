import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classNames from "classNames";

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
}

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string,
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never,
}

// button can act either as a html anchor link, or a regular button based on if it has a href attrib
type ButtonProps = ButtonBaseProps & (ButtonAsAnchorProps | ButtonAsButtonProps)


const buttonClasses = cva("relative inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        // "transition-[border] rounded-[1rem] font-bold border border-color-background border-2 border-solid hover:border-color-white",
        // "bg-off-white text-background rounded-[1rem] z-40 hover:[box-shadow:0_4px_7px_rgba(0,0,0,0.15),0_100px_80px_rgba(255,255,255,0.02),0_42px_33px_rgba(255,255,255,0.024),0_22px_18px_rgba(255,255,255,0.028),0_12px_10px_rgba(255,255,255,0.034),0_7px_5px_rgba(255,255,255,0.04),0_3px_2px_rgba(255,255,255,0.07)] [transition:box-shadow_.2s]",
        "select-none bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_30%,_rgba(255,255,255,0.38))] text-background rounded-[1rem] z-40 hover:[box-shadow:0_4px_7px_rgba(0,0,0,0.15),0_100px_80px_rgba(255,255,255,0.02),0_42px_33px_rgba(255,255,255,0.024),0_22px_18px_rgba(255,255,255,0.028),0_12px_10px_rgba(255,255,255,0.034),0_7px_5px_rgba(255,255,255,0.04),0_3px_2px_rgba(255,255,255,0.07)] [transition:box-shadow_.2s]",
        "[&_.highlight]:ml-2",
      ],
      secondary: [
        "select-none rounded-full text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-blur-[12px] hover:bg-opacity-20 transition-colors ease-in",
        "[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2",
      ],
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Highlight = ({ children, className  }: { children: React.ReactNode, className?: string }) => (
  <span className={classNames("highlight", className)}>{children}</span>
);

export const Button = ({
  children,
   variant,
  size,
  ...props
}: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className }) 
  
  if ('href' in props && props.href !==  undefined) {
    // if a href attribute is passed, render button as a html anchor link...
    return (
      <Link
        {...props}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  // otherwise render as a html button
  return (
    <button
      {...props}
      className={classes}
     >
      {children}
    </button>
  );
};