export type TCategory = {
  childrenCategory: TChildrenCategory[];
  code: number;
  description: string;
  id: string;
  name: string;
  teachersCount: number;
};

export type TChildrenCategory = TCategory;
