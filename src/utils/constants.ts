// API

export const BASE_URL = "https://norma.nomoreparties.space/api";
export const WS_URL = "wss://norma.nomoreparties.space/orders";
export const TEST_URL = "http://localhost:3000/";
export const HEADERS: HeadersInit = {
  "Content-Type": "application/json",
};

// Проверка на HTML элемент

export const isHtmlElement = (elem: any): elem is HTMLElement =>
  elem instanceof HTMLElement;

// Маршруты

export const EP_ALL = "*";
export const EP_HOME = "/";
export const EP_FEED = "feed";
export const EP_FEED_ITEM = "feed/:id";
export const EP_PROFILE = "profile";
export const EP_ORDERS = "orders";
export const EP_ORDER_ITEM = "profile/orders/:id";
export const EP_INGREDIENT_INFO = "ingredients/:id";
export const EP_LOGIN = "login";
export const EP_REGISTER = "register";
export const EP_FORGOT_PASSWORD = "forgot-password";
export const EP_RESET_PASSWORD = "reset-password";

// Auth Tips Data

export const LOGIN_TIPS_DATA = [
  {
    id: 1,
    text: "Вы - новый пользователь?",
    link: "/register",
    linkText: "Зарегистрироваться",
  },
  {
    id: 2,
    text: "Забыли пароль?",
    link: "/forgot-password",
    linkText: "Восстановить пароль",
  },
];

export const REGISTER_TIPS_DATA = [
  {
    id: 1,
    text: "Уже зарегистрированы?",
    link: "/login",
    linkText: "Войти",
  },
];

export const RESET_PASSWORD_TIPS_DATA = [
  {
    id: 1,
    text: "Вспомнили пароль?",
    link: "/login",
    linkText: "Войти",
  },
];
