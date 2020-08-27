import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./TextInput.styled";

const propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

const TextInput = (props) => {
	const {
		placeholder,
		value,
		onChange,
	} = props;

	const handleChange = (e) => {
		onChange(e.target.value);
	}

	return (
		<Wrapper
			placeholder={placeholder} value={value}
			onChange={handleChange}
		/>
	);
};

TextInput.propTypes = propTypes;

export default TextInput;
