// login
Cypress.Commands.add('login', (email, pass, content) => {
  cy.fixture('login.json').then((locator) => {
    cy.get(locator.link).click()
    cy.get(locator.email).type(email)
    cy.get(locator.password).type(pass)
    cy.get(locator.submitBtn).click()
    cy.get(locator.errMsg).should('contain', content)
  })
})
