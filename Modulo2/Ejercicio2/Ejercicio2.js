
    function Generar() 
    {
        
        const a = document.getElementById("VariableA").value;
        const b = document.getElementById("VariableB").value;
        const c = document.getElementById("VariableC").value;
        const d = document.getElementById("VariableD").value;
        
        

        
        if (a === b & a === c && c === d)
            {
                ResltadosMenor.innerText = "Todos los valores son iguales, no se pueden repetir"
                
               
            }
        else 
            {
     
                let myArray = [a,b,c,d]
                var Minimo = Math.min(...myArray)
                var Maximo = Math.max(...myArray)
                ResltadosMenor.innerText = 'El número menor es '+ Minimo
                ResltadosMayor.innerText = 'El número mayor es '+ Maximo

            }


    }
