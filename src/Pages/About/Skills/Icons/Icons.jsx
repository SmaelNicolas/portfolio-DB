import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import styled from "styled-components";
import IconJava from "../../../../Assets/java.svg";
import IconPy from "../../../../Assets/phyton.svg";
import IconGi from "../../../../Assets/github2.svg";
import IconSq from "../../../../Assets/sql.svg";
import IconJu from "../../../../Assets/jupyter.svg";
import IconGo from "../../../../Assets/googleCloud.svg";
import IconMa from "../../../../Assets/maven.svg";

function Icons() {
	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				navigation={true}
				modules={[Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<ImgIcon src={IconJava} />
				</SwiperSlide>
				<SwiperSlide>
					<ImgIcon src={IconPy} />
				</SwiperSlide>
				<SwiperSlide>
					<ImgIcon src={IconGi} />
				</SwiperSlide>
				<SwiperSlide>
					<ImgIcon src={IconSq} />
				</SwiperSlide>
				<SwiperSlide>
					<ImgIcon src={IconJu} />
				</SwiperSlide>
				<SwiperSlide>
					<ImgIcon src={IconGo} />
				</SwiperSlide>
				<SwiperSlide>
					<ImgIcon src={IconMa} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
const ImgIcon = styled.img`
	width: 100px;
	margin: 0 auto;
	@media screen and (max-width: 500px) {
		width: 50px;
	}
`;

export default Icons;
