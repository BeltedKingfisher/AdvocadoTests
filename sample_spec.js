describe("My First Test", () => {
  it("Visits the Sigla Portal", () => {
    cy.visit("http://sigla-test-client.us-east-1.elasticbeanstalk.com/login");
    cy.contains("Forgot").click();
    cy.url().should("not.include", "/four-oh-four");
  });
});
