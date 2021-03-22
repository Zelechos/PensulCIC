'use strict'

window.addEventListener('load', ()=>{

    let Tabla = document.querySelector("#Tabla");
    let Tabla1 = document.querySelector("#Tabla1");
    let Tabla2 = document.querySelector("#Tabla2");

    let Etiqueta_FileData = function (){
        let list = [];
        let contentlist = ["N","SIGLA","NOMBRE DE LA ASIGNATURA", "H.T", "H.P", "H.L", "H.I","H.E.I", "T.H", "PRE REQUISITOS","AP"];
        let TR = document.createElement("tr");
        TR.className = "fila-data"
        let text
        let s = "small";

        for(let i = 0 ; i < 11 ; i++){
            list[i] =  document.createElement("td");
            if(i == 0 ){
                list[i].className= s;
                text = document.createTextNode(contentlist[i]);
                list[i].appendChild(text);
            }else if(i == 1 || i == 9){
                list[i].className="medium";
                text = document.createTextNode(contentlist[i]);
                list[i].appendChild(text);
            }else if(i == 2){
                list[i].className="big";
                text = document.createTextNode(contentlist[i]);
                list[i].appendChild(text);
            }else{
                list[i].className= s;
                text = document.createTextNode(contentlist[i]);
                list[i].appendChild(text);
            }
        }

        
        list.forEach(element => {
            TR.appendChild(element);
        });
        console.log(TR);        

        return TR;
    }


//TRAER DATO JSON PARA INTRODUCIRLOS EN LOS TD S            
    let Data = function (num){
        let list = [], text;
        // AQUI MISMO PUEDO CREAR LOS ID DE LAS ETIQUETAS TR
        let TR = document.createElement("tr");
        TR.className = "data"
        TR.id = num;
        let index = num-1;
        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = " ";
        input.id = " ";
        //let URLS = [,'./Js/2do.SEMESTRE.json'];
        for(let i=0;i<11;i++){
            list[i]= document.createElement("td");
        }

        $.get('./Js/Data.json', response =>{
            //Dado que el valor de el json es un array empieza del indice 0 por eso index = 0
                if(Number(TR.id) == response[index].N){
                        for(let i = 0 ; i<list.length ; i++){

                        if(i==0){
                            text = document.createTextNode(response[index].N);
                            list[i].appendChild(text);
                        }else if(i == 1){
                            text = document.createTextNode(response[index].SIGLA);
                            list[i].appendChild(text);
                        }else if(i == 2){
                            text = document.createTextNode(response[index].ASIGNATURA);
                            list[i].appendChild(text);
                        }else if(i == 3){
                            text = document.createTextNode(response[index].HT);
                            list[i].appendChild(text);
                        }else if(i == 4){
                            text = document.createTextNode(response[index].HP);
                            list[i].appendChild(text);
                        }else if(i == 5){
                            text = document.createTextNode(response[index].HL);
                            list[i].appendChild(text);
                        }else if(i == 6){
                            text = document.createTextNode(response[index].HI);
                            list[i].appendChild(text);
                        }else if(i == 7){
                            text = document.createTextNode(response[index].HEI);
                            list[i].appendChild(text);
                        }else if(i == 8){
                            text = document.createTextNode(response[index].TH);
                            list[i].appendChild(text);
                        }else if(i == 9){
                            text = document.createTextNode(response[index].REQUISITOS);
                            list[i].appendChild(text);
                        }else if(i == 10){
                            list[i].appendChild(input);
                        }
                    }   
                }
            
            });

        list.forEach(element=> {
            TR.appendChild(element);
        });
        
        console.log(TR);
        return TR;
    }
    
    //Funcion para crear la cantidad de filas para una trabla dinamicamente
    function DataForm(Tabla, Cantidad,n){
        let init = 0 , etiqueta;
        let num = n;
        while(init < Cantidad){
            etiqueta = Data(num);
            etiqueta.id = num;
            Tabla.appendChild(etiqueta);
            init++;
            num++
        }
    }

    function Main(){
        let Tablas_List = [];
        
        Tabla.appendChild(Etiqueta_FileData());
        DataForm(Tabla, 5 , 1);
        Tabla1.appendChild(Etiqueta_FileData());
        DataForm(Tabla1, 6 , 6);
        Tabla2.appendChild(Etiqueta_FileData());
        DataForm(Tabla2, 6 , 12);
    }
    
    Main();
    
});
