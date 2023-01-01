import { useState, useEffect } from "react";
import axios from "axios";
const url = "http://ec2-43-201-85-80.ap-northeast-2.compute.amazonaws.com:8080/questions";

function useFetch(id) {
  //null설정한 이유: 모든 data가 같진 않기 때문
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (id) {
          const response = await axios.get(`${url}/${id}`);
          setQuestionData(response.data);
        } else {
          const response = await axios.get(`${url}?page=1&size=15`);
          setQuestionData(response.data.content);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { questionData, loading, error };
}

export default useFetch;
