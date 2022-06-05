const Page = require("./page")

class Autocomplete extends Page {
    get autocompleteField() {
        return $("#select-class-example > fieldset > #autocomplete")
    }

    async fillAutocompleteField(text) {
        let inputField = await this.autocompleteField
        await inputField.setValue(text)
    }

    get suggestionList() {
        return $("#ui-id-1")
    }

    async suggestedCountries() {
        let parent = await this.suggestionList;
        let child = parent.$$("li")
        return child;
    }

    async suggestedCountry() {
        let countries = await this.suggestedCountries()
        let index = Math.floor(Math.random() * countries.length);
        return countries[index];
    }

    async getSuggestedCountryText() {
        let contryName = await this.autocompleteField;
        let nameToCheck = await contryName.getValue();
        return nameToCheck.toLowerCase();
    }

    async selectCountry(text) {
        await this.fillAutocompleteField(text);
        await this.suggestionList.waitForDisplayed();
        let countryToBeSelected = await this.suggestedCountry();
        await countryToBeSelected.click();
    }
}

module.exports = new Autocomplete();
