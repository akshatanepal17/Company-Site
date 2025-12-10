import Homenav from '@/Components/custom-components/homenav';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
          <Head title="Home" />
          <Homenav/>
        </>
    );
}
