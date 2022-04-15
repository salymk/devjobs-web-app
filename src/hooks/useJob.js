import { useQuery } from "react-query";
import axios from "axios";

const getJobs = async () => {
  const { data } = await axios.get(process.env.PUBLIC_URL + "./data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
};

const useJob = () => {
  return useQuery("job", getJobs);
};

export default useJob;
