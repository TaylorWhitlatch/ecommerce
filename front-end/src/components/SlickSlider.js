import React, { Component} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class SlickSlider extends Component{
	render(){
		const settings = {
			dots: true,
			infinite: true,
			autoplaySpeed: 2000,
			slidesToShow:1,
			slidesToScroll:1,
			autoplay: true,
			arrows: true,
			accessibility: true
			
		
		}
		return(
			<Slider {...settings}>
				<div className="slick-image"><img src="/slider-images/ferrari.jpg" /></div>
				<div className="slick-image"><img src="/slider-images/lamb.jpg" /></div>
				<div className="slick-image"><img src="/slider-images/schooner.jpg" /></div>
				<div className="slick-image"><img src="/slider-images/train1.jpg" /></div>
				
			</Slider>
		)
	}

}

export default SlickSlider;