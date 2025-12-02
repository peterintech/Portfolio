import { ArrowDown } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
}

const Button = ({
  text,
  className,
  icon = (
    <ArrowDown className="arrow-icon group-hover:translate-y-1 transition-transform duration-300" />
  ),
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">{icon}</div>
      </div>
    </button>
  );
};

export default Button;
