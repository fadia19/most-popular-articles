export const API_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=CarWgwhAVj8XgtYoX4bHb3DCiGGAHKy8";

export const fetchArticles = async () => {
  const response = await fetch(API_URL);
  return response?.json();
};
