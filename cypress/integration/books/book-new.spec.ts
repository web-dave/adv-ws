import { typeIntoInput } from '../type-new-book';

describe('Book New', () => {
  before(() => {
    cy.visit('/');
  });
  let numberOfBooks = 0;
  it('I want to enter the create Form', () => {
    cy.get('ws-book-list .mat-list-item-content').as('books');
    cy.get('@books').then(books => (numberOfBooks = books.length));
    cy.get('[href="/books/new"]').click();
    cy.get('.mat-h2').contains('Add New Book');
    cy.get('.mat-raised-button').should('be.disabled');
  });
  it('I want to type some stuff', () => {
    context('ISBN', () => {
      const randomISBN = String(
        Math.floor(1000000000000 + Math.random() * 900000)
      );
      typeIntoInput(
        'isbn',
        randomISBN.substr(0, 5),
        'ISBN is required',
        randomISBN.substr(5),
        'ISBN has to be 13 characters long'
      );
    });
    context('Title', () => {
      typeIntoInput('title', 'Hurbel Wonz', 'Title is required');
    });
    describe('author', () => {
      typeIntoInput('author', 'Hurz', 'Author is required');
    });
  });
  it('I want to save the book and find it in the list', () => {
    cy.get('.mat-raised-button').should('not.be.disabled').click();
    cy.get('[routerlink="/"').click();
    cy.get('ws-book-list .mat-list-item-content').then(
      books => numberOfBooks === books.length - 1
    );
  });
});
