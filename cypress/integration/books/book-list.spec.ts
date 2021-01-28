describe('Book List', () => {
  before(() => {
    cy.visit('/');
  });
  it('I want to see the heading of my app', () => {
    cy.get('[data-testing-id="headline"]').should(
      'contain.text',
      '🐒 Book Monkey'
    );
  });
  it('I want to select the first book', () => {
    // 978-0-20163-361-0
    cy.get('ws-book-list .mat-list-item-content')
      .contains('Design Patterns')
      .as('DP');

    cy.get('@DP').click();

    cy.get('mat-card-title').contains('Design Patterns');
  });
});
