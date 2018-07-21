import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { promise } from '../../../node_modules/protractor';
import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:Http) {  }

  postDate(credentials,type){
      return new Promise((resolve,reject)=>{
        let headers = new Headers();
        this
          .http
          .post(apiUrl + type,JSON.stringify(credentials),{headers:headers})
          .subscribe(res => {
            resolve(res.json());
          },(err)=>{ reject(err)}
        ));

      })};
}
