import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Button.styled";

const propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node,
	width: PropTypes.string,
	height: PropTypes.string,
	shape: PropTypes.oneOf(["rectangle", "ellips"]),
	border: PropTypes.bool,
};
const defaultProps = {
	shape: "rectangle",
	width: "100%",
	height: "auto",
	border: false,
};

const Button = (props) => {
	const {
		onClick,
		children,
		width,
		height,
		border,
		shape
	} = props;

	return (
		<Wrapper
			border={border} shape={shape} width={width}
			height={height} onClick={onClick}
		>
			{children}
		</Wrapper>
	);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
