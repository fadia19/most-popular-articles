import { mock_articles } from "../utils/mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import ArticlesListing from "./ArticlesListing";

test("On first render, Spinner is loaded", () => {
  render(<ArticlesListing articles={undefined} isLoading={true} />);
  const element = screen.getByTestId("loading-spinner");
  expect(element).toBeInTheDocument();
});

test("After data is fetched, Document title should appear", () => {
  render(<ArticlesListing articles={mock_articles} isLoading={false} />);
  const title = screen.getByTestId("document-title");
  expect(title).toBeInTheDocument();
});

test("Articles renders successfully", () => {
  render(<ArticlesListing articles={mock_articles} isLoading={false} />);
  expect(screen.getByText(mock_articles[0].title)).toBeInTheDocument();
});

test("On article title click, Article description is shown", () => {
  render(<ArticlesListing articles={mock_articles} isLoading={false} />);
  const button = screen.getByTestId("article-link-0");
  fireEvent.click(button);
  const description = screen.getByTestId("article-description-0");
  expect(description).toBeInTheDocument();
});
