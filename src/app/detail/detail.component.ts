import { Component } from '@angular/core';


@Component({
    selector: 'detailcomponent',
	template: `
          
      <!--Main Content - Detail Page-->
        <main id="main_detail_page"  class="container">
            <div class="row">
                <div class="col s12 l6 center">
                    <div   class="detail_bigshoe_border">
                        <img class=""   src="Images/new-big-shoe-detail.png" alt="">
                    </div>
                </div>
            
                <div class="col s12 l6">
                    <h5 class="">GEL-FUJITRABUCO 5 G-TX</h5>
                    <div class="col s12 l12">
                        <img class="left" src="Images/asics-brand logo.png" alt="">
                        <h4 class=" right">Kr 947.90</h4>
                    </div>
                    <div class="col s12 l12">
                        <h6 class="right">Kr 1115.24</h6>
                    </div>
                    <div class="col s12 l12">
                        <h6 class="right">You save 15%</h6>
                    </div>
                    <div class="col s12 l12">
                        <div class="col s12 l7">
                            <label><h6>Size</h6></label>
                        <select class="">
                            <option value="EU 45 BLACK">EU 45 BLACK</option>
                            <option value="EU 47 BLACK">EU 46 BLACK</option>
                            <option value="EU 50 BLACK">EU 48 BLACK</option>
                        </select>
                        </div>
                        <div  class="col s12 l5 right">
                            <label class=""><h6>Amount</h6></label>
                        <input class=""  type="text" name="" value="1">

                        <button id="Detail-Buy-Button" class="right" type="button">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
           
            
            <div class="col l12 detail_page_thumbs_image">
                <div class="row ">
                <div  class=" col s12 l2 detail_page_thumbs_border  valign-wrapper   "> <img  src="Images/shoe3.png" alt=""></div>
                <div  class="col s12 l2 detail_page_thumbs_border valign-wrapper  "> <img  src="Images/shoe-detail.png" alt=""></div>
                <div  class="col s12 l2 detail_page_thumbs_border valign-wrapper  "><img src="Images/shoe2.png" alt=""></div>
               </div>
           </div>

            <div class="col 12">
                <div class="row">
                  <ul class="tabs group">
                    <li class="active"><a href="#one">Description</a></li> 
                    <li><a href="#two">Shipping</a></li> 
                    <li><a href="#three">Sizing</a></li>
                 </ul>
                <div id="content">
                    <p>
                        I modsætning til hvad mange tror, er Lorem Ipsum ikke bare tilfældig tekst. Det stammer fra et stykke litteratur på latin fra år 45 f.kr., hvilket gør teksten over 2000 år gammel. Richard McClintock, professor i latin fra Hampden-Sydney universitet i Virginia, undersøgte et af de mindst kendte ord "consectetur" fra en del af Lorem Ipsum, og fandt frem til dets oprindelse ved at studere brugen gennem klassisk litteratur. Lorem Ipsum stammer fra afsnittene 1.10.32 og 1.10.33 fra "de Finibus Bonorum et Malorum" (Det gode og ondes ekstremer), som er skrevet af Cicero i år 45 f.kr. Bogen, som var meget populær i renæssancen, er en afhandling om etik. Den første linie af Lorem Ipsum "Lorem ipsum dolor sit amet..." kommer fra en linje i afsnit 1.10.32I modsætning til hvad mange tror, er Lorem Ipsum ikke bare tilfældig tekst. Det stammer fra et stykke litteratur på latin fra år 45 f.kr., hvilket gør teksten over 2000 år gammel. Richard McClintock, professor i latin fra Hampden-Sydney universitet i Virginia, undersøgte et af de mindst kendte ord "consectetur" fra en del af Lorem Ipsum, og fandt frem til dets oprindelse ved at studere brugen gennem klassisk litteratur. Lorem Ipsum stammer fra afsnittene 1.10.32 og 1.10.33 fra "de Finibus Bonorum et Malorum" (Det gode og ondes ekstremer), som er skrevet af Cicero i år 45 f.kr. Bogen, som var meget populær i renæssancen, er en afhandling om etik. Den første linie af Lorem Ipsum "Lorem ipsum dolor sit amet..." kommer fra en linje i afsnit 1.10.32
                    </p>
                </div>
            </div>
        </div>
    </main>
    
	`
})

export class DetailComponent {
  
    

	}
