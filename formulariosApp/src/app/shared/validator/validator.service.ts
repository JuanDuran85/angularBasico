import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public expreRegular : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailRegular : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  validadorExterno (campo: FormControl) : ValidationErrors | null {
    const valor : string = campo.value?.trim().toLowerCase();
    
    if (valor === "juan"){
      return {
        validadorExt : true
      }
    };

    return null;
  }

  constructor() { }

  sonIguales(campo1 : string, campo2 : string) : Function {
    return (formGroup : AbstractControl): ValidationErrors | null => {
      const pass1 : string = formGroup.get(campo1)?.value;
      const pass2 : string = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2).setErrors({
          noIguales: true
        })
        return {
          noIguales: true
        }
      }

      //se debe tener cuidado por si existe otros errores en ese campo
      formGroup.get(campo2).setErrors(null);
      return null;
    }
  }
}
