import { render, waitFor } from "@testing-library/react";
import App from "./App";
import * as helpers from "./utils/helpers";
import { mock_articles } from "./utils/mocks";

test("Fetch Articles API is called", async () => {
  const mockFetchData = jest
    .spyOn(helpers, "fetchArticles")
    .mockImplementation(async () => {
      return mock_articles;
    });

  render(<App />);
  await waitFor(() => {
    expect(mockFetchData).toHaveBeenCalled();
  });
});
