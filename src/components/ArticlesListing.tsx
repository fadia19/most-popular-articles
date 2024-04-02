import { IArticle } from "../models/articles.model";
import { Button, Descriptions, Spin } from "antd";
import "./ArticlesListing.css";
import { useEffect, useState } from "react";

type Props = {
  articles: IArticle[] | undefined;
  isLoading: boolean;
};

const ArticlesListing = ({ articles, isLoading }: Props) => {
  const [articlesList, setArticlesList] = useState<IArticle[] | undefined>([]);

  useEffect(() => {
    setArticlesList(articles);
  }, [articles]);

  const showArticleDetails = (article: IArticle) => {
    const newArticles = articlesList?.map((item) => {
      if (item.id === article.id) {
        return {
          ...item,
          showDetails: !item.showDetails,
        };
      }
      return item;
    });
    setArticlesList(newArticles);
  };

  return (
    <>
      {isLoading && <Spin data-testid="loading-spinner" />}
      <h1 data-testid="document-title">NY Times Most Popular Articles</h1>
      <ul className="articles-list">
        {articlesList?.map((item, index) => (
          <div key={item.id}>
            <li className="article-section">
              <Button
                type="link"
                onClick={() => showArticleDetails(item)}
                data-testid={`article-link-${index}`}
              >
                {item.title}
              </Button>
            </li>
            {item.showDetails && (
              <Descriptions
                data-testid={`article-description-${index}`}
                bordered
                layout="vertical"
                items={[
                  {
                    key: "url",
                    label: "URL",
                    children: item.url,
                  },
                  {
                    key: "source",
                    label: "Source",
                    children: item.source,
                  },
                  {
                    key: "published_date",
                    label: "Published Date",
                    children: new Date(item.published_date).toDateString(),
                  },
                  {
                    key: "updated",
                    label: "Updated Date",
                    children: new Date(item.updated).toDateString(),
                  },
                  {
                    key: "byline",
                    label: "By Line",
                    children: item.byline,
                  },
                  {
                    key: "adx_keywords",
                    label: "Adx Keywords",
                    children: item.adx_keywords,
                  },
                  {
                    key: "section",
                    label: "Section",
                    children: item.section,
                  },
                  {
                    key: "subsection",
                    label: "Sub-Section",
                    children: item.subsection || "None",
                  },

                  {
                    key: "type",
                    label: "Type",
                    children: item.type,
                  },
                  {
                    key: "geo_facet",
                    label: "Geo Facet",
                    children: item.geo_facet.join(" , ") || "None",
                  },
                  {
                    key: "des_facet",
                    label: "Des Facet",
                    children: item.des_facet.join(" , "),
                  },
                  {
                    key: "abstract",
                    label: "Abstract",
                    children: item.abstract,
                  },
                  {
                    key: "media",
                    label: "Media",
                    children: (
                      <img
                        src={item.media[0]["media-metadata"][0].url}
                        alt={item.media[0].caption}
                        height={item.media[0]["media-metadata"][0].height}
                        width={item.media[0]["media-metadata"][0].width}
                      />
                    ),
                  },
                ]}
              />
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default ArticlesListing;
