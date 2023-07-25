
import Banner from '../../Components/Banner/Banner';
import ToyGallery from './ToyGallery';
import Category from './Category';
import ExtraSection from './ExtraSection';
import Review from './Review';
import useTitle from '../../UseTitle/UseTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
          
            <Banner/>
            <Review/>
            <ToyGallery />
            <Category/>
            <ExtraSection/>
            
        </div>
    );
};

export default Home;