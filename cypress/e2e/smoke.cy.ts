describe('Perfect Timing smoke', () => {
  it('adds to cart and checks sticky bar, then navigates to checkout', () => {
    cy.visit('/');
    cy.contains('Browse questions').click();
    cy.contains('Trending Questions');
    cy.contains('View').first().click();
    cy.contains('Add to Cart').click();
    cy.contains('View Cart');
    cy.contains('Checkout').first().click();
    cy.location('pathname').should('eq', '/checkout');
  });

  it('blocks empty submit', () => {
    cy.visit('/checkout');
    cy.contains('Pay & Submit').click();
    cy.contains('Required');
  });
});


