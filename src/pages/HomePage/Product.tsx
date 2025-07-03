import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../redux/api/baseApi";
import DescriptionAndSpecs from "./DescriptionAndSpecs/DescriptionAndSpecs";
import ProductCard from "./ProductCard/ProductCard";
import { useAppDispatch } from "../../redux/hook";
import { setProduct } from "../../redux/features/product/product.Slice";
import { setProductDraft } from "../../redux/features/product/productDraftCard";

const Product = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, isError, data } = useGetSingleProductQuery(slug);

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
    const draftProduct = {
      id: data?.data?.id || undefined,
      slug: data?.data?.slug || "",
      variationId: undefined,
      sku: data?.data?.sku || "",
      color: "Default",
      size: "Default",
      total_stock_qty: data?.data?.total_stock_qty || 0,
      regular_price: data?.data?.product_detail?.regular_price || 0,
      discount_price: data?.data?.product_detail?.discount_price || 0,
      quantity: 0,
      totalPrize: 0,
    };
    dispatch(setProduct(data?.data));
    dispatch(setProductDraft(draftProduct));
  }

  return (
    <div>
      <ProductCard></ProductCard>
      <DescriptionAndSpecs></DescriptionAndSpecs>
    </div>
  );
};

export default Product;
