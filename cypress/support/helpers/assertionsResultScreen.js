import {BaseHelper} from "./baseHelper";
import {ResturantResultScreenPO} from "../pageObjects/resturantResultScreenPO";

const resturantResultScreenPO = new ResturantResultScreenPO()
let totalCount=0
let totalCountGermany=0
export class AssertionsResultScreen extends BaseHelper {


    /**
     * Verify Search Job has multiple search location
     */
    verifyMultipleLocationsExistForTheSearchResult() {
        resturantResultScreenPO.getResultScreenLocationField().then(($locations) => {
                const uniqueLocations = new Set($locations.map((index, el) => Cypress.$(el)
                    .text()));
                expect(uniqueLocations.size, "Multiple Locations Scenerio - Locations should be more then 1")
                    .to.be.greaterThan(1);
            }
        )
    }

    /**
     * Verify Search Job has multiple search location
     */
    selectOptionFromTheMainSideBar(filterValue) {
        resturantResultScreenPO.getFilterSideBar(filterValue).click()
    }

    /**
     * Verify Search Job has multiple search location
     */
    selectCheckbox(checkboxValue) {
        resturantResultScreenPO.getFilterCheckbox().contains(checkboxValue).click()
    }

    /**
     * Verify All Results are from Single location
     */
    verifySingleLocationsExistForTheSearchResult() {
        resturantResultScreenPO.getResultScreenLocationField().then(($locations) => {
                const uniqueLocations = new Set($locations.map((index, el) => Cypress.$(el)
                    .text()));
                expect(uniqueLocations.size, "Signle Location Scenerio - Locations should be more then 1")
                    .to.be.eq(1);
            }
        )
    }

    /**
     * Check if right arrow is visible or not
     */
    isRightArrowVisible = () => {
        return resturantResultScreenPO.getTheRightArrow().should('be.visible').debug();
    };

    clickNextPage = () => {
        resturantResultScreenPO.getTheRightArrow().click({ force: true });
    };

    /**
     * check on all pages if results are for multiple locations
     */
    clickOnTheNextPageAndVerifyIfMultipleLocationsExist = () => {
        resturantResultScreenPO.getParentPaginationBlock().then(($button) => {
            if ($button.find(resturantResultScreenPO.pagination.rightArrow).length > 0) {
                this.verifyMultipleLocationsExistForTheSearchResult()
                this.clickNextPage()
                this.clickOnTheNextPageAndVerifyIfMultipleLocationsExist()
            }
            else {
                this.verifyMultipleLocationsExistForTheSearchResult()
            }
        });
    }

    /**
     * check on all pages if results are for single location
     */
    clickOnTheNextPageAndVerifyIfOnlySingleLocationsExist = () => {
        resturantResultScreenPO.getParentPaginationBlock().then(($button) => {
            if ($button.find(resturantResultScreenPO.pagination.rightArrow).length > 0) {
                this.verifySingleLocationsExistForTheSearchResult()
                this.clickNextPage()
                this.clickOnTheNextPageAndVerifyIfOnlySingleLocationsExist()
            }
            else {
                this.verifySingleLocationsExistForTheSearchResult()
            }
        });
    }


    /**
     * click On Sales Job from the dropdown
     */
    verifyAndScrollToSalesTag(value)
    {
        resturantResultScreenPO.getSelectedFilterTag().scrollIntoView()
        resturantResultScreenPO.getSelectedFilterTag().should('have.text', value)
    }

    /**
     * save Result count
     */
    saveResultCount(value)
    {
        resturantResultScreenPO.getResultCount().as("SalesCount")

    }

    /**
     * save Result count
     */
    saveResultCountForGermany(value)
    {
        resturantResultScreenPO.getResultCount().as("GermanySalesCount")

    }

    /**
     * count total sales result
     */
    countTheTotalSalesResults = () => {
        resturantResultScreenPO.getParentPaginationBlock().then(($button) => {
            if ($button.find(resturantResultScreenPO.pagination.rightArrow).length > 0) {
                cy.get('[class*=job-title]').then((count) => {
                    totalCount += count.length;
                });
                this.clickNextPage()
                this.countTheTotalSalesResults()
            }
            else {
                cy.get('[class*=job-title]').then((count) => {
                    totalCount += count.length;
                });
                cy.get("@SalesCount").then((count)=>{
                    cy.wrap(count).should('have.text', totalCount)
                })

            }
        });

    }

    /**
     * count total sales result Germany
     */
    countTheTotalSalesResultsInGermany = () => {
        resturantResultScreenPO.getParentPaginationBlock().then(($button) => {
            if ($button.find(resturantResultScreenPO.pagination.rightArrow).length > 0) {
                cy.get('[class*=job-title]').then((jobCount) => {
                    totalCountGermany += jobCount.length;
                });
                this.clickNextPage()
                this.countTheTotalSalesResults()
            }
            else {
                cy.get('[class*=job-title]').then((jobCount) => {
                    totalCountGermany += jobCount.length;
                });
                cy.get("@GermanySalesCount").then((count) => {
                    cy.wrap(count).should('have.text', totalCountGermany)
                })
            }
        });
    }
}