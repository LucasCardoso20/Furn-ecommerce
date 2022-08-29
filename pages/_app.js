import '../styles/index.scss'
import '../components/Navbar/Navbar.scss'
import '../components/Hero/Hero.scss'
import '../components/FilteredProducts/FilteredProducts.scss'
import '../components/BannerFurniture/BannerFurniture.scss'
import '../components/SocialsBanner/SocialsBanner.scss'
import '../components/Footer/Footer.scss'
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  )
}

export default MyApp
