import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(): ValidatorFn {


    const regex = new RegExp(`^[a-z0-9_A-Z]+[@][a-z]{2,}[.][a-z]{2,7}$`);
    return (control) => {
        return (control.value == '' || regex.test(control.value) ? null : { appEmailValidator: true });
    }
}