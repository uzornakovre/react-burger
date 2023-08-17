// API

export const baseUrl = "https://norma.nomoreparties.space/api";
export const headers: HeadersInit = {
  "Content-Type": "application/json",
};

// Проверка на HTML элемент

export const isHtmlElement = (elem: any): elem is HTMLElement =>
  elem instanceof HTMLElement;

