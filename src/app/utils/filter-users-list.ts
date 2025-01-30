import { isWithinInterval } from "date-fns/isWithinInterval";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/user/filter-options.interface";

const filterUserListByName = (nome: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = nome === undefined;

    if (NAME_NOT_TYPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(nome.toLowerCase()));

    return filteredList;
}

const filterUserListByStatus = (status: Boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPED = status === undefined;

    if (STATUS_NOT_TYPED) {
        return usersList;
    }

    const filteredListByStatus = usersList.filter((user: IUser) => user.ativo === status);

    return filteredListByStatus;
}

const filterUserListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_TYPED = startDate === undefined || endDate === undefined;
   
    if(DATE_NOT_TYPED) {
      return usersList;
    }
    
    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), { start: startDate, end: endDate });
    const filteredListByDate = usersList.filter(checkDateInterval);

    return filteredListByDate;
}

const filterUserList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = usersList;
    
    filteredList = filterUserListByName(filterOptions.name, usersList);
    filteredList = filterUserListByStatus(filterOptions.status, filteredList);
    filteredList = filterUserListByDate(filterOptions.startDate, filterOptions.endDate,filteredList);

    return filteredList;
}

export { filterUserList };