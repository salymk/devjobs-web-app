describe("toggle dark and light mode", () => {
  //   beforeEach(() => {
  //     cy.visit("http://localhost:3000", {
  //       onBeforeLoad(win) {
  //         cy.stub(win, "matchMedia")
  //           .callThrough()
  //           .withArgs("(prefers-color-scheme: dark)")
  //           .returns({
  //             matches: true,
  //           });
  //       },
  //     });
  //   });

  before(() => {
    cy.visit("http://localhost:3000", {});
  });

  it("should be light mode", () => {
    cy.get("body").should("have.css", "background-color", "rgb(242, 242, 242)");
  });

  it("should toggle dark mode and back to light mode", () => {
    cy.get("[data-test=toggle-darkmode]").click();
    cy.get("body").should("have.css", "background-color", "rgb(18, 23, 33)");
    cy.wait(3000);
    cy.get("[data-test=toggle-darkmode]").click();
    cy.get("body").should("have.css", "background-color", "rgb(242, 242, 242)");
  });
});

describe("see a list of full-time and part-time jobs", () => {
  before(() => {
    cy.visit("http://localhost:3000", {});
  });

  it("should contain part-time jobs", () => {
    cy.get("[data-test=jobs-list]").contains("Part Time");
  });

  it("should contain full-time jobs", () => {
    cy.get("[data-test=jobs-list]").contains("Full Time");
  });
});

describe("only see full-time jobs", () => {
  before(() => {
    cy.visit("http://localhost:3000", {});
  });

  it("should not contain part-time jobs", () => {
    cy.get("[data-test=full-time-checkbox]").check({ force: true });
    cy.get("[data-test=search-button]").click();
    cy.get("[data-test=jobs-list]").should("not.contain", "Part Time");
  });

  it("should contain part-time and full-time jobs", () => {
    cy.get("[data-test=full-time-checkbox]").uncheck({ force: true });
    cy.get("[data-test=search-button]").click();
    cy.get("[data-test=jobs-list]").should("contain", "Part Time");
    cy.get("[data-test=jobs-list]").should("contain", "Full Time");
  });
});
