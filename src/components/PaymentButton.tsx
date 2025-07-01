const PaymentButton = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <button className="bg-white rounded-sm h-11 w-16 flex justify-center items-center">
      <img src={imgUrl} alt="payment logo" />
    </button>
  );
};

export default PaymentButton;
