import Banner from "../components/banner/banner";
import BlogArea from "../components/blogArea/blogArea";
import Brands from "../components/brands/brands";
import FashionFeature from "../components/fashionFeature/fashionFeature";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Modals from "../components/modals/modals";
import Product from "../components/product/product";
import Slider from "../components/slider/slider";
import Testimonial from "../components/testimonial/testimonial";


const HomePage = () => {
    return (
        <div className="main-wrapper">
            <Header/>
            <Slider/>
            <Banner/>
            <Product/>
            <FashionFeature/>
            <Testimonial/>
            <Brands/>
            <BlogArea/>
            <Modals/>
            <Footer/>
        </div>
    );
};

export default HomePage;