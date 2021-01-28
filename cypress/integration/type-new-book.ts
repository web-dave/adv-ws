export const typeIntoInput = (
  name: string,
  text: string,
  err: string,
  text2?: string,
  err2?: string
) => {
  cy.get(`[formcontrolname="${name}"]`).as(name);
  cy.get('.mat-error').should('not.exist');
  cy.get(`@${name}`).focus().blur();
  cy.get('.mat-error').should('contain.text', err);
  if (text2 && err2) {
    cy.get(`@${name}`).type(text2);
    cy.get('.mat-error').should('contain.text', err2);
  }
  cy.get(`@${name}`).type(text);
  cy.get('.mat-error').should('not.exist');
};
