//Evita que desaparezca completamente el NAV
$(window).resize(function(){
    if($(window).width() <= 768){
        $("#menuPrincipal").hide();
        if( $(".toogle").hasClass("menuActivo") ) 
        {
            $(".toogle").removeClass("menuActivo");
        }
        
        if( !($(".toogle").hasClass("menuDesactivo")) ) 
        {
            $(".toogle").addClass("menuDesactivo");
        }
        
    } else {
        $("#menuPrincipal").show();
        if( $(".toogle").hasClass("menuDesactivo") ) 
        {
            $(".toogle").removeClass("menuDesactivo");
        }
        
        if( !($(".toogle").hasClass("menuActivo")) ) 
        {
            $(".toogle").addClass("menuActivo");
        }
    }
})

//ACTIVA Y DESACTIVA MENU
{
    $(".toogle").click(function(){
        if( $(".toogle").hasClass("menuActivo") ){
            $(".toogle").removeClass("menuActivo");
            $("#menuPrincipal").slideUp("slow");
            $(".toogle").addClass("menuDesactivo");
        } else {
            $(".toogle").removeClass("menuDesactivo");
            $("#menuPrincipal").slideDown("slow");
            $(".toogle").addClass("menuActivo");
        }
    })
}
    