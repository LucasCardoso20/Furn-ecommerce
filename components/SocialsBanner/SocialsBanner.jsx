import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import instagramIcon from '../../assets/instagram-icon.webp'
import socialsFirstImg from '../../assets/socialsBanner-img-1.webp'
import socialsSecondImg from '../../assets/socialsBanner-img-2.webp'

const SocialsBanner = () => {
    return (
        <section id="socials-banner" className="socials-banner">
            <div className="socials-banner-container">
                <div className="socials-content-container">
                    <Image src={instagramIcon} />

                    <h2>GET INSPIRED WITH INSTAGRAM</h2>

                    <p>Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>

                    <Link href="/">
                        <a>
                            <button className="second-btn">DISCOVER MORE</button>
                        </a>
                    </Link>
                </div>

                <div className="socials-container-images">
                    <div className="container-img">
                        <Image src={socialsFirstImg} alt="" />
                    </div>

                    <div className="container-img">
                        <Image src={socialsSecondImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialsBanner