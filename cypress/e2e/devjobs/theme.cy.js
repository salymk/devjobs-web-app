describe("toggle dark and light mode", () => {
  before(() => {
    cy.visit("http://localhost:3000", {});
  });

  it("should be light mode initially", () => {
    cy.get("body").should("have.css", "background-color", "rgb(242, 242, 242)");
  });

  it("should toggle dark mode", () => {
    cy.get("[data-test=toggle-darkmode]").click();

    cy.get("body").should("have.css", "background-color", "rgb(18, 23, 33)");
  });

  it("should toggle light mode", () => {
    cy.get("[data-test=toggle-darkmode]").click();
    cy.get("[data-test=toggle-darkmode]").click();

    cy.get("body").should("have.css", "background-color", "rgb(242, 242, 242)");
  });
});
