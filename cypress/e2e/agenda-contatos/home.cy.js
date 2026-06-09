/// <reference types="cypress" />

describe("Testes para a pagina inicial", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Deve renderizar formulario", () => {
    cy.get("input").should("have.length", 3);
    cy.get('button[type="submit"]').click();
  });

  it("Deve renderizar 3 contatos", () => {
    cy.get(".sc-beqWaB").should("have.length", 3);
  });
});
