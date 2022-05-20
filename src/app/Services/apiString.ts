import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment"

@Injectable({ providedIn: "root" })
export class apiString {
    baseUrl: any = environment.baseUrl;

    LoginPage = {
        login : 'http//login'
    }
    
}
