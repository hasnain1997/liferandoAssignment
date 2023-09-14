import {BasePO} from "./basePO";

export class ResturantResultScreenPO extends BasePO {

    resultBlock = {
        locationDetail: '[data-ph-id="ph-page-element-page11-1eXAIg"]:visible',
        jobTitle: '[class*=job-title]'
    };

    refineSearchBlock = {
        filterMainMenu: '[data-ph-at-id="facet-heading-link"]',
        filterCheckBox: '.result-text',
        selectedFilterTag: '[class="facet-tag"]',
        resultCount: '[class=result-count]'
    };

    pagination={
        rightArrow: '[class="icon icon-arrow-right"]:visible',
        parentPaginationBlock: '[class*="pagination-block au-target"]'
    }

    /**
     * get Result Screen location detail
     * return WebElement
     */
    getResultScreenLocationField() {
        return this.getElement(this.resultBlock.locationDetail)
    }

    /**
     * get Filter Menu Bar
     * return WebElement
     */
    getFilterSideBar(value) {
        return this.selectElementUsingValue(this.refineSearchBlock.filterMainMenu, value)
    }

    /**
     * get Filter checkbox
     * return WebElement
     */
    getFilterCheckbox() {
        return this.getElement(this.refineSearchBlock.filterCheckBox)
    }

    /**
     * get Filter Tag
     * return WebElement
     */
    getSelectedFilterTag(){
        return this.getElement(this.refineSearchBlock.selectedFilterTag)
    }

    /**
     * get the Right Arrow
     * return WebElement
     */
    getTheRightArrow(){
        return this.getElement(this.pagination.rightArrow)
    }

    /**
     * get the parent Pagination block
     * return WebElement
     */
    getParentPaginationBlock(){
        return this.getElement(this.pagination.parentPaginationBlock)
    }

    /**
     * get the result count
     * return WebElement
     */
    getResultCount(){
        return this.getElement(this.refineSearchBlock.resultCount)
    }

    /**
     * get Job Title
     * return WebElement
     */
    getJobTitle(){
        return this.getElement(this.resultBlock.jobTitle)
    }

}
