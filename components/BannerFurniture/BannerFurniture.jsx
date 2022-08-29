import Link from 'next/link'
import React from 'react'

const BannerFurniture = () => {
    return (
        <section id="banner-furniture" className='banner-furniture'>
            <div className="banner-furniture-container">
                <div className="banner-furniture-background-image"></div>

                <div className="banner-furniture-content">
                    <h2>BEST FURNITURE
                        <br />MANUFACTURER
                    </h2>

                    <p>Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>

                    <p>Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>

                    <Link href="/">
                        <a>
                            <button className="primary-btn">
                                DISCOVER MORE
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BannerFurniture