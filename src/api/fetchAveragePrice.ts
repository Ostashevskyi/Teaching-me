import { TTeacherOwnObject } from "../types/Teacher";

export const fetchAveragePrice = async (category: TTeacherOwnObject) => {
  const res = await fetch(
    "https://test.teaching-me.org/categories/v1/open/average-price",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryName: category.name,
        averagePrice: category.avgPrice,
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Error has occured during posting average prices");
  }
};
