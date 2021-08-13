function  ValidarFormulario() {
    //alert("ValidarFomulario");
    var vResultado = false;
    var vName = document.getElementById("name").value;
    if(vName.length>=7 && vName.length<=100){
        vResultado = true; 
    } 
    else { 
        vResultado = false; //alert("Preenchimento Incorreto")
    }
    var vResultFinal = document.getElementById("resultP");
    vResultFinal.innerHTML = vResultado;
}
function GerarJSON() {
    //alert("GerarJSON");
}
