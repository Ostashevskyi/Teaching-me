export type TCategory = {
  childrenCategories: TChildrenCategory[];
  code: number;
  description: string;
  id: string;
  name: string;
  teachersCount: number;
};

export type TChildrenCategory = TCategory;
