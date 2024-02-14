import { AbstractControl} from "@angular/forms";

 export function DateValidator(control :AbstractControl):{[key:string]:boolean}|null{
    let today : Date = new Date();
    const date=control.value
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); 
    const day = ('0' + today.getDate()).slice(-2);
    const fd = `${year}-${month}-${day}`;
    if (control?.pristine){
        return null;
    }
    return fd>date ? {'Less':true}:null;
}