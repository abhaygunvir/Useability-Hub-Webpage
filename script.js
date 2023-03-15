let el=document.getElementById('side_icon');
el.addEventListener('click',()=>{
    
   var em = document.getElementById("nav_bar");
var  temp = window.getComputedStyle(em).getPropertyValue("opacity");
    
    console.log("temp is ",temp);
    if(temp==0){
        em.style.opacity=1;
        el.innerHTML='<ion-icon name="close-outline"></ion-icon>';
    }
    else{
        em.style.opacity=0;
        el.innerHTML='<ion-icon name="list-outline"></ion-icon>';
    }
})