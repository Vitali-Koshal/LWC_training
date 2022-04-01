import { LightningElement, api } from 'lwc';

export default class ChildB extends LightningElement {
    @api getCheckBoxValue=false;
    value=false;
}