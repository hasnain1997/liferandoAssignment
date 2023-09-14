import {BasePO} from "./basePO";

export class HomeScreenPO extends BasePO {

    searchBlock = {
        jobSearchBar: '#keywordSearch',
        locationSearchBar: '#locationInput',
        searchButton: '#ph-search-backdrop',
        salesDropdownSearchOption: '[data-ph-at-data-text="Sales"]'
    };
    cookiesSection = {
        cookies: '[data-ph-at-id="cookie-close-link-text"]'
    }

    /**
     * get cookies selection Button
     * return WebElement
     */
    getCookiesSelectionButton() {
        return this.getElement(this.cookiesSection.cookies)
    }

    /**
     * get Job Search Field
     * return WebElement
     */
    getJobSearchField() {
        return this.getElement(this.searchBlock.jobSearchBar)
    }

    /**
     * get Location Search Button
     * return WebElement
     */
    getLocationSearchField() {
        return this.getElement(this.searchBlock.locationSearchBar)
    }

    /**
     * get Job Search Button
     * return WebElement
     */
    getJobSearchButton() {
        return this.getElement(this.searchBlock.searchButton)
    }

    /**
     * get Sales option in the dropdown
     * return WebElement
     */
    getSalesOption(){
        return this.getElement(this.searchBlock.salesDropdownSearchOption)
    }

}
