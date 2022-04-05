describe('Search Elements', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('T1 - Search for elements with multiple results', () => {
    cy.search('dress')

    cy.fixture('searchResults.json').then((locator) => {
      cy.get(locator.banner).should('be.visible')
      cy.get(locator.banner).should('contain', 'dress')
    })
  })

  it('T2 - Search for elements with no result', () => {
    cy.search('pants')

    cy.fixture('searchResults.json').then((locator) => {
      cy.get(locator.alert).should('be.visible')
      cy.get(locator.alert).should(
        'contain',
        'No results were found for your search'
      )
    })
  })
})
