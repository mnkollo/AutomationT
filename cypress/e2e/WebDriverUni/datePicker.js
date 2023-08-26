/// <reference types="cypress" />

describe("Test Datepicker via webdriveruni", () => {

    beforeEach('Open browser', () => {
        cy.openwebDriverUni();
        cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })
    });
    it('Select date from the datepicker', () => {
        // let date = new Date();    
        // date.setDate(date.getDate());    
        // cy.log(date.getDate());           // get the current date

        // let date2 = new Date();
        // date.setDate(date2.getDate() + 5);    
        // cy.log(date.getDate());          // get the current date i.e 26 + 5 days = 31

        var date = new Date()
        date.setDate(date.getDate() + 1)  

        var futureYear = date.getFullYear()
        
    });

});