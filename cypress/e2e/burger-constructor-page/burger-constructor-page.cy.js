/* eslint-disable cypress/no-unnecessary-waiting */
import { testEmail, testPassword } from "../../../src/utils/mock-data";

describe("service is available", function () {
  beforeEach(() => {
    cy.viewport(1440, 1080);
    cy.visit("");

    cy.get(".ingredients_drag_item").as("iDragItem");
    cy.get(".constructor_drop_area").as("cDropArea");

    cy.get("a").contains("Личный кабинет").click();
    cy.get("input").first().type(testEmail);
    cy.get("input").last().type(testPassword);
    cy.get("button").contains("Войти").click();
    cy.get("a").contains("Конструктор").click();
  });

  it("should open ingredient details modal", function () {
    cy.wait(3000).get(".ingredients_list_item").first().click();
    cy.contains("Детали ингредиента");
    cy.wait(2000).get(".close_button").click();
  });

  it("should drag and drop items", function () {
    cy.get("@iDragItem").eq(1).drag("@cDropArea");
    cy.get("@iDragItem").eq(3).drag("@cDropArea");
    cy.get("@iDragItem").eq(5).drag("@cDropArea");
    cy.get("@iDragItem").eq(7).drag("@cDropArea");
    cy.get("@iDragItem").eq(9).drag("@cDropArea");

    cy.get(".constructor_drag_item").as("cDragItem");

    cy.get("@cDragItem").eq(2).drag("@cDragItem");
    cy.get("@cDragItem").eq(3).drag("@cDragItem");
  });

  it("should open order details modal", function () {
    cy.get("@iDragItem").eq(1).drag("@cDropArea");
    cy.get("@iDragItem").eq(3).drag("@cDropArea");
    cy.get("@iDragItem").eq(5).drag("@cDropArea");

    cy.get("button").contains("Оформить заказ").click();

    cy.wait(18000).contains("Ваш заказ начали готовить");
    cy.get(".close_button").click();
  });
});
