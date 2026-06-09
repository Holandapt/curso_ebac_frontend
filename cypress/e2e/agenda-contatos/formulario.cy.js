/// <reference types="cypress" />

describe("Testes para o formulario", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Deve adicionar um contato", () => {
    cy.get('[type="text"]').type("Lucas Holanda");
    cy.get('[type="email"]').type("email@email.com");
    cy.get('[type="tel"]').type("92 9198-5098");
    // cy.get(".adicionar").click();
    cy.get(".sc-beqWaB")
      .its("length")
      .then((quantidadeAnterior) => {
        cy.get(".adicionar").click();
        cy.get(".sc-beqWaB").should("have.length", quantidadeAnterior + 1);
      });
  });

  it("Deve alterar um contato", () => {
    cy.contains(".sc-beqWaB", "Lucas Holanda").find(".edit").click();
    cy.get('[type="email"]').clear().type("emailnovo@email.com");
    cy.get('[type="tel"]').clear().type("92 9475-5555");
    cy.get(".alterar").click();
    cy.get(".sc-beqWaB").contains("emailnovo@email.com");
  });

  it("Deve remover um contato", () => {
    cy.contains(".sc-beqWaB", "Lucas Holanda").find(".delete").click();
    cy.contains("Lucas Holanda").should("not.exist");
  });
});
