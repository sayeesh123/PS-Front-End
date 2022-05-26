import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment"

@Injectable({ providedIn: "root" })
export class apiString {
    baseUrl: any = environment.baseUrl;

    LoginPage = {
        login : 'http://127.0.0.1:5000/ps_login'
    }
    
}
