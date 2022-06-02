import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }

  //to generate token
public generateToken(request:any){
  return this.http.post("http://localhost:8080/api/jwt/auth",request,{responseType:'text' as 'json'});
}

//without righting jwt token to any endpoint
public welcome(token:any){
  let tokenStr='Bearer ' + token;
  const headers=new HttpHeaders().set("Authorization",tokenStr);
  return this.http.get("http://localhost:8080/api/jwt/reg",{headers,responseType:'text' as 'json'});
}
}
