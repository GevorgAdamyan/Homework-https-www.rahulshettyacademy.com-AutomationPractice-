const Page = require("./page")

class Alerts extends Page {
    get alertInputField() {
        return $("#name")
    }

    get alertBtn() {
        return $("#alertbtn")
    }

    get confirmBtn() {
        return $("#confirmbtn")
    }

    async openAlert() {
        let openBtn = await this.alertBtn;
        await openBtn.click();
    }

    async openConfirm() {
        let openBtn =await this.confirmBtn;
        await openBtn.click();
    }

    async insertNameInAlertField(name) {
        let nameField = await this.alertInputField;
        await nameField.setValue(name);
    }
}

module.exports = new Alerts();
