import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PasswdDataProvider } from "../../providers/listpasswd/data";
//import { Storage } from '@ionic/storage';
//@IonicPage()
@Component({
  selector: 'page-list-passwd',
  templateUrl: 'listpasswd.html'
})
export class ListPasswdPage {
	items: any;
	btnName: any = 'Editar';
	flag: any = false;
	
	constructor(public navCtrl: NavController
		,public data: PasswdDataProvider
		) {
		
  		this.doRefresh(0);  	

  	};
	ionViewDidLoad(){
		this.items = this.data.services;
		/*this.items = [
		{id:'1', title:'GMAIL'},
  		{id:'2', title:'FACEBOOK'},
  		{id:'3', title:'G+'},
	];*/
			

	};	
	itemClicked(item):void {
		console.log(item);
		this.navCtrl.push('HomePage', item);
	};

	doRefresh(refresher){
	/*this.storage.get('myStorage').then((data) => {
		this.items = data;
		if(refresher != 0)
			refresher.complete();
	});*/
	};
}
