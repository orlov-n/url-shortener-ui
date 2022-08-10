describe('List of urls', () => {
  beforeEach (() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls')
    cy.visit('http://localhost:3000')
  })


  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true);
  });


  it('Should display a header of Url Shortener', () => {
    cy.get('h1').contains('URL Shortener');
});

it('Should have page displaying shortened urls', () => {
  cy.get('section').find('.url').should('have.length', 26)
})

it('Should have a search field to enter name', () => {
  cy.get('.title-input')
})
it('Should have a search field to enter the URL', () => {
  cy.get('.url-to-shorten-input')
})

it('Should be able to type into the name field', () => {
  cy.get('.title-input').type('Travis')
})
it('Should be able to type into the URL field', () => {
  cy.get('.url-to-shorten-input').type('travis.awesome')
})

it('Should have a Shorten Please! button', () => {
  cy.get('button')
})


})