import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Image.styled";

const propTypes = {
	src: PropTypes.string,
	onClick: PropTypes.func,
};
const defaultProps = {

};

const Image = (props) => {
	const {
		src,
		onClick,
	} = props;
	return (
		<Wrapper onClick={onClick} src={src}/>
	);
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
