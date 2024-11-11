export type TTeacher = {
  about: string;
  addedToFavourites: boolean;
  categories: [];
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  lessonType: string;
  location: string;
  pricePerHour: number;
  rating: number;
};

export type TTeachersGeneral = {
  maxPrice: number;
  minPrice: number;
  page: number;
  pageSize: number;
  teachers: TTeacher[];
  totalResults: number;
};
