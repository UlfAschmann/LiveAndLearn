$(document).ready(function(){

    $('#carruselPromociones .activeCarrusel').owlCarousel({
        loop: true,
        margin:10,
        nav:true,
        responsive: {
            0 : { items: 1, nav:true },
          500 : { items: 2, nav:true },    
          800 : { items: 4, nav:true },    
         1500 : { items: 6, nav:true }
        }
    });
    
    
    $('#entradasBlog .activeCarrusel').owlCarousel({
        
        loop:true,
        margin:10,
        nav:true,
        responsive: {
            0 : { items: 1, nav:true },
          768 : { items: 4, nav:true },    
         1500 : { items: 6, nav:true }
        }
    });
    
    $('#programas .activeCarrusel').owlCarousel({
        
        loop:true,
        margin:10,
        nav:true,
        responsive: {
            0 : { items: 1, nav:true },
          768 : { items: 4, nav:true },    
         1500 : { items: 6, nav:true }
        }
    });
    
    
});