//Autor: Eduardo Augusto Balsamão Campos
//

function getCheapestHotel (input) { //DO NOT change the function's name.

    let dias_da_semana = 0;
    let final_de_semana = 0;
    var dias = []
    var Hotels = [
        {
            name: 'Lakewood',
            stars: 3,
            total: 0
        },
        {
            name: 'Bridgewood',
            stars: 4,
            total: 0,
        },
        {
            name: 'Ridgewood',
            stars: 5,
            total: 0
        }
    ]

    //Separa a primeira informação
    let frase_array = input.split(': ')

    //Separa a segunda informação
    let dias_array = frase_array[1].split(',')
    let regExp = /\(([^)]+)\)/;
    var dias = [];

    //Cria a array com os dias
    for(var i = 0; i < dias_array.length; i++) {
        let aux = regExp.exec(dias_array[i])
        dias.push(aux[1])
    }

    //Conta quantos dos dias são dias normais e quantos são dias da semana
    for(var i = 0; i < dias.length; i++){
        if(dias[i] === "sun"){
            final_de_semana = final_de_semana+1;
        }else if(dias[i] === "sat"){
            final_de_semana = final_de_semana+1;
        }
        else{
            dias_da_semana = dias_da_semana+1
        }
    }
    //Compara qual o nivel do hotel
    if(frase_array[0] == 'Regular'){
        Hotels[0].total = (110 * dias_da_semana) + (90 * final_de_semana)
        Hotels[1].total = (160 * dias_da_semana) + (60 * final_de_semana)
        Hotels[2].total = (220 * dias_da_semana) + (150 * final_de_semana)
    }
    else{
        Hotels[0].total = (80 * dias_da_semana) + (80 * final_de_semana)
        Hotels[1].total = (110 * dias_da_semana) + (50 * final_de_semana)
        Hotels[2].total = (100 * dias_da_semana) + (40 * final_de_semana)
    }
   
    //Pega o menor valor
    let menor = Hotels[0];
    if(Hotels[0].total >= Hotels[1].total){
        if(Hotels[0].total == Hotels[1].total){
            if(Hotels[0].stars > Hotels[1].stars){
                menor = Hotels[0]
            }
        }
        menor = Hotels[1]
    }
    //console.log(menor)
    if(menor.total >= Hotels[2].total){
        if(menor.total == Hotels[2].total){
            if(menor.stars > Hotels[2].stars){
                //menor = menor
            }
        }
        menor = Hotels[2]
    }
    //console.log(Hotels[2])
    
    return menor.name;


}

exports.getCheapestHotel = getCheapestHotel
