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

  beforeEach(() => {
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
