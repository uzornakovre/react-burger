type TUserInfo = {
  email: string;
  name: string;
  password?: string;
};

type TError = {
  name: string;
  message: string;
  stack: string;
}

type TMoveIndex = {
  dragIndex: number;
  hoverIndex: number;
}

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
};