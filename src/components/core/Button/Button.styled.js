import styled from "styled-components";

export const Wrapper = styled.button`
	padding: 8px 12px;
	background-color: #4997D0;
	color: #ffffff;

	${({ width, height, border, shape }) => (
		`width: ${width};
		height: ${height};
		${shape === "rectangle" ? "border-radius: 3px;" : "border-radius: 50%;"}
		${border ? "border: 1px solid #ffffff;" : "border: 1px solid #4997D0;"}
		`
	)}
`;
