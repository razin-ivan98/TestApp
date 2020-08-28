import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Alert.styled";

const propTypes = {
	type: PropTypes.oneOf(["success", "danger"]),
	children: PropTypes.node,
};
const defaultProps = {
	type: "success",
};

const Alert = (props) => {
	const {
		type,
		children,
	} = props;
	return (
		<Wrapper type={type}>
			{children}
		</Wrapper>
	);
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
