import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarPorPrioridad'
})
export class FiltrarPorPrioridadPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados=[];
    //console.log(value.length);
    for(let i=0;i<value.length;i++){
      if(value[i].prioridad==arg)
        resultados.push(value[i]);
    }
    //console.log(value,arg);
    return resultados;
  }

}
