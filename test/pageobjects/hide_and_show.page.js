const Page = require("./page");

class HideAndShow extends Page {
    get showBtn() {
        return $("#show-textbox")
    }

    get hideBtn() {
        return $("#hide-textbox")
    }

    get hiddenInputField() {
        return $("#displayed-text")
    }

    async openHiddenInputField() {
        let showButton = await this.showBtn;
        await showButton.click();
        let inputField = await this.hiddenInputField;
        await inputField.waitForDisplayed()
    }

    async fillHiddenInputField(text) {
        let inputField = await this.hiddenInputField;
        await inputField.setValue(text)
    }

    async getInputTextFromHiddenField() {
        let inputField = await this.hiddenInputField;
        return inputField.getValue();
    }

    async hideHiddenInputFiled() {
        await this.hideBtn.click();
    }
}

module.exports = new HideAndShow();
