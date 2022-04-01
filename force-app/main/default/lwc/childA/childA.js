import { LightningElement} from 'lwc';

export default class ChildA extends LightningElement {
    checkBox = 'false';

    
    clickedHandle(event) {
        if (this.checkBox == true) {
            this.checkBox = false;
        }
        else {
            this.checkBox = true;
        }
        
        //create event for parent
        const checkboxEvent = new CustomEvent("getcheckboxvalue", {
            detail: this.checkBox
        });
        //dispatches the event
        this.dispatchEvent(checkboxEvent);
    }
}