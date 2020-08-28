import React from "react";
import PropTypes from "prop-types";

import { Background, Wrapper, Close } from "./Modal.styled";

const propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func,
	vh: PropTypes.number,
};

const Modal = (props) => {
	const {
		children,
		onClose,
		vh,
	} = props;

	return (
		<Background vh={vh}>
			<Wrapper vh={vh}>
				<Close onClick={onClose}><span /></Close>
				{children}
			</Wrapper>
		</Background>
	);
};

Modal.propTypes = propTypes;

export default Modal;
