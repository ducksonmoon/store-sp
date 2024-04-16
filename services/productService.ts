import { BASE_URL } from "./api";

export const fetchProducts = async (params: {
  page?: number;
  category?: string;
  search?: string;
}) => {
  const { page = 1, category, search } = params;
  let url = `${BASE_URL}?limit=10&skip=${(page - 1) * 10}`;
  if (category) {
    url += `&category=${category}`;
  }
  if (search) {
    url += `&q=${search}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Oh Oh Not Ok");
  }
  return await response.json();
};
