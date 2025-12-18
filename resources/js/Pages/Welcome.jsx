import Banner from '@/Components/custom-components/banner';
import Homenav from '@/Components/custom-components/homenav';
import Footer from '@/Components/custom-components/footer';
import { Link, Head } from '@inertiajs/react';
import DesignDevelopmentSection from '@/Components/custom-components/design-development-section';
import Ecommerce from '@/Components/custom-components/ecommerce';
import Services from '@/Components/custom-components/services';
import Success from '@/Components/custom-components/success';
export default function Welcome() {
    return (
        <>
          <Head title="Home" />
          <Homenav/>
          <Banner/>
          <DesignDevelopmentSection/>
          <Ecommerce/>
          <Services/> 
          <Success/>    
          <Footer/>
        </>
    );
}
