/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hook";
import { setCart } from "../../redux/features/cart/cart.Slice";

const HomePage = () => {
  const { isLoading, isError, data } = useGetProductsQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localCardData = localStorage.getItem("cart");
    if (localCardData) {
      dispatch(setCart(JSON.parse(localCardData)));
    }
  }, [dispatch]);

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

  const productList = data?.data;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#00B795]">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productList?.map((product: any) => (
          <Link
            to={`/products/${product.slug}`}
            key={product.id}
            className="bg-[#f9f9f9] rounded-2xl shadow-inner hover:shadow-md transition duration-200"
          >
            <img
              src={`https://ik.imagekit.io/sojibhossaincse/${product?.thumbnail
                .split("/")
                .at(-1)}`}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.src =
                  "https://i.ibb.co/N2nYmrB5/not-available.png";
              }}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            <div className="p-4">
              <h2 className="text-base font-semibold text-gray-800 truncate">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#00B795] font-bold text-md">
                  ৳{product.discount_price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ৳{product.regular_price}
                </span>
              </div>

              <div className="text-sm text-gray-500 mt-1">
                Stock: {product.available_stock}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
