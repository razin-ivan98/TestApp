import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Comment.styled";

const propTypes = {
	children: PropTypes.node,
};

const Comment = (props) => {
	const {
		children,
	} = props;

	const date = new Date(props.date).toLocaleDateString();

	return (
		<Wrapper>
			<span>{date}</span>
			{children}
		</Wrapper>
	);
};

Comment.propTypes = propTypes;

export default Comment;
