import { LightningElement, wire} from 'lwc';
import { subscribe, MessageContext} from 'lightning/messageService';
import CHECKBOX_UPDATE_CHANNEL from '@salesforce/messageChannel/Checkbox_Updated__c';
export default class RightPanel extends LightningElement {
    state1;
    state2;
    checkbox1VisibilityValue = 'slds-visible';
    checkbox2VisibilityValue = 'slds-visible';
    @wire(MessageContext)
    messageContext;

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext, 
            CHECKBOX_UPDATE_CHANNEL, 
            (message) => this.handleMessage(message)
        );
    }
    handleMessage(message) {
        this.state1 = message.state1;
        this.state2 = message.state2;
        if (this.state1 == false) {
            this.checkbox1VisibilityValue = 'slds-visible';
        }
        else {
            this.checkbox1VisibilityValue = 'slds-hidden';
        }
        if (this.state2 == false) {
            this.checkbox2VisibilityValue = 'slds-visible';
        }
        else {
            this.checkbox2VisibilityValue = 'slds-hidden';
        }
    }
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
}