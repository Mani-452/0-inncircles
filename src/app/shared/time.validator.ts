import { AbstractControl} from "@angular/forms";

 export function TimeValidator(control :AbstractControl):{[key:string]:boolean}|null{
    let t : Date = new Date();
    const time=control.value
    const hrs=('0' + t.getHours()).slice(-2);
    const mins=('0' + t.getMinutes()).slice(-2); 
    const ft=`${hrs}:${mins}`
    if (control?.pristine){
        return null;
    }
   return ft>time ? {'L':true}:null;
}