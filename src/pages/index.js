import HomeLayout from "../layouts/homeLayout";
import CategoriesBanner from "../components/CategoriesBanner";
import PopularProducts from "../components/PopularProducts";
import axios from "axios";

const IndexPage = ({products}) => {
    return (
        <HomeLayout>
            <CategoriesBanner/>
            <PopularProducts products={products} />
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
