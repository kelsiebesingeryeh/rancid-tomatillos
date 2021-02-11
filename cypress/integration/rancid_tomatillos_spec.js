describe("Rancid Tomatillos Home Page", () => {
  const baseUrl = "http://localhost:3000/";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Should see a home button when user visits the homepage", () => {
    cy.get('img[class="homeIcon"]').should("be.visible");
  });

  it("Should have a main title on the homepage", () => {
    cy.get("h1").contains("Rancid Tomatillos");
  });

  it("Should see a random movie image displayed in the header", () => {
    cy.fixture("testMovieData.json")
      .then((movieData) => {
        cy.intercept(
          "GET",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
          {
            statusCode: 200,
          }
        );
      })
      .get('div[class="randomMovieImage"]')
      .should("be.visible");
  });

  it("Should see a movie title and year in the header", () => {
    cy.fixture("testMovieData.json")
      .then((movieData) => {
        cy.intercept(
          "GET",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
          {
            statusCode: 200,
          }
        );
      })
      .get('h2[class="headerTitle"]')
      .should("exist")
      .get('div[class="headerText"]')
      .should("exist");
  });

  it("Should see all movies on the homepage", () => {
    cy.fixture("testMovieData.json")
      .then((movieData) => {
        cy.intercept(
          "GET",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
          {
            statusCode: 200,
          }
        );
      })
      .get('img[class="moviePosterImage"]')
      .should("be.visible")
      .get('p[class="movieTitle"]')
      .should("be.visible");
  });

  it("Should be able to click a movie poster", () => {
    cy.get(".nav[href*=694919]").click();
  });
})

describe("Movie Details Page", () => {
  const baseUrl = "http://localhost:3000/movies/694919";

  beforeEach(() => {
    cy.visit(baseUrl);
  });
  
  it(`Should display header for a selected movie`, () => {
  cy.get(".movieDetailsHeader").should('be.visible')
  })

  it('Should display a title, image, runtime, and release year in the header', () => {
  cy.get(".headerTitle").should('contain', 'Money Plane')
  cy.get(".headerImage").should("be.visible");
  cy.get(".runtime").should("contain", "82 minutes");
  cy.get(".year").should("contain", "2020");
  })
})

