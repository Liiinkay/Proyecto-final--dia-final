import { Pipe, PipeTransform } from '@angular/core';
import { Tickets} from '../interfaces/tickets';

@Pipe({
  name: 'filtrarPorEstado'
})
export class FiltrarPorEstadoPipe implements PipeTransform {

  transform(value: Array<Tickets>, arg: any): any {
    const resultados=[];
    for(let i=0;i<value.length;i++){
      if(value[i].estado==arg){
        resultados.push(value[i]);
      }
    }
    return resultados;
  }

}
