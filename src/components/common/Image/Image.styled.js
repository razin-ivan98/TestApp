import styled from "styled-components";

import devices from "../../core/deviceSizes";

export const Wrapper = styled.img.attrs(({src}) => ({src: src, width: "300", height: "200"}))`
	width: 100%;
	height: auto;
	margin: 10px;
	@media ${devices.mobileL} {
		width: calc(50% - 20px);
	}
	@media ${devices.laptop} {
		width: calc(100% / 3 - 20px);
	}
`;