type TServerResponse<T> = {
  success: boolean;
} & T;

type TRefreshResponse = TServerResponse<TTokens>;

type TOrderResponse = TServerResponse<{
  name: string;
  order: { number: number };
}>;

type TAuthResponse = TServerResponse<
  {
    user: TUserInfo;
  } & TTokens
>;

type TUserInfoResponse = TServerResponse<{
  user: TUserInfo;
}>

type TIngredientsResponse = TServerResponse<{
  data: Array<TIngredient>;
}>

type TResMessage = TServerResponse<{
  message: string;
}>;

// type TResponses =
//   | TRefreshResponse
//   | TUserInfoResponse
//   | TAuthResponse
//   | TResMessage
//   | TIngredientsResponse
//   | TOrderResponse;