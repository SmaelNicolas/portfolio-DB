import React from "react";
import MeImage from "../../../../Assets/aboutMeImage.png";
import styled from "styled-components";

function Image() {
	return (
		<ContainerImg>
			<Img src={MeImage} />
		</ContainerImg>
	);
}

const ContainerImg = styled.div``;

const Img = styled.img`
	width: auto;
`;

export default Image;
