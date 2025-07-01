import { useGetCategoriesQuery } from "../../redux/api/baseApi";
import DescriptionAndSpecs from "./DescriptionAndSpecs/DescriptionAndSpecs";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  
  const { isLoading, isError, data } = useGetCategoriesQuery([], {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  console.log(isLoading, isError, data);

  return (
    <div>
      <ProductCard></ProductCard>
      <DescriptionAndSpecs></DescriptionAndSpecs>
    </div>
  );
};

export default Product;
