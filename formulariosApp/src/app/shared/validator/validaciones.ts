/* Esto es para validaciones sencillas que no requieran servicios ni mayor complejidad */

import { FormControl } from "@angular/forms";

export const expreRegular : string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailRegular : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const validadorExterno = (campo: FormControl) : object => {
    const valor : string = campo.value?.trim().toLowerCase();
    
    if (valor === "juan"){
      return {
        validadorExt : true
      }
    };

    return null;
}