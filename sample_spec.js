describe("The Sigla Portal Login page", () => {
  it("successfully loads", () => {
    cy.visit("http://sigla-test-client.us-east-1.elasticbeanstalk.com/login");
    cy.contains("Login");
  });
});

describe("The Sigla Portal Login page", () => {
  it("should successfully log user in when valid username and password given", () => {
    cy.visit("http://sigla-test-client.us-east-1.elasticbeanstalk.com/login");
    cy.get('[id="mat-input-0"]').type("groot").should("have.value", "groot");
    cy.get('[id="mat-input-1"]')
      .type("iamgroot")
      .should("have.value", "iamgroot");
    cy.get("[type=submit").click();
    cy.url().should("include", "/manage");
  });

  describe("The Sigla Portal Login page", () => {
    it("should allow the user to reset password if user clicks 'Forgot Password' link", () => {
      cy.visit("http://sigla-test-client.us-east-1.elasticbeanstalk.com/login");
      cy.contains("Forgot").click();
      cy.url().should("not.include", "/four-oh-four");
    });
  });
});
