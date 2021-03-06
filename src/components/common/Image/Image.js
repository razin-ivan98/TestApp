import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Image.styled";

const propTypes = {
	src: PropTypes.string,
	onClick: PropTypes.func,
};

const Image = (props) => {
	const {
		id,
		src,
		onClick,
	} = props;

	const clickHandle = () => {
		onClick(id);
	}

	return (
		<Wrapper onClick={clickHandle} src={src}/>
	);
};

Image.propTypes = propTypes;

export default Image;
