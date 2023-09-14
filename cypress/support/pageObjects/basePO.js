
export class BasePO {

    /**
     * get element
     * @param selector - WebElement
     */

    getElement(selector) {
        return cy.get(selector)
    }

    /**
     * select element
     * @param Selector
     * @param value
     */

    selectElementUsingValue(Selector, value) {
        return this.getElement(Selector).contains(value);
    }

    /**
     * get element and click on it
     * @param text - WebElement
     */

    getElementByTextAndClick(text) {
        return cy.contains(text)
    }

    /**
     * Click on a Specific Index of Element
     * @param element - element to verify
     * @param index - element to verify
     * @returns {boolean} true if exist else false
     */
    getElementByIndex(element, index) {
        return cy.get(element).eq(index);
    }
}
