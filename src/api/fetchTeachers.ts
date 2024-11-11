import { TTeachersGeneral } from "../types/Teacher";

export const fetchTeachers = async (
  code: number,
  page: number,
  pageSize: number
): Promise<TTeachersGeneral> => {
  const res = await fetch(
    "https://test.teaching-me.org/categories/v1/open/search",
    {
      method: "POST",
      headers: {
        "Accept-Language": "en",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categories: [code],
        page: page,
        pageSize: pageSize,
      }),
    }
  );

  if (!res.ok) {
    throw new Error("Error has occured during fetching teachers");
  }

  const data = (await res.json()) as TTeachersGeneral;

  return data || [];
};
