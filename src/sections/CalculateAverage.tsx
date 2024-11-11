import React, { useState } from "react";
import { TCategory } from "../types/Category";
import { TTeacher, TTeachersGeneral } from "../types/Teacher";
import Button from "../components/Buttons/Button";

const CalculateAverage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async (): Promise<TCategory[]> => {
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

  const fetchTeachers = async (
    codes: number[],
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
          categories: codes,
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

  const fetchPrice = async (price: number) => {
    const res = await fetch(
      "https://test.teaching-me.org/categories/v1/open/average-price"
    );
  };

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const categories = await fetchCategories();
      const codes = categories.map((category) => category.code);

      let allTeachers: TTeacher[] = [];
      let page = 0;
      const pageSize = 10;
      let hasMoreData = true;

      while (hasMoreData) {
        const teachers = (await fetchTeachers(
          codes,
          page,
          pageSize
        )) as TTeachersGeneral;

        if (teachers.teachers && teachers.teachers.length > 0) {
          allTeachers = allTeachers.concat(teachers.teachers);
          page++;
        } else {
          hasMoreData = false;
        }

        if (allTeachers.length === 0) {
          setError("No teachers found");
          return;
        }

        const allPrices = allTeachers
          .map((teacher) => teacher.pricePerHour)
          .reduce((prevPrice, nextPrice) => prevPrice + nextPrice);

        const avgPrice = Number((allPrices / allTeachers.length).toFixed(2));
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error was occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button clickFn={handleClick}>Calculate average price</Button>

      <button onClick={() => fetchTeachers([6], 0, 10)}>f</button>

      {isLoading && <p>Calculating...</p>}
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default CalculateAverage;
