/**
 * Created by maheryHaja on 11/27/2015.
 */
var Kcode=[38,38,40,40,37,39,37,39,66,65];
var Kindice=0;
$(function(){

    jQuery.fn.konami=function(f){
        this.on("keydown",function(event){
            if(event.keyCode==Kcode[Kindice]){
                Kindice++;

                if(Kindice==10){
                    f();
                    Kindice=0;
                }
            }
            else
                Kindice=0;
        });
    }


});