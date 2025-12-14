import Banner from '@/Components/custom-components/banner';
import Homenav from '@/Components/custom-components/homenav';
import Footer from '@/Components/custom-components/footer';
import { Link, Head } from '@inertiajs/react';
import DesignDevelopmentSection from '@/Components/custom-components/design-development-section';
import Ecommerce from '@/Components/custom-components/ecommerce';
import Services from '@/Components/custom-components/services';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
          <Head title="Home" />
          <Homenav/>
          <Banner/>
          <DesignDevelopmentSection/>
          <Ecommerce/>
          <Services/>        
          <Footer/>
        </>
    );
}
