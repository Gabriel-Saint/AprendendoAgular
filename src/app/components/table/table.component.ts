import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-table',
  standalone: false,
  
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input({ required:true }) uList: IUser[] = [];

  displayedColumns: string[] = ['name', 'date', 'status'];

  @Output('userSelected') userSelectedEmitt: EventEmitter<IUser> = new EventEmitter<IUser>();  

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
  
}
