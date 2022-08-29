import Image from 'next/image'
import logoTransparent from '../../assets/logo-transparent.webp'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa'
import Link from 'next/link'
import { footerData } from '../../utils.js/data'

const FooterContent = () => {
  return (
    <div className="footer-content-background">
      <div className='footer-content'>
        <div className="footer-logo-container">
          <Image src={logoTransparent} />

          <p>Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>

          <ul className="socials-list">
            <li>
              <Link href={'/'}>
                {<AiOutlineTwitter />}
              </Link>
            </li>

            <li>
              <Link href={'/'}>
                {<FaFacebookF />}
              </Link>
            </li>

            <li>
              <Link href={'/'}>
                {<FaPinterestP />}
              </Link>
            </li>
          </ul>
        </div>



        <div className="footer-content-container">
          {footerData.map((item, index) => (
            <div key={index}>
              <h5>{item.title}</h5>
              <ul className='footer-links-container-'>
                {item.names.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default FooterContent