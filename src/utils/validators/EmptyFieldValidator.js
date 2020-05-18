import Validator from './Validator.js';

export default class EmptyFieldValidator extends Validator {

    validate() {
        return {
            error: !this.value!='',
            msg: 'This field cannot be empty.'
        }
    }

}