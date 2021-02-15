describe("Rancid Tomatillos Home Page", () => {
  const baseUrl = "http://localhost:3000/";

  it("Should see a home button when user visits the homepage", () => {
    cy.visit(baseUrl);
    cy.get('img[class="homeIcon"]').should("be.visible");
  })

  it("Should have a main title on the homepage", () => {
    cy.visit(baseUrl);
    cy.get("h1").contains("Rancid Tomatillos");
  })

  it("Should see a random movie image displayed in the header", () => {
    cy.fixture("testMovieData.json")
      .then((movieData) => {
        cy.intercept(
          "GET",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
          {
              statusCode: 200,
              body: {
                movies: movieData
              }
            }
            )
          })
      cy.visit(baseUrl)
      .get('div[class="randomMovieImage"]')
      .should("be.visible");
  })

  it("Should see a movie title and year in the header", () => {
    cy.fixture("testMovieData.json")
      .then((movieData) => {
        cy.intercept(
          "GET",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
          {
            statusCode: 200,
            body: {
              movies: movieData,
            },
          }
        );
      })
      .get('h2[class="headerTitle"]')
      .should("exist")
      .get('div[class="headerText"]')
      .should("exist");
  })

  it("Should see all movies on the homepage", () => {
    cy.fixture("testMovieData.json")
      .then((movieData) => {
        cy.intercept(
          "GET",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
          {
            statusCode: 200,
            body: {
              movies: movieData,
            },
          }
        );
      })
      .get('img[class="moviePosterImage"]')
      .should("be.visible")
      .get('p[class="movieTitle"]')
      .should("be.visible");
  })

  it("Should be able to click a movie poster", () => {
    cy.visit(baseUrl);
    cy.get(".movieCard:first").click();
  })

  it("Should be able to click the home icon and refresh the page", () => {
    cy.visit(baseUrl);
    cy.get(".homeIcon").click();
  })

  it("Should be able to see an error message if the movies don't display", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        "forceNetworkError": true,
      }
    )
    cy.visit(baseUrl)
      .get(".errorMessage")
      .should("contain", "Something went wrong!");
  })

  it("Should be able to click the search icon and display a search bar", () => {
    cy.visit(baseUrl)
      .get(".searchIcon").click()
      .get(".searchForm").should("be.visible")
  })

  it("Should be able to type a movie title into the search bar", () => {
    cy.visit(baseUrl)
      .get(".searchIcon").click()
      .get(".searchForm").type("Mulan")
  })

  it("Should see movies that match the user's search input", () => {
    cy.visit(baseUrl)
      .get(".searchIcon").click()
      .get(".searchForm").type("Mulan")
      .get(".movieCard").get(".movieTitle").should("contain", "Mulan")
  })

  // it("Should see a message if no movies match the user's search input", () => {
  //
  // })

  it.only("Should be able to click the sort icon and display a dropdown menu", () => {
    cy.visit(baseUrl)
      .get(".sortIcon").click()
      .get(".sortDropDown").should("be.visible")
  })

  it("Should be able to select an option from the dropdown menu to sort the displayed movies", () => {

  })

})

describe("Movie Details Page", () => {
  const baseUrl = "http://localhost:3000/movies/694919";

  it(`Should display header for a selected movie`, () => {
    cy.visit(baseUrl);
    cy.get(".movieDetailsHeader").should('be.visible')
  })

  it('Should display a title, image, runtime, and release year in the header', () => {
    cy.visit(baseUrl);
    cy.get(".headerTitle").should('contain', 'Money Plane')
    cy.get(".headerImage").should("be.visible");
    cy.get(".runtime").should("contain", "82 minutes");
    cy.get(".year").should("contain", "2020");
  })

  it('Should display a movie poster', () => {
    cy.visit(baseUrl);
    cy.get(".poster").should('be.visible');
  })

  it("Should display a movie overview", () => {
    cy.visit(baseUrl);
    cy.get(".movieOverview").should("be.visible");
  })

  it("Should display a movie details including release year, runtime, genre, budget, revenue, average rating", () => {
    cy.visit(baseUrl);
    cy.get(".movieDetailsList").should("contain", 'Released').and('contain', 'Runtime').and('contain', 'Genre').and('contain', 'Average Rating');
  })

  it('Should be able to click the home icon and display home page', () => {
    cy.visit(baseUrl);
    cy.get(".homeIcon").click()
  })

  it("Should be able to see an error message if the movie details don't display", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919",
      {
        "forceNetworkError": true,
      }
    )
    cy.visit(baseUrl)
      .get(".errorMessage")
      .should("contain", "Something went wrong!");
    })

   it("Should be able to view a movie's trailer", () => {
     cy.visit(baseUrl);
     cy.get(".trailerContainer").should('be.visible')
   })
})
