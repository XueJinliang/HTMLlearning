

$(document).ready(function(){
    $(".wenben p").click(function(){
        $(".wenben p").addClass("animated hinge");

    })

});

function mOver(obj){
    obj.innerHTML="爱你<br/>哟";
    tanchuang();
}

function tanchuang(){
    var x;
    var r=confirm("爱不爱我？");
    if(r==true){
        alert("我也爱你哟");
    }
    else{
        tanchuang();
    }
}


