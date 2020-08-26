import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100vh;
	width: calc(100% - 40px);
	max-width: 1200px;
	margin: auto;
`;

export const Header = styled.div`
	box-sizing: border-box;
	overflow: auto;
	font-family: sans-serif;
	text-align: center;
	font-size: 36px;
	height: 56px;
	padding: 10px;
`;

export const AppInner = styled.div`
	height: calc(100% - 56px - 56px);
	overflow-x: hidden;
	overflow-y: auto;
	position: relative;
`;

export const Footer = styled.div`
	box-sizing: border-box;
	height: 56px;
	font-family: sans-serif;
	text-align: center;
	color: #CCCCCC;
	border-top: 1px solid #CCCCCC;
	padding: 20px;
`;

export const SpinnerWrapper = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	display: flex;
`;
