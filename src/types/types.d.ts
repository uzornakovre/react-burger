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

type TFormData = {
  values: {
    [name: string]: string;
  };
  errors: {
    [name: string]: string;
  };
  isValid?: boolean;
  handleChange: (evt: any) => void;
  setValues: any;
  setIsValid: any;
  resetFormValues: () => void;
};
