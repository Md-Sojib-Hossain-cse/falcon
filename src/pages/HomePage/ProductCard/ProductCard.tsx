import ProductImagesPart from "./ProductCardSubComponents/ProductImagesPart";
import ProductDetailsPart from "./ProductCardSubComponents/ProductDetailsPart";
import DeliveryAndMerchant from "./ProductCardSubComponents/DeliveryAndMerchant";

const ProductCard = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 w-full max-w-[1440px] mx-auto py-3 md:py-4 lg:py-6 px-4 md:px-8 lg:px-20">
        <ProductImagesPart></ProductImagesPart>
        <ProductDetailsPart></ProductDetailsPart>
        <DeliveryAndMerchant></DeliveryAndMerchant>
      </div>
    </section>
  );
};

export default ProductCard;
