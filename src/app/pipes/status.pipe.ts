import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status : boolean): string {
    return status ? 'Ativo' : 'Inativo';
  }

}
