import React from 'react';
import ProductHome from '../Product/ProductHome';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class CarouselCard extends React.Component {
    onShowCard = (products) => {
        let result = null;
        result = products.map((product, index) => (
                <ProductHome key={index} product={product} />
        )
        );
        return result;
    }
    render() {
        let { products, match } = this.props;
        return (
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        paritialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        paritialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        paritialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {this.onShowCard(products, match)}
            </Carousel>
        );
  }
} 