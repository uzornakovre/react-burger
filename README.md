# :small_orange_diamond: Приложение "Stellar Burgers"
*Проектная работа на курсе в Яндекс Практикум*  
______

[![Скриншот страницы](https://i.ibb.co/17dynmt/burger.jpg)](https://stellar-burgers.website)

Stellar Burgers - это приложение вымышленного ресторана, с помощью которого можно ознакомиться с ассортиментом, собирать и заказывать бургеры.

На главной странице находится меню с ингредиентами, которые можно перетаскивать в конструктор с помощью способа **Drag'n'Drop**, а также менять местами ингредиенты в самом конструкторе - эти возможности реализованы с помощью библиотеки **react-dnd**. В меню есть категории ингредиентов, быстро перейти к каждому из них можно с помощью **табов**, а также, таб, соответствующий категории, которая находится в видимой области, становится активным.

Маршрутизация реализована с помощью **react-router-dom**, присутствуют **защищенные маршруты**. Для оформления заказа требуется **регистрация**. При попытке перейти на маршруты, доступные только **авторизованным** пользователям произойдет перенаправление на страницу входа. 

В личном кабинете можно изменять данные пользователя, просматривать историю заказов и производить выход из учетной записи.
  
Взаимодействие с сервером происходит посредством **REST API** - получение списка ингредиентов, регистрация, авторизация, изменение данных о пользователе, отправка заказа и другие запросы.

Хранение состояний реализуется с помошью библиотеки **Redux Toolkit**.

Используемые технологии: 
* :heavy_check_mark: HTML5    
* :heavy_check_mark: CSS3 (**Препроцессор SCSS**)      
* :heavy_check_mark: TypeScript
* :heavy_check_mark: React.js
* :heavy_check_mark: Redux Toolkit

:bulb: В следующих версиях прокета будет добавлены лента и история заказов.
 
[:link: Открыть веб-сайт приложения](https://stellar-burgers.website)   
[:link: Открыть макет в Figma](https://www.figma.com/file/zFGN2O5xktHl9VmoOieq5E/React-_-Проектные-задачи_external_link?type=design&node-id=0-1&mode=design)
------
![GitHub repo size](https://img.shields.io/github/repo-size/uzornakovre/react-burger?color=yellow&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/uzornakovre/react-burger?color=blue&style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/uzornakovre/react-burger?color=pink&style=flat-square)  