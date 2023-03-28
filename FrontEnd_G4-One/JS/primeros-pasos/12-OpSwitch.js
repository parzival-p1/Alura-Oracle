const cdDestino = "Bogota";
const cdsDisponibles = [
    "Bogota",
    "Lima", 
    "Stgo", 
    "Montevideo"];

    let valorPasaje = 0;
    console.log(`Verificando pasajes para... ${cdDestino}`);
    
    if (cdsDisponibles.indexOf(cdDestino) > -1)
    {
        switch(cdDestino)
        {
            case "Bogota" : valorPasaje = 500; break;
            case "Lima" : valorPasaje = 400; break;
            case "Stgo" : valorPasaje = 380; break;
            case "Mtvideo" : valorPasaje = 200; break;
            default: console.log("No hay pasaje para la ciudad indicada"); 
            break;
        }
    } 
    if (valorPasaje > 0)
        console.log(`El valor del pasaje es: ${valorPaseje}`);