import { useGetCategoriesQuery } from "../../redux/api/baseApi";
import DescriptionAndSpecs from "./DescriptionAndSpecs/DescriptionAndSpecs";
import ProductCard from "./ProductCard/ProductCard";

const Home = () => {
  const { isLoading, isError, data } = useGetCategoriesQuery([], {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  console.log(isLoading, isError, data);

  return (
    <div className="py-8">
      <ProductCard></ProductCard>
      <DescriptionAndSpecs></DescriptionAndSpecs>
    </div>
  );
};

export default Home;
