import React, { useEffect, useState } from "react";
import axios from "axios";
import TextComponent2 from "./TextComponent2";
import Card_component4 from "./Card_component4";

interface KeywordResultsProps {
  keywords: string[];
}

const KeywordResults = ({ keywords }: KeywordResultsProps) => {
    const BACKEND_URL = import.meta.env.VITE_REACT_URL_BACKEND_URL;
  const [results, setResults] = useState<{ keyword: string; data: any }[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const allResults = await Promise.all(
          keywords.map(async (keyword) => {
            const response = await axios.get(`${BACKEND_URL}/api/department`, {
              params: { searchkey: keyword },
            });
            console.log("Response for keyword:", keyword, response.data);
            return {
              keyword,
              data: response.data,
            };
          })
        );
        setResults(allResults);
      } catch (error) {
        console.error("Error fetching keyword data:", error);
      }
    };

    if (keywords && keywords.length > 0) {
      fetchResults();
    }
  }, [keywords]);

  return (
    <div className="flex flex-wrap gap-4 mt-3">
      {results.map((result, index) => (
<div key={index}>
{result.data && result.data.length > 0 && (
    <section>
        <div className="mt-5">
            <TextComponent2 text={`${result.keyword}`} />
            <div className="flex mt-5">
                {result.data.slice(0, 8).map((department: Record<string, any>, index: React.Key | null | undefined) => (
                    <Card_component4 key={index} issuer={department} />
                ))}
            </div>
        </div>
    </section>
)}
</div>
      ))}
    </div>
  );
};

export default KeywordResults;