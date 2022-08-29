import React from 'react'
import { client } from '../../client/client'
import { Hero, Navbar, FeaturedProducts } from '../index'

const Home = ({ featuredProducts }) => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FeaturedProducts featuredProducts={featuredProducts} />
        </div>
    )
}

export const getStaticProps = async () => {
    const query = '*[_type == "product"]';
    const featuredProducts = await client.fetch(query);
    console.log(featuredProducts);

    return {
        props: {
            featuredProducts
        }
    }
}

export default Home

