import { useState } from "react";

import { fetchTeachers } from "../api/fetchTeachers";
import { fetchCategories } from "../api/fetchCategories";
import { fetchAveragePrice } from "../api/fetchAveragePrice";

import Button from "../components/Buttons/Button";

import { TTeacherOwnObject, TTeachersGeneral } from "../types/Teacher";

import { calculateAveragePrice } from "../utils/calculateAverangePrice";

const CalculateAverage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEnd, setIsEnd] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const categories = await fetchCategories();

      const childrenCategory: TTeacherOwnObject[] = categories
        .map((category) => category.childrenCategories)
        .flat()
        .map((category) => ({
          name: category.name,
          code: category.code,
          teachersCount: category.teachersCount,
          teachers: [],
          avgPrice: 0,
        }));

      let index = 0;
      const pageSize = 10;

      while (index < childrenCategory.length) {
        const category = childrenCategory[index];
        const pages = Math.ceil(category.teachersCount / pageSize);
        let page = 0;

        while (page < pages) {
          const teachers = (await fetchTeachers(
            category.code,
            page,
            pageSize
          )) as TTeachersGeneral;

          category.teachers = [...category.teachers, ...teachers.teachers];
          page++;
        }

        index++;
      }

      const validChildren = childrenCategory.filter(
        (teacher) => teacher.teachersCount > 0
      );

      calculateAveragePrice({
        filteredArray: validChildren,
        mainArray: childrenCategory,
      });

      childrenCategory.forEach((category) => {
        fetchAveragePrice(category);
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error occurred");
    } finally {
      setIsLoading(false);
      setIsEnd(true);
    }
  };

  return (
    <div className="flex flex-col gap-7">
      <Button clickFn={handleClick}>Calculate average price</Button>

      {isLoading && <p>Calculating...</p>}
      {error && <p>Error: {error}</p>}
      {isEnd && (
        <p className="max-w-[300px]">
          Average price calculated sucessfully and send to the database!
        </p>
      )}
    </div>
  );
};

export default CalculateAverage;
