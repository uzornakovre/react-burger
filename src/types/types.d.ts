type TUserInfo = {
  email: string;
  name: string;
  password?: string;
};

type TError = {
  name: string;
  message: string;
  stack: string;
};

type TMoveIndex = {
  dragIndex: number;
  hoverIndex: number;
};

type TOrderResponse = {
  name: string;
  order: { number: number };
  success: boolean;
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

type TRequestOptions = {
  headers: {
    [name: string]: string;
  };
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
