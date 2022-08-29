import React from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
import CarouselProduct from './CarouselProduct'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 2 }
];

const configureCarousel = {
    itemsToShow: 3,
    showArrows: false,
    enableAutoPlay: true,
    autoPlaySpeed: 2000,

}
const FilteredProducts = ({ allProducts, filtered }) => {
    const products = allProducts.filter((item) => item.productType == filtered)
    console.log(products);
    return (
        <section id="featured-products" className='featured-products'>
            <div className="title-container">
                <h2 className='featured-products-title'>
                    {filtered == 'featured' && 'Featured Products'}
                    {filtered == 'popular' && 'Popular Products'}
                    {filtered == 'top picks' && 'Top Picks'}
                </h2>
                <p className='featured-products-text'>
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br />ornare, eros dolor interdum nulla.
                </p>
            </div>

            <ReactElasticCarousel {...configureCarousel} breakPoints={breakPoints}>
                {
                    products.map((product, index) => (
                        <CarouselProduct {...product} key={index} />
                    ))
                }

            </ReactElasticCarousel>

        </section>
    )
}

export default FilteredProducts