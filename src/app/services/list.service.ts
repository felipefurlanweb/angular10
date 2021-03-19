import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class ListService{
	//url backend api json
	server: string = 'http://localhost/4return/app/api/form.php';
	// server: string = 'https://app.physiciancare.net/app/api/form.php';

	constructor( 
  	    public http: HttpClient
  	) { }	
    
    login(body){
        let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
        let options = {headers: headers}
        return this.http.post(this.server, JSON.stringify(body), options)        
        .map(res => res);
    }

    getAllStates(){
        let headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
        let options = {headers: headers}
        return this.http.get(`${this.server}?id=getAllStates`)
        .map(res => res);
    }


}