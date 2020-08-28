import styled from "styled-components";

import devices from "../../core/deviceSizes";

export const ModalContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media ${devices.mobileL} {
		flex-wrap: wrap;
	}
`;

export const Right = styled.div`
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: auto;
	@media ${devices.mobileL} {
		flex-grow: 0;
		order: 3;
		padding: 0;
		width: 40%;
		height: 100%;
		padding-left: 20px;
	}
`;

export const BigImage = styled.img.attrs(({ src }) => ({ src }))`
	width: 100%;
	height: auto;
	object-fit: cover;
	max-height: 40%;
	@media ${devices.mobileL} {
		order: 1;
		width: 60%;
		max-height: calc(100% - 135px);
	}
`;

export const Form = styled.form`
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	& > * {
		margin-top: 10px;
	}
	border-top: 1px solid #CCCCCC;
	@media ${devices.mobileL} {
		order: 2;
		border: none;
		width: 60%;
		padding: 0;
	}
`;

export const SpinnerWrapper = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	display: flex;
`;
