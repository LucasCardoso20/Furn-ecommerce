import React from 'react'
import FooterBenefits from './FooterBenefits'
import FooterContent from './FooterContent'

const Footer = () => {
    return (
        <footer id="footer" className='footer'>
            <FooterBenefits/>
            <FooterContent />
        </footer>
    )
}

// export const getServerSideProps = async () => {
//     const servicesQuery = '*[_type == "services"]';
//     const services = await client.fetch(servicesQuery);

//     return {
//         props: { services }
//     }
// }


export default Footer