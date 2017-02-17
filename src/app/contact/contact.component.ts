import { Component } from '@angular/core';

import { ShoeDataService } from '../shared/data-service';
@Component({
    selector: 'contactcomponent',
	template: `
          
       
    <!--Main Content-->
                <main class="row">
                    <div class="container">
                        <div class="col s12 l4">
                            <h4 class="contact-h2">CONTACT US</h4>
                            <form class="contact-form">
                                <label class="col s12 l3" >NAME</label>
                                <input class="col s12 l9" type="name" name="" value="">
                                <span style="height: 10px;" class="col l12"></span>

                                <label class="col s12 l3">EMAIL</label>

                                <input class="col s12 l9" type="name" name="" value="">
                                <span  class="col s12 l12"></span> 

                                <label class="col s12 l12" for="message">MESSAGE</label>
                                <span  class="col s12 l12"></span>
                                <textarea  rows="4" class="col s12 l12"></textarea>
                                <span  class="col l12"></span>
                                <button type="submit"><h6>SEND MESSAGE</h6></button>
                            </form>
                        </div>
                    </div>
                </main>
	`
})

export class ContactComponent {
  
    

	}
