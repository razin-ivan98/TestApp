import React from "react";
import PropTypes from "prop-types";

import { Background, Wrapper, Close } from "./Modal.styled";

const propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func,
};
const defaultProps = {

};

const Modal = (props) => {
	const {
		children,
		onClose
	} = props;
	return (
		<Background>
			<Wrapper>
				<Close onClick={onClose}><span /></Close>
				{children}
			</Wrapper>
		</Background>
	);
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
