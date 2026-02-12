import Banner from "@/Components/custom-components/banner";
import DesignDevelopmentSection from "@/Components/custom-components/design-development-section";
import Ecommerce from "@/Components/custom-components/ecommerce";
import Services from "@/Components/custom-components/services";
import Success from "@/Components/custom-components/success";

export default function Welcome() {
    return (
        <>
          <Banner/>
          <DesignDevelopmentSection/>
          <Ecommerce/>
          <Services/>
          <Success/>
        </>
    );
}
