import styled from "styled-components";

export const Wrapper = styled.div`
	height: ${({ vh }) => (vh)}px;
	width: calc(100% - 40px);
	max-width: 1200px;
	margin: auto;
	overflow: auto;
	min-height: 250px;
`;

export const Header = styled.div`
	box-sizing: border-box;
	overflow: auto;
	font-family: sans-serif;
	text-align: center;
	font-size: 36px;
	height: 56px;
	border-bottom: 1px solid #CCCCCC;
	box-sizing: border-box;
	padding: 10px;
`;

export const AppInner = styled.div`
	height: calc(100% - 56px - 56px);
	overflow: hidden;
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
