import { TCategory } from "../types/Category";

export const fetchCategories = async (): Promise<TCategory[]> => {
  const res = await fetch(
    "https://test.teaching-me.org/categories/v1/open/categories",
    {
      method: "GET",
      headers: {
        "Accept-Language": "en",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error has occured during fetching categories");
  }

  return res.json();
};
