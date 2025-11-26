import { ArrowDown } from "lucide-react";

const Button = ({
  type,
  text,
  className,
  onClick,
  icon = (
    <ArrowDown className="arrow-icon group-hover:translate-y-1 transition-transform duration-300" />
  ),
}: {
  type?: "button" | "submit" | "reset";
  text: string;
  className?: string;
  id?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
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
