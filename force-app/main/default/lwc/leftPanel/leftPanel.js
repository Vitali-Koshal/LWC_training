import { LightningElement, wire } from 'lwc';
import { publish, MessageContext} from 'lightning/messageService';
import CHECKBOX_UPDATE_CHANNEL from '@salesforce/messageChannel/Checkbox_Updated__c';


export default class LeftPanel extends LightningElement {
    @wire(MessageContext)
    messageContext;
    checkbox1Value = false;
    checkbox2Value = false;

    handleCheckbox1State(event) {
        this.checkbox1Value = event.target.checked;
        const payload = {
            state1: this.checkbox1Value,
            state2: this.checkbox2Value
        };
        publish(this.messageContext, CHECKBOX_UPDATE_CHANNEL, payload);
    }

    handleCheckbox2State(event) {
        this.checkbox2Value = event.target.checked;
        const payload = {
            state1: this.checkbox1Value,
            state2: this.checkbox2Value
        };
        publish(this.messageContext, CHECKBOX_UPDATE_CHANNEL, payload);
    }
}