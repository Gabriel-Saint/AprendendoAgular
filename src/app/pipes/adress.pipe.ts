import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'adress',
  standalone: false
})
export class AdressPipe implements PipeTransform {

  transform(adress : IAddress): string {

    const INVALID_ADDRESS = 
    !adress || !adress.rua || 
    adress.numero === null || 
    adress.numero === undefined 
    || !adress.cidade 
    || !adress.estado ;

    if(INVALID_ADDRESS) {
      return 'Endereço inválido ou indisponível';
    }else {
      return `${adress.rua}, ${adress.numero} - ${adress.cidade} - ${adress.estado}`;
    }
  }

}
