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

  describe("filter jobs by title, location and full-time", () => {
    it("should be a full-time job in the united states", () => {
      cy.get("[data-test=filter-jobs]")
        .clear()
        .type("senior software engineer");
      cy.get("[data-test=filter-locations]").clear().type("united kingdom");
      cy.get("[data-test=full-time-checkbox]").check({ force: true });
      cy.get("[data-test=search-button]").click();

      cy.get("[data-test=jobs-list]").should("contain", "United Kingdom");
      cy.get("[data-test=jobs-list]").should(
        "contain",
        "Senior Software Engineer"
      );
      cy.get("[data-test=jobs-list]").should("contain", "Full Time");
    });
  });

  describe("load more jobs", () => {
    it("should load more jobs", () => {
      cy.visit("http://localhost:3000", {});
      cy.get("[data-test=jobs-list] a").should("have.length", 9);

      cy.get("[data-test=load-more-btn]").click();

      cy.get("[data-test=jobs-list] a").should("have.length", 15);
    });
  });

  describe("go to the detials page", () => {
    it("should click on the first job", () => {
      cy.get("[data-test=jobs-list]")
        .contains("Senior Software Engineer")
        .click();

      cy.get("[data-test=job-details]").contains("Senior Software Engineer");
    });

    it("should take you to the company site", () => {
      cy.get("[data-test=company-btn]").click();
    });

    it("should take you to the application site", () => {
      cy.get("[data-test=application-btn]").click();
      cy.get("[data-test=application-btn-2]").click();
    });
  });
});
