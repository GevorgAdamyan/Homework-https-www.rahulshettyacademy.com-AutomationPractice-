const Page = require("./page")

class RadioButtons extends Page {
    async getRadioBtn(index) {  
        return $(`label:nth-child(${index}) .radioButton`)
    }

    async selectRadioBtn(index) {
        let radioBtn = await this.getRadioBtn(index)
        await radioBtn.click();
    }
}

module.exports = new RadioButtons();
