import styled from "styled-components";

import devices from "../../core/deviceSizes";

export const Background = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0,0,0,0.7);
	z-index: 20;
	display: flex;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	
	margin: auto;
	position: relative;

	@media ${devices.mobileL} {
		width: 80%;
		height: 80%;
		padding: 20px;
	}
	@media ${devices.laptop} {
		width: 70%;
		height: 70%;
		padding: 20px;
	}
`;

export const Close = styled.div`
	position: absolute;
	width: 20px;
	height: 20px;
	top: 20px;
	right: 20px;
	cursor: pointer;

	& span {
		display: block;
		position: relative;
		width: 100%;
		height: 100%;

		&:before {
			display: block;
			content: "";
			width: 26px;
			height: 2px;
			position: absolute;
			top: 9px;
			left: -3px;
			transform: rotate(45deg);
			background-color: #000000;
		}

		&:after {
			display: block;
			content: "";
			width: 26px;
			height: 2px;
			position: absolute;
			top: 9px;
			left: -3px;
			transform: rotate(-45deg);
			background-color: #000000;
		}
	}
`;
