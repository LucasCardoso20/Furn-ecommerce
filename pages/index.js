import { client } from '../client/client'
import { Navbar, Hero, FilteredProducts, BannerFurniture, SocialsBanner, Footer } from '../components'

const Home = ({ allProducts }) => (
  <div>
    <Hero />
    <FilteredProducts allProducts={allProducts} filtered={'featured'} />
    <BannerFurniture />
    <FilteredProducts allProducts={allProducts} filtered={'popular'} />
    <SocialsBanner />
    <FilteredProducts allProducts={allProducts} filtered={'top picks'} />
  </div>

)

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const allProducts = await client.fetch(productsQuery);

  return {
    props: { allProducts }
  }
}

export default Home;