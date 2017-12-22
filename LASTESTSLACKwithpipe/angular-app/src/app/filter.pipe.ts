import { Pipe, PipeTransform } from '@angular/core';
import { User } from "./user";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<User>, searchStr: string): Array<User> {
    return value.filter(user => {
      return user.firstName.toLowerCase().includes(searchStr.toLowerCase()) || user.lastName.toLowerCase().includes(searchStr.toLowerCase()) || user.username.toLowerCase().includes(searchStr.toLowerCase())
    })
  }

}