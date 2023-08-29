type TUserInfo = {
  email: string;
  name: string;
  password?: string;
};

type TTokens = {
  accessToken: string;
  refreshToken: string;
}

type TMoveIndex = {
  dragIndex: number;
  hoverIndex: number;
};

type TIngredient = {
  _id: string;
  id?: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_large?: string;
};

type TSortResult = {
  ingredient: TIngredient | null;
  count: number;
}

type TOrderDetails = {
  readonly _id: string;
  readonly ingredients: Array<string>;
  readonly status: string;
  readonly name: string;
  readonly createdAt: string | Date;
  readonly updatedAt: string | Date;
  readonly number: number;
  ingredientsData?: Array<TIngredient>;
}
