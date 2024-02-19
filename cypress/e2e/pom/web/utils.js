class Utils {

    static wait(time) {
        return cy.wait(time)
    }

    static textIsVisible(text) {
        cy.contains(text)
            .should('be.visible')
    }

    static clickOnItemByText(item, text) {
        cy.get(item)
            .contains(text)
            .click()
    }

    static validateItemContainsText(item, text) {
        cy.get(item)
            .should('contain', text)
    }

    static enterTextIntoField(field, text) {
        cy.get(field)
            .type(text)
    }

    static visitURL(url) {
        cy.visit(url)
    }

    static validateURL(text) {
        cy.url()
            .should('include', text)
    }

    static validateTitle(text) {
        cy.title()
            .should('eq', text)
    }

    static validateItemVisibleEnabled(item) {
        cy.get(item)
            .should('be.visible')
            .should('be.enabled')

    }

    static validateItemNotVisibleNotEnabled(item) {
        cy.get(item)
            .should('not.be.visible')
            .should('not.be.enabled')

    }

    static enterTextAndClickEnter(prop, text) {
        cy.get(prop)
            .type(text + '{enter}')
    }

    static enterTextOnInputFieldByProperties(props, text) {
        cy.get(`input[${props}]`)
            .type(text)
    }

    static enterTextOnFieldByPlaceholder(name, text) {
        cy.get(`input[placeholder="${name}"]`)
            .clear()
            .type(text)
    }

}
export default Utils