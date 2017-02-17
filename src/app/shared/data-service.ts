import { Injectable } from '@angular/core';
import { PRODUCTDATA } from './data';
import { ISHOE } from '../product/shoes';
@Injectable()

export class ShoeDataService{
    
    
    getShoeData() : ISHOE[] {
        return PRODUCTDATA;
    }

    getShoeDataById(productid: number){
        return PRODUCTDATA.find(r => r.id == productid);
    }

}