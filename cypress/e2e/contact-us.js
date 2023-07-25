/// <reference types='cypress' />

describe('Test Contact Us form via WebdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('h2').should('have.text', 'CONTACT US');
        cy.get('[name="first_name"]').type('Joe');
        cy.get('[name="last_name"]').type('Blogs');
        cy.get('[name="email"]').type('joe.blogs@mailinator.com');
        cy.get('textarea.feedback-input').type('How can I learn Cypress?');
        cy.contains('SUBMIT').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it('Should be able to submit a successful submission via contact us form', () => {
        //cypress code
    });
})