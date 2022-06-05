const Page = require("./page");

class Checkboxes extends Page {
    async getCheckboxOption(index) {
        return $(`#checkBoxOption${index}`)
    }

    async selectCheckboxOption(index) {
        let checkboxOption = await this.getCheckboxOption(index);
        await checkboxOption.click();
    }
}

module.exports = new Checkboxes();
