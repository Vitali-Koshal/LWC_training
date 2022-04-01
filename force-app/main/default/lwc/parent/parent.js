import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {
    @track checkboxValue;
    handleCheckboxValue(event) {
        this.checkboxValue = event.detail;
    }
}