/* eslint-disable cypress/no-unnecessary-waiting */

describe('service is available', function() {
  beforeEach(() => {
    cy.viewport(1440, 1080);
    cy.visit('https://stellar-burgers.website');

    cy.get("a").contains("Личный кабинет").click();
    cy.get("input").first().type('testemail@testemail.com');
    cy.get("input").last().type('test');
    cy.get("button").contains('Войти').click();
    cy.get("a").contains("Конструктор").click();
  })

  it('should open ingredient details modal', function() {
    cy.wait(3000).get('.ingredients_list_item').first().click();
    cy.contains("Детали ингредиента");
    cy.wait(2000).get('.close_button').click();
  });

  it('should drag and drop items', function() {
    cy.get('.ingredients_drag_item').eq(1).drag('.constructor_drop_area');
    cy.get('.ingredients_drag_item').eq(3).drag('.constructor_drop_area');
    cy.get('.ingredients_drag_item').eq(5).drag('.constructor_drop_area');
    cy.get('.ingredients_drag_item').eq(7).drag('.constructor_drop_area');
    cy.get('.ingredients_drag_item').eq(9).drag('.constructor_drop_area');

    cy.get('.constructor_drag_item').eq(2).drag('.constructor_drag_item');
    cy.get('.constructor_drag_item').eq(3).drag('.constructor_drag_item');
  });

  it('should open order details modal', function() {
    cy.get('.ingredients_drag_item').eq(1).drag('.constructor_drop_area');
    cy.get('.ingredients_drag_item').eq(3).drag('.constructor_drop_area');
    cy.get('.ingredients_drag_item').eq(5).drag('.constructor_drop_area');

    cy.get('button').contains('Оформить заказ').click();

    cy.wait(18000).contains('Ваш заказ начали готовить');
    cy.get('.close_button').click();
  })
}); 