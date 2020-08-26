import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Button.styled";

const propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node,
};
const defaultProps = {

};

const Button = (props) => {
	const {
		onClick,
		children,
	} = props;

	return (
		<Wrapper onClick={onClick}>{children}</Wrapper>
	);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
