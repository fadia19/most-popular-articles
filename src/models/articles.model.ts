export interface MediaMetaData {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface ArticleMedia {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetaData[];
}

export interface IArticle {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: Date | string;
  updated: Date | string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: ArticleMedia[];
  eta_id: number;
  showDetails?: boolean;
}

export interface ArticleResponse {
  copyright: string;
  num_results: number;
  results: IArticle[];
  status: string;
}
