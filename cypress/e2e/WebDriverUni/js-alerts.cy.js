/// <reference types='cypress' />


describe('Handle js alerts', () => {

    beforeEach('Open browser', () => {
        cy.openwebDriverUni();
        cy.contains('POPUP & ALERTS')
        .invoke('removeAttr', 'target').click({ force: true })

    });
    it('Confirm js alert contains the correct text', () => {
        //cypress code
        cy.get('[id="button1"]').click();

        cy.on('window:alert', (str) => {                        //callback function - str is the parameter
            expect(str).to.equal('I am an alert box!')        //window:alert is a cypress event to auto accept alerts
        })
    });
    it('Validate js confrm alert box works correctly when clicking ok', () => {
        //cypress code
        cy.get('[id="button4"]').click();
        
        cy.on('window:confirm', (str) => {                        
            return true;          // return true to click ok
        })
        cy.get('[id="confirm-alert-text"]').contains('You pressed OK!')
    });
    it('Validate js confrm alert box works correctly when clicking cancel', () => {
        //cypress code
        cy.get('[id="button4"]').click();
        
        cy.on('window:confirm', (str) => {                        
            return false;                                     // return false to click cancel
        })                                                    //window:confirm is a cypress event to be able to click ok or cancel
        cy.get('[id="confirm-alert-text"]').contains('You pressed Cancel!')
    });
})