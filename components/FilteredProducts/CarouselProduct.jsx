import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../client/client'

const CarouselProduct = ({ name, image, price }) => {
    return (
        <div className="products-container">

            <article>
                <Link href={"/"}>
                    <a className="product-content-container">
                        <img src={urlFor(image[0])} />

                        <h3>{name}</h3>

                        <h5>R${price}</h5>
                    </a>
                </Link>
            </article>

        </div>

    )
}

export default CarouselProduct