import React from "react";
import styled from "styled-components";

function Description() {
	return (
		<DescriptionStyled>
			There is no such thing as big problems, they are just the
			opportunity to innovate.
		</DescriptionStyled>
	);
}
const DescriptionStyled = styled.div`
	width: 31.37rem;
	height: auto;
	margin-top: 4.2rem;
	font-family: Roboto;
	font-style: normal;
	font-weight: 400;
	font-size: 1.5rem;
	line-height: 1.75rem;
	color: rgba(128, 128, 128, 1);

	@media screen and (max-width: 800px) {
		width: 100%;
		textalign: center;
		font-size: 1rem;
	}
`;

export default Description;
