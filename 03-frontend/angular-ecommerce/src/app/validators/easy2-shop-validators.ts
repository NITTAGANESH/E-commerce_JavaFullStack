import { FormControl, NgControl, ValidationErrors } from "@angular/forms";

export class Easy2ShopValidators {
    // white space validation
    static notOnlyWhitespce(control: FormControl): ValidationErrors {

        // check if string contains only white space
        if ((control.value != null) && (control.value.trim().length === 0)) {
            // invalid return error object
            return { 'notOnlyWhitespace': true }
        } else {
            // valid return null
            return null!;
        }

    }
}
