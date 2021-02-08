describe('Rancid Tomatillos', () => {
  const baseUrl = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Should see a home button when user visits the homepage', () => {
    cy.get('img[class="homeIcon"]').should('be.visible')
  })

  it('Should have a main title on the homepage', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  })

  


})
