describe('AppComponent', () => {
  it('should render AppComponent', () => {
    cy.visit('/');

    cy.get('app-root').should('exist');
  });
});
