describe('Load File', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Load a txt file and search for elements', () => {
    cy.readFile('cypress/support/texts/search.txt').then((text) => {
      cy.search(text)
    })
    cy.fixture('searchResults.json').then((locator) => {
      cy.get(locator.alert).should('be.visible')
      cy.get(locator.alert).should(
        'contain',
        'No results were found for your search'
      )
    })
  })
})
