import { TTeacherOwnObject } from "../types/Teacher";

type CalculateAveragePriceProps = {
  mainArray: TTeacherOwnObject[];
  filteredArray: TTeacherOwnObject[];
};

export const calculateAveragePrice = ({
  filteredArray,
  mainArray,
}: CalculateAveragePriceProps) => {
  return filteredArray.forEach((children, index) => {
    mainArray[index].avgPrice = Number(
      (
        children.teachers
          .filter((teacher) => teacher.lastName)
          .map((teacher) => teacher.pricePerHour)
          .reduce((prev, next) => prev + next) / children.teachersCount
      ).toFixed(1)
    );
  });
};
