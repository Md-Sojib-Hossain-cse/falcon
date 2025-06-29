import { useGetCategoriesQuery } from "../../redux/api/baseApi";

const Home = () => {
  const { isLoading, isError, data } = useGetCategoriesQuery([], {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  console.log(isLoading, isError, data);

  return <div className="py-8"></div>;
};

export default Home;
