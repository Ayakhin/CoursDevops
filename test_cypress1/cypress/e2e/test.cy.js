describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('visits some pages', () => {
    cy.visit('https://nowledgeable.com')


        // Récupère le titre de la page
        cy.get('h1.pl-2').should('exist').then(($title) => {
          // Vérifie que le titre contient le texte "Practice"
          // expect($title.text()).to.include('NOWLEDGEABLE')
        })
  })
})
