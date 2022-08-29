import React from 'react'
import { client, urlFor } from '../../client/client'
import { useEffect, useState } from 'react'

const FooterBenefits = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        const query = '*[_type == "services"]'

        client.fetch(query).then((item) => setServices(item))
    }, [])

    return (
        <div className='services'>
            <div className="services-container">
                {services?.map((item, index) => (
                    <article className="service-container" key={index}>
                        <div className="service-content">
                            <div className="service-icon-container">
                                <img src={urlFor(item.icon)} width={60} height={60} />
                            </div>

                            <div className="service-content-container">
                                <h4>{item.title}</h4>

                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}


export default FooterBenefits