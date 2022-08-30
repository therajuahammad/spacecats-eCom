import axios from "axios";
import HomeLayout from "../layouts/homeLayout";
import HeroBanner from "../components/HeroBanner";
import PopularProducts from "../components/PopularProducts";
import CategoriesBanner from "../components/CategoriesBanner";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";

const IndexPage = ({products}) => {
    return (
        <HomeLayout>
            <HeroBanner/>
            <Services/>
            <CategoriesBanner/>
            <PopularProducts products={products} />
            <Newsletter/>
        </HomeLayout>
    )
}

export const getStaticProps = async () => {
    const products = await axios.get("https://fakestoreapi.com/products?limit=4&sort=desc")
    return {
        props: {
            products: products.data
        }
    }
}

export default IndexPage
