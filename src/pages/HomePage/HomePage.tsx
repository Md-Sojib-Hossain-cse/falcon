/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router";
import { useGetProductsQuery } from "../../redux/api/baseApi";

const HomePage = () => {
  const { isLoading, isError, data } = useGetProductsQuery(undefined, {
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

  const productList = data.data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 mb-4 md:mb-6">
      {productList?.map((product: any) => (
        <Link
          to={`/products/${product.slug}`}
          key={product.id}
          className="inline-block text-center px-4 py-3 rounded-md bg-[#08b998] text-white font-semibold hover:bg-[#3f7e74] transition duration-200 shadow-md"
        >
          Product: {product.name}
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
