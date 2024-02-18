class Utils {

    static wait(time) {
        return cy.wait(time)
    }

    static textIsVisible(text) {
        cy.contains(text)
            .should('be.visible')
    }
    static clickItemByText(item, text) {
        cy.get(item)
            .contains(text)
            .click()
    }
    static itemContainsText(item, text) {
        cy.get(item)
            .should('contain', text)
    }

    static enterTextIntoField(field, text) {
        cy.get(field)
            .type(text)
    }
}
export default Utils