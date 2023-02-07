import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  postReq(data:any){
    return this._http.post("http://localhost:3000/posts", data).pipe(map((res:any)=>res))
  }
  getReq(){
    return this._http.get("http://localhost:3000/posts").pipe(map((res:any)=>res))
  }
  updateReq(data:any,id:any){
    return this._http.put("http://localhost:3000/posts"+"/"+id, data).pipe(map((res:any)=>res))
  }
  deleteReq(id:number){
    return this._http.delete("http://localhost:3000/posts"+"/"+id).pipe(map((res:any)=>res))
  }
}
