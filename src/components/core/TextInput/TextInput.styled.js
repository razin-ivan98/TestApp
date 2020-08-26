import styled from "styled-components";

export const Wrapper = styled.input.attrs(({ placeholder, value }) => {
	type: "text",
	placeholder,
	value
})`
	padding: 8px 12px;
	width: 100%;
	border-radius: 3px;
	border: 1px solid #CCCCCC;
	font-size: 13px;
	box-sizing: border-box;
	&::placeholder {
		color: #CCCCCC;
	}

`;
