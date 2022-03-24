import React from "react";
import Title from "./Title/Title";
import Icons from "./Icons/Icons";
import styled from "styled-components";

function Skills() {
	return (
		<>
			<ContainerSkills>
				<Title />
				<Icons />
			</ContainerSkills>
		</>
	);
}
const ContainerSkills = styled.div`
	width: 100%;
	height: auto;
	flex-direction: column;
	flex-flow: wrap;
	align-self: flex-start;
`;
export default Skills;
