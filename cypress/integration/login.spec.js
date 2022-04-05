describe('T3 - Incorrect email login test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('login with incorrect email', () => {
    cy.login('user@user.com', 'pass1234', 'Authentication failed.')
  })
})
