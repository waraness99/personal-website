import { useState, useEffect } from "react";

export const useAirtable = (apiName: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleGetData = async () => {
      const res = await getData(apiName);
      setData(res);
    };
    handleGetData();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return { isLoading, data };
};

const getData = async (apiName: string) => {
  try {
    const res = await fetch(`/api/${apiName}`);
    const latestData = await res.json();
    return latestData;
  } catch (err) {
    console.error(err);
  }
};
