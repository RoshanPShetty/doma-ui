import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ ...props }: ButtonProps) => {
	return <button className="text-red-500" {...props} />;
};

export default Button;
