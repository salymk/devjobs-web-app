describe("Job filter page", () => {
  before(() => {
    cy.visit("http://localhost:3000", {});
  });

  describe("see a list of full-time and part-time jobs", () => {
    it("should contain part-time jobs", () => {
      cy.get("[data-test=jobs-list]").contains("Part Time");
    });

    it("should contain full-time jobs", () => {
      cy.get("[data-test=jobs-list]").contains("Full Time");
    });
  });

  describe("only see full-time jobs", () => {
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

  describe("filter jobs by title, companies, and expertise", () => {
    it("should filter jobs by title", () => {
      cy.get("[data-test=filter-jobs]").type("senior software engineer{enter}");

      cy.get("[data-test=jobs-list]").should(
        "contain",
        "Senior Software Engineer"
      );
    });

    it("should filter jobs by companies", () => {
      cy.get("[data-test=filter-jobs]").clear().type("maker{enter}");

      cy.get("[data-test=jobs-list]").should("contain", "Maker");
    });

    it("should filter jobs by expertise", () => {
      cy.get("[data-test=filter-jobs]").clear().type("frontend{enter}");

      cy.get("[data-test=jobs-list]").should("contain", "Frontend");
    });
  });

  describe("filter jobs by location", () => {
    it("should filter jobs by location", () => {
      cy.get("[data-test=filter-jobs]").clear();
      cy.get("[data-test=filter-locations]").type("united states{enter}");

      cy.get("[data-test=jobs-list]").should("contain", "United States");
    });
  });
});
