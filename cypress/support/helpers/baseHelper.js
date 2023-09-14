
export class BaseHelper {

    /**
     * set a delay
     * @param title - value of time to wait
     */
    visitUrlAndVerifyTitle(title) {
        cy.visit(Cypress.config('baseUrl')).title().should("contain", title);
    }

    /**
     * set a delay
     * @param value - value of time to wait
     */
    setDelay(value) {
        cy.wait(value);
    }

    /**
     * click On Element
     */
    clickOnElement(element){
        element.click()
    }

    /**
     * verify element contains text
     */
    verifyElementContainsTextThenClick(element, text){
        cy.get(element).contains(text).click()
    }

    /**
     * verify element contains text
     */
    verifyElementContainsText(element, text){
        return cy.get(element).find(text)
    }

    /**
     * type and verify text
     * @param element - element of text
     * @param text - text to verify
     */
    typeAndVerify(element, text) {
        element.click();
        element.type(text);
        element.should("have.value", text);
    }
}
