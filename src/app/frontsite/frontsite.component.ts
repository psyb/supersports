import { Component, OnInit } from '@angular/core';
import { ISHOE } from '../product/shoes';
import { ShoeDataService } from '../shared/data-service';
@Component({
    selector: 'frontsitecomponent',
	template: `
          
            <!--Image Slider-->    
                <section class="row">
                    <div class="image-slider">
                        <img class="img-responsive" src="../Images/banner.png">
                    </div>
                </section>
            <!--Products-->
                <section class=" center">
                
                    <div class="row col s12 l12 container">
                        <div class="col s12 l4">
                            <img src="Images/shoes-football.png" alt="">
                            <h5>FOOTBALL SHOE</h5>
                            <h6> consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>
                        
                        </div>
                        <div class="col s12 l4">
                            <img src="Images/shoes-football.png" alt="">
                            <h5>FOOTBALL SHOE</h5>
                            <h6> consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>
                        
                        </div>
                        <div class="col s12 l4">
                            <img src="Images/shoes-football.png" alt="">
                            <h5>FOOTBALL SHOE</h5>
                            <h6> consectetur adipisicng, vivamus congue nulla leo, quis imperdiet magna</h6>
                        
                        </div>
                        
                    </div>
                
                    
                    </section>
            <!--Popular Products-->
                <section class="popular-products container  ">
                    
                    <h4 class="center">Shoes</h4>
                
                    <div class="row">
                       
                         <div class="col s12 l3" *ngFor="let shoe of shoes">
                            <div class="popular-products-border" >
                               <a [routerLink]="['/shoe', shoe.id]"> <img [src]="'../Images/' + shoe.image[0]" alt=""></a> 
                                <div style="border: 1px solid lightgray;">
                                <h6>{{shoe.name}}</h6>
                                <b>
                                    {{shoe.type}}
                                </b>
                                <p>
                                    {{shoe.description}}
                                </p>
                                </div>
                                <a class="btn">button</a>
                            </div>
                        </div>
                        </div>
            
                    
                    
                    
                
                    </section>  
            
 
	`
})

export class FrontsiteComponent implements OnInit{
   shoes:ISHOE[];


   constructor(private ShoeDataService: ShoeDataService){

   }
    ngOnInit(){
        this.shoes = this.ShoeDataService.getShoeData();
    }
    

	}
