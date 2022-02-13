'use strict'
// eventlistener para cargar nuestro arichivos
window.addEventListener('load', ()=>{

    let Tabla = document.querySelector("#Tabla");
    let Tabla1 = document.querySelector("#Tabla1");
    let Tabla2 = document.querySelector("#Tabla2");
    let Tabla3 = document.querySelector("#Tabla3");
    let Tabla4 = document.querySelector("#Tabla4");
    let Tabla5 = document.querySelector("#Tabla5");
    let Tabla6 = document.querySelector("#Tabla6");
    let Tabla7 = document.querySelector("#Tabla7");
    let Tabla8 = document.querySelector("#Tabla8");
    let Tabla9 = document.querySelector("#Tabla9");

    let Etiqueta_FileData = function (){
        let list = [];
        let contentlist = ["N","SIGLA","NOMBRE DE LA ASIGNATURA", "PRE REQUISITOS","AP"];
        let TR = document.createElement("tr");
        TR.className = "fila-data"
        let text

        for(let i = 0 ; i < 5 ; i++){
            list[i] =  document.createElement("td");
            if( i === 0 || i === 4 ){
                list[i].className= "small";
                text = document.createTextNode(contentlist[i]);
                list[i].appendChild(text);
            }else if(i === 1 || i === 3){
                list[i].className="medium";
                text = document.createTextNode(contentlist[i]);
                list[i].appendChild(text);
            }else if(i == 2){
                list[i].className="big";
                text = document.createTextNode(contentlist[i]);
                list[i].appendChild(text);
            }
        }

        
        list.forEach(element => {
            TR.appendChild(element);
        });

        return TR;
    }


// FUNCION PARA MARCAR LAS MATERIAS APROBADAS
const approved = (numberSubject, etiqueta, subjects)=>{
    if(numberSubject < subjects){
        etiqueta.checked="checked";
    }
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
        input.className = "checkboxes";
        // se pone como parametro 41 porque ya aprobe todas las de septimo semestre
        approved(index, input, 41);


        
        //Controla la Creacion de Td
        for(let i=0; i < 5; i++){
            list[i]= document.createElement("td");
        }

        $.get('./Js/data.json', response =>{
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
                            text = document.createTextNode(response[index].REQUISITOS);
                            list[i].appendChild(text);
                        }else if(i == 4){
                            list[i].appendChild(input);
                        }
                    }   
                }
            
            });

        list.forEach(element=> {
            TR.appendChild(element);
        });
        
        return TR;
    }
    
    //Funcion para crear la cantidad de filas para una tabla dinamicamente
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
        Tabla3.appendChild(Etiqueta_FileData());
        DataForm(Tabla3, 6 , 18);
        Tabla4.appendChild(Etiqueta_FileData());
        DataForm(Tabla4, 6 , 24);
        Tabla5.appendChild(Etiqueta_FileData());
        DataForm(Tabla5, 6 , 30);
        Tabla6.appendChild(Etiqueta_FileData());
        DataForm(Tabla6, 6 , 36);
        Tabla7.appendChild(Etiqueta_FileData());
        DataForm(Tabla7, 7 , 42);
        Tabla8.appendChild(Etiqueta_FileData());
        DataForm(Tabla8, 3 , 49);
        Tabla9.appendChild(Etiqueta_FileData());
        DataForm(Tabla9, 1 , 52);
    }
    
    Main();
    
    
});