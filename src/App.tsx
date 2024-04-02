import { useEffect, useState } from "react";
import "./App.css";
import ArticlesListing from "./components/ArticlesListing";
import { IArticle } from "./models/articles.model";
import { fetchArticles } from "./utils/helpers";

const App = () => {
  const [articles, setArticles] = useState<IArticle[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetchArticles().then((data) => {
        return data;
      });
      setArticles(
        response?.results?.map((item: IArticle) => ({
          ...item,
          showDetails: false,
        }))
      );
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      <ArticlesListing isLoading={isLoading} articles={articles} />
    </div>
  );
};

export default App;
