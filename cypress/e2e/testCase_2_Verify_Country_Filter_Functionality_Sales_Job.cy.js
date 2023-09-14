import {AssertionsHomeScreen} from "../support/helpers/assertionsHomeScreen";
import {AssertionsResultScreen} from "../support/helpers/assertionsResultScreen";
import Utils from "../support/utils";

const assertionsHomeScreen = new AssertionsHomeScreen()
const assertionsResultScreen = new AssertionsResultScreen()
const utils = new Utils()

describe("Verify filter functionality for Sales Job with Germany Filter", function() {

    const strings = utils.getTestStringData()

    before(() =>
    {
        assertionsHomeScreen.visitUrlAndVerifyTitle(strings.liferandoCareerPortalTitle)
        assertionsHomeScreen.mockLocation()
        assertionsHomeScreen.acceptCookies()

    })

    it("Verify filter functionality for Sales Job with Germany Filter", function() {

        assertionsHomeScreen.clickOnTheJobSearchField()
        assertionsHomeScreen.setDelay(2000)
        assertionsHomeScreen.clickOnTheSalesCategoryInDropdown()
        assertionsResultScreen.verifyAndScrollToSalesTag(strings.sales)
        assertionsResultScreen.saveResultCount()
        assertionsResultScreen.countTheTotalSalesResults()
        assertionsResultScreen.selectOptionFromTheMainSideBar(strings.country)
        assertionsResultScreen.selectCheckbox( strings.germany)
        assertionsResultScreen.saveResultCountForGermany()
        assertionsResultScreen.countTheTotalSalesResultsInGermany()

    });

});
