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
        date.setDate(date.getDate() + 26);   // get the current date and add 2 days to it

        var futureYear = date.getFullYear();                                    // get the year
        var futureMonth = date.toLocaleString('default', { month: 'long'});     // get the month in string format  ,  selecting month in the long format means the full month name will be displayed i.e. August
        var futureDay = date.getDate();

        cy.log('Future year to select: ' + futureYear);
        cy.log('Future month to select: ' + futureMonth);
        cy.log('Future day to select: ' + futureDay);


        cy.get('#datepicker').click();

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();                                           // recursive function - function calls itself - we continue to call the function until the year is correct
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();                                       // recursive function - function calls itself - we continue to call the function until the month is correct this is kind of like a loop
                    }
                })
            })
        }
        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }
        selectMonthAndYear();
        selectFutureDay();
    });
});