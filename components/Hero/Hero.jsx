import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <main id="hero" className='hero'>
            <div className="hero-container">
                <div className="desc-container">
                    <div className="desc-content">
                        <h5>70% Sale off </h5>
                        <h1>Furniture at Cost</h1>

                        <p>Suspendisse varius enim in eros elementum
                            tristique. Duis cursus, mi quis viverra ornare, eros
                            dolor interdum nulla.</p>
                    </div>

                    <Link href="/">
                        <a href="">
                            <button className='primary-btn'>DISCOVER MORE</button>
                        </a>

                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Hero