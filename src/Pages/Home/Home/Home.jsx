import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Service from "../Service/Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>

            <Products></Products>
        </div>
    );
};

export default Home;