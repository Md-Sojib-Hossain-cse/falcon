import Description from "./DescriptionAndSpecsComponent/Description";
import Specification from "./DescriptionAndSpecsComponent/Specification";

const DescriptionAndSpecs = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-3 md:py-4 lg:py-6 px-4 md:px-8 lg:px-20">
      <Description></Description>
      <Specification></Specification>
    </section>
  );
};

export default DescriptionAndSpecs;
