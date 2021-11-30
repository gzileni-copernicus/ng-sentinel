import { Injectable } from '@angular/core';
import { ConfigService } from '../../app/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import _ from 'lodash';

export interface ParametersAgri {
  coordinates: string,
  start: string,
  end: string,
  lastinterval: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SentinelService {

  constructor(private configSvc: ConfigService,
              private http: HttpClient) {}
  /**
   *
   * @param params
   */
  public agri(params: ParametersAgri): Observable<Array<any>> {
      const url: string = `${this.configSvc.search.prefix}/agri?coordinates=${params.coordinates}&start=${params.start}&end=${params.end}&lastinterval=${params.lastinterval}`;
      return this.http.get<Array<any>>(url);
  }

  /**
   *
   * @param params
   * @returns
   */
  public data(params: any): Observable<any> {
    let url: string = `${this.configSvc.data.prefix}?id=${params.id}&node=${params.node}&product=${params.product}&format=geojson`;
    return this.http.get<any>(url);
  }

  /**
   *
   * @param id
   * @returns
   */
  public preview(id: any): Observable<any> {
    let url: string = `${this.configSvc.data.prefix}/preview?id=${id}`;
    return this.http.get<any>(url);
  }

  /**
   *
   * @param parameters
   * @param product
   * @param preview
   * @returns
   */
  public nodes(parameters: any, product?: string, preview?: boolean): Observable<Array<any>> {

    /**
     *
      "id": "3579f862-db71-49a7-ae28-6e62a05b654a",
      "filename": "S3A_SY_2_VG1____20211112T000000_20211112T235959_20211113T204317_EUROPE____________LN2_O_ST_002.SEN3",
    */

    let url: string = `${this.configSvc.data.prefix}/nodes?id=${parameters.id}&file=${parameters.file}`;

    if (product != null && product != undefined) {
      url += `&node=${product}`
    }

    if (preview != null && preview != undefined && preview == true) {
      url += `&preview=true`
    }

    return this.http.get<any>(url);
  }

}
