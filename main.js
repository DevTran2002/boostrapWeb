
/////////scroll navbar//////////////
$(function(){
        $(window).scroll(function(event){
                var locationBody = $(this).scrollTop();

                if(locationBody >= 30){
                        $(".navbar-header").css("position", "fixed");
                        $(".navbar").css({
                                "background-color": "rgba(38,50,70,0.9) ",
                                "padding": "0"
                                   
                        });
                }
                else{
                        $(".navbar-header").css("position", "none");
                        $(".navbar").css({
                                "background-color": "transparent ",
                                "padding": "10px 0px"
                                   
                        });
                }

                if(locationBody >= 960 ){
                        $(".scroll-start").removeClass("d-none");
                }
                else{
                        $(".scroll-start").addClass("d-none");

                }
        })
});

$(document).ready(function(){


        /////////////////////show hide element image/////////////

        $(".btn-ShowAll").click(function(){
                $(".col-img-1").fadeIn("slow");
                $(".col-img-2").fadeIn("slow");
                $(".col-img-3").fadeIn("slow");
                $(".col-img-4").fadeIn("slow");
                $(".col-img-5").fadeIn("slow");
                $(".col-img-6").fadeIn("slow");
        });

        $(".btn-Art").click(function(){
                $(".col-img-1").fadeIn("slow");
                $(".col-img-2").hide();
                $(".col-img-3").hide();
                $(".col-img-4").fadeIn("slow");
                $(".col-img-5").hide();
                $(".col-img-6").hide();
        })
        $(".btn-Science").click(function(){
                $(".col-img-1").hide();
                $(".col-img-2").fadeIn("slow");
                $(".col-img-3").hide();
                $(".col-img-4").hide();
                $(".col-img-5").fadeIn("slow");
                $(".col-img-6").hide();
        })
        $(".btn-Branding").click(function(){
                $(".col-img-1").hide();
                $(".col-img-2").hide();
                $(".col-img-3").fadeIn("slow");
                $(".col-img-4").hide();
                $(".col-img-5").hide();
                $(".col-img-6").fadeIn("slow");
        })


////////////////////////////////


})


// render API data to HMTl

var API = 'http://localhost:3000/posts';


fetch(API)
        .then(function(respons){
                return respons.json();
        })
        .then(function(posts){
                var htmls = posts.map(function(data,index){
                        
                        //document.querySelector('.new-block .col:nth-child(1) .card-body').insertAdjacentHTML('afterbegin', html);
                        return `
                        <div class="col">
                              <div class="card " style="--bs-card-bg: ">
                                    <a href="#"><img src="${data.img}" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                       <h5 class="card-title mt-4 fw-bolder fs-4">${data.title}</h5> 
                                      <p class="card-text py-4">${data.body}</p>
                                      
                                    </div>
                                  </div>
                        </div>
                        `
                        
                });
                document.querySelector(".new-block").insertAdjacentHTML('afterbegin', htmls.join(''));

        });
