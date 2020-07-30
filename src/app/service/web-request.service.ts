import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
 readonly ROOT_URL;
  constructor(private httpclient: HttpClient) { 
    this.ROOT_URL="http://localhost:3000";
  }

  get(uri: string){
    return this.httpclient.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string,payload: object){
    return this.httpclient.post(`${this.ROOT_URL}/${uri}`,payload);
  }
  patch(uri: string,payload: object){
    return this.httpclient.patch(`${this.ROOT_URL}/${uri}`,payload);
  }
  delete(uri: string){
    return this.httpclient.delete(`${this.ROOT_URL}/${uri}`);
  }
  }

