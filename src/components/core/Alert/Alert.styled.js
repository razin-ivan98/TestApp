import styled from "styled-components";

import devices from "../deviceSizes";

const types = {
	success: {color: "green", background: "#bbffbb"},
	danger: {color: "red", background: "#ffbbbb"},
};

export const Wrapper = styled.div`
	box-sizing: border-box;
	font-family: sans serif;
	width: 100%;
	max-width: 100%;
	padding: 8px 12px;
	color: ${({ type }) => (types[type].color)};
	background-color: ${({ type }) => (types[type].background)};
	border: 1px solid ${({ type }) => (types[type].color)};
	border-radius: 3px;
	position: absolute;
	top: 0px;
	z-index: 40;
	right: 0px;

	@media ${devices.mobileL} {
		width: 50%;
	}
	@media ${devices.laptop} {
		width: 30%;
	}
`;
