import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/user/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;//importante
  showUserDetails: boolean = false;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = UsersList;
    }, 2000);
  }

  onFilter(filterOptions: IFilterOptions ) {
    console.log(filterOptions);

    this.usersListFiltered = this.filterUserList(filterOptions, this.usersList);
  }

  filterUserList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = usersList;
    
    filteredList = this.filterUserListByName(filterOptions.name, usersList);

    return filteredList;
  }

  filterUserListByName(nome: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = nome === undefined;

    if(NAME_NOT_TYPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(nome.toLowerCase()));

    return filteredList;
  }

}
