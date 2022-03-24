import React from "react";
import Title from "./Title/Title";
import Image from "./Image/Image";
import Description from "./Description/Description";
import styled from "styled-components";

function Me() {
	return (
		<>
			<ContainerMe>
				<Title />
				<ContainerText>
					<Description />
					<Image />
				</ContainerText>
			</ContainerMe>
		</>
	);
}

const ContainerText = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
	justify-content: space-around;
	align-items: center;
`;

const ContainerMe = styled.div`
	margin: 10px 0px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default Me;
