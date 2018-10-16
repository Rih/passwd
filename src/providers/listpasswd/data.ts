import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PasswdDataProvider{
	services:any = [
		{id:'1', title:'GMAIL', password: 'ASDjcuurpeu'},
  		{id:'2', title:'FACEBOOK', password: 'fbhrth'},
  		{id:'3', title:'G+', password: 'Arbrt56bhrpeu'},
  		{id:'3', title:'XV+', password: 'jytjyjhb'},
	];
	constructor(){
 		console.log('Hello DataProvider Provider');
	}
}