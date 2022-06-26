function PrecioFinal(){
    const Nombre = document.getElementById ("name").value;
    const CantidadMaterias= document.getElementById ("cantidadMaterias").value;
    const ValorM= document.getElementById ("valorMaterias").value;
    const costosfijos =28000;
    const descuento =0.2;
    

    const ValorTtlDesc=(CantidadMaterias * ValorM)*(1-descuento);

    const ValorFinal= ValorTtlDesc + costosfijos;
    const Respuesta=document.getElementById("Respuesta")
    Respuesta.innerText = Nombre + " El precio final de su matrícula es: $" + ValorFinal
}