const Page = require("./page")

class Dropdowns extends Page {
    get dropdownList() {
        return $("#dropdown-class-example")
    }

    async openDropdownList() {
        await this.dropdownList.click()
    }

    async getDropdownOption(index) {
        return $(`#dropdown-class-example > option:nth-child(${index})`)
    }

    async selectDropdownOption(index) {
        await this.openDropdownList();
        let option = await this.getDropdownOption(index);
        await option.waitForDisplayed();
        await option.click();
    }

    async getDropdownOptionText() {
        let selectedOption = await this.dropdownList;
        return selectedOption.getText();
    }
}

module.exports = new Dropdowns();
