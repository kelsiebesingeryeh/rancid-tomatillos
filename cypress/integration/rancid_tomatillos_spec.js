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

  it('Should see a random movie image displayed in the header', () => {
    cy.get('img[class="headerImage"]').should('be.visible')
  })

  it('Should see a movie title and year that match the image in the header', () => {
    cy.get('h2[class="headerTitle"]').should('exist')
    .get('div[class="headerText"]').should('exist')
  })

  it('Should see all movies on the homepage', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      },
      {
        statusCode: 200,
      }
    )
    .get('img[class="moviePosterImage"]').should('be.visible')
    .get('p[class="movieTitle"]').should('be.visible')
  })

  // it('Should be able to click a movie poster to view movie details on a new page', () => {
  //   cy.get('img[class="moviePosterImage"]').click({multiple: true})
  // })
})
