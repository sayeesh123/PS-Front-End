import { Injectable, Injector } from "@angular/core"
import { environment } from "src/environments/environment"
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class Services { 
  baseUrl : string = environment.baseUrl;
  token : any;
  constructor(
    private http:HttpClient,
    private injector: Injector,
    private _snackBar: MatSnackBar){
     let localData = localStorage.getItem('user-details')
     if(localData){
       this.token = JSON.parse(localData).token
     }
  }

  get_params(url:any,param:any){
    return this.http.get(url,{params:param})
  }
  get_header(url:any,header:any){
    return this.http.get(url,{headers:header})
  }
  get_request(url:any){
    return this.http.get(url)
  }

  post_request(url:any,obj:any){
    return this.http.post(url,obj)
  }

  popupMessage(statusType: any, message: any) {
        if (statusType === 'success') {
            this._snackBar.open(message, "", {
                duration: 4000,
                panelClass: ['success'],
                horizontalPosition: 'end',
                verticalPosition: 'bottom',
            });
        } else {
            this._snackBar.open(message, "", {
                duration: 4000,
                panelClass: ['error'],
                horizontalPosition: 'end',
                verticalPosition: 'bottom',
            });
        }

  }
  
}
