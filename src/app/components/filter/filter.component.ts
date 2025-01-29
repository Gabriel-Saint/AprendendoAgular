import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/user/filter-options.interface';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  standalone: false,
  
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {


  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,

  }

  statusList = [
    { value: true, viewValue: 'Ativo' },
    { value: false, viewValue: 'Inativo' }
  ]

  @Output('onFilter') OnfilterEmitt = new EventEmitter<IFilterOptions>();

  onClickButton() {
    this.OnfilterEmitt.emit(this.filterOptions);
  } 

}
