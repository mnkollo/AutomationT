/// <reference types="Cypress" />

export class ContactUsPage {
    successSubmission() {
        cy.get('h2').should('have.text', 'CONTACT US');
        cy.get('[name="first_name"]').type('Joe');
        cy.get('[name="last_name"]').type('Blogs');
        cy.get('[name="email"]').type('joe.blogs@mailinator.com');
        cy.get('textarea.feedback-input').type('How can I learn Cypress?');
        cy.contains('SUBMIT').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    }

    unsuccessSubmission() {
        cy.get('h2').should('have.text', 'CONTACT US');
        cy.get('[name="first_name"]').type('Joe');
        //cy.get('[name="last_name"]').type('Blogs');
        cy.get('[name="email"]').type('joe.blogs@mailinator.com');
        cy.get('textarea.feedback-input').type('How can I learn Cypress?');
        cy.contains('SUBMIT').click();
        cy.get('body').should('have.text', '\n\n\n Error: all fields are required\n\n\n');
    }
}

export const contactUsPage = new ContactUsPage()