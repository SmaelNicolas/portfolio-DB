import React from "react";
import styled from "styled-components";
function Title() {
	return (
		<TitleStyled>
			About ME_ <LineT />
		</TitleStyled>
	);
}
const LineT = styled.div`
	margin-left: 1px;
	width: 131px;
	height: 0px;
	left: 107px;
	top: 499px;
	border: 1px dashed #f8971f;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	display: none;
	@media screen and (max-width: 1080px) {
		display: inherit;
		width: 50%;
		border: 2px dashed #f8971f;
	}
	@media screen and (max-width: 500px) {
		display: inherit;
	}
`;
const TitleStyled = styled.div`
	width: 359px;
	height: 87px;
	font-family: "Trispace";
	font-style: normal;
	font-weight: 600;
	font-size: 55px;
	line-height: 62px;
	color: #f8971f;
	@media screen and (max-width: 1080px) {
		width: 100%;
		height: 86.98px;
		font-size: 35px;
		line-height: 40px;
		display: flex;
		align-items: baseline;
		column-gap: 1rem;
	}

	@media screen and (max-width: 500px) {
		display: flex;
		height: 72px;
		font-size: 24px;
		line-height: 28px;
		align-items: baseline;
	}
`;

export default Title;
