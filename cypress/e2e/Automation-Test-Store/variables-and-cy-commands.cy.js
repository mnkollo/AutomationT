/// <reference types='cypress' />



describe('Verifying variables, cypress commands and jquery commands', () => {

    beforeEach('Open browser', () => {
        cy.openAutomationStore();

    });
    it('Navigating to specific product pages', () => {
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skinCareLink = cy.get("a[href*='product/category&path=']").contains(" Skincare");

        // makeupLink.click();
        // skinCareLink.click();

        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains(" Skincare").click();
    })
    it('Navigating to specific product pages', () => {
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        //the following code will fail
        // const header = cy.get('h1 .maintext');
        // cy.log(header.text());


        //Recommended Approach
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            //expect(headerText).is.eq('Makeup');
            cy.wrap(headerText).should('contain', 'Makeup');
        })
    })
    it.only('Validate properties of the Contact Us Page', () => {
        cy.contains('a', 'Contact Us').click();

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');

        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            cy.wrap(text).find('#field_11').should('contain', 'First name:');
        })
        
        //Jquery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text().trim();
            expect(firstNameText).to.contain('First name:');


            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);
            })
        })
    })
})