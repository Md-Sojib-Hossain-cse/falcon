import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../redux/api/baseApi";
import DescriptionAndSpecs from "./DescriptionAndSpecs/DescriptionAndSpecs";
import ProductCard from "./ProductCard/ProductCard";
import { useAppDispatch } from "../../redux/hook";
import { setProduct } from "../../redux/features/product/product.Slice";

const Product = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, isError, data } = useGetSingleProductQuery(slug, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  if (isLoading)
    return (
      <div className="min-w-screen flex justify-center items-center">
        Loading...
      </div>
    );

  if (isError)
    return (
      <div className="min-w-screen flex justify-center items-center">
        <p className="text-red-500">
          Something went wrong ! Can't load data at this moment...
        </p>
      </div>
    );

  if (data) {
    dispatch(setProduct(data?.data));
  }

  return (
    <div>
      <ProductCard></ProductCard>
      <DescriptionAndSpecs></DescriptionAndSpecs>
    </div>
  );
};

export default Product;
