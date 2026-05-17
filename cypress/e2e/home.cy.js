describe('Home Page E2E Test', () => {
  it('visits the homepage and sees welcome message', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Welcome to my portfolio!');
    cy.contains(
      'This portfolio showcases my skills and projects. As a student, my mission is to apply what I learn to build functional, user-friendly applications and to grow as a developer by continuous learning and hands on experience.'
    );
  });
});
