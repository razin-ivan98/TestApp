import React from "react";
import PorpTypes from "prop-types";

import { Wrapper } from "./Comment.styled";

const propTypes = {

};
const defaultProps = {

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
Comment.defaultProps = defaultProps;

export default Comment;
