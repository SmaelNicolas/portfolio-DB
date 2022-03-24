import React, { useContext } from "react";
import Me from "./Me/Me";
import Skills from "./Skills/Skills";
import styled, { keyframes } from "styled-components";
import handleWheel from "../../Helpers/mouseWheelPages";
import { SectionOnScreenContext } from "../../Context/sectionOnScreen";

function About() {
	const { toggleHome, toggleSoftware } = useContext(SectionOnScreenContext);

	return (
		<AboutContainer
			onWheel={(e) => handleWheel(e, toggleSoftware, toggleHome)}
			id='about'
		>
			<Me />
			<Skills />
		</AboutContainer>
	);
}

export default About;

const Fade = keyframes`
	
    0% {opacity: 0;}
    100% {opacity: 1;}

`;

const AboutContainer = styled.div`
	width: 70%;
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	gap: 50px;
	opacity: 0;
	animation: ${Fade} 1.5s forwards;
	margin-top: 15px;
	@media screen and (max-width: 800px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
`;
