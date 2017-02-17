import { Component } from '@angular/core';
@Component({
     selector: 'headercomponent',
	template: `

          <!--Header & Navigation-->
                <nav  class="row nav-extended">
                    <div class="container">
                        <!--Brand Logo & Phone - Mail  -->
                            <div class="col s12 l12 valign-wrapper ">
                                <div class="col s12 l6">
                                    <img class="left"  src="images/logosupersports.png" alt="">
                                </div>
                                <br>
                                <div class="col s12  l6 ">
                                    <ul class="right">
                                        <li>
                                            <a href=""> &#128379; +45 22660077</a>
                                        </li>
                                        <li>
                                            <a href="">&#9993; LOREM@IPSUM.COM</a> 
                                        </li>
                                        <li><a href="">$99.54 CHECKOUT</a> </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        <!--Spaceline-->
                            <div class="col s12 l12 spaceline"></div>
                            
                        <!--Menu & Search-->
                        <div id="menu-padding-off" class="col s12  l12 ">
                            <ul>
                                <li><a [routerLink]="['home']">HOME</a></li>
                                <li><a href="#news">MEN</a></li>
                                <li><a href="#contact">WOMEN</a></li>
                                <li><a href="#about">KIDS</a></li>
                                <li><a href="#about">SALE</a></li>
                                <li><a href="#about">ABOUT&nbsp;US</a></li>
                                <li><a [routerLink]="['contact']">SUPPORT</a></li>
                            </ul>
                       
                            <input id="header_search" class="right" type="search" name="" value="SEARCH">
                        
                        </div>
                  
                        
                       
                </div>  
                      
                </nav>
	
	`
})

export class HeaderComponent{

	}
