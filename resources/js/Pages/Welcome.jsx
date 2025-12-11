import Banner from '@/Components/custom-components/banner';
import Homenav from '@/Components/custom-components/homenav';
import DesignDevelopmentSection from '@/Components/custom-components/design-development-section';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
          <Head title="Home" />
          <Homenav/>
          <Banner/>
          <DesignDevelopmentSection/>
        </>
    );
}
