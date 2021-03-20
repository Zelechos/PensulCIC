'use strict'

window.addEventListener('load', ()=>{

    let Tabla = document.querySelector("#Tabla");
    let Tabla1 = document.querySelector("#Tabla1");

    let Contenido = `
    <h3 class="subtitle">1er.SEMESTRE</h3>
            <tr class="fila-data">
                <td class="small">N</td>
                <td class="medium">SIGLA</td>
                <td class="big">NOMBRE DE LA ASIGNATURA</td>
                <td class="small">H.T</td>
                <td class="small">H.P</td>
                <td class="small">H.L</td>
                <td class="small">H.I</td>
                <td class="small">H.E.I</td>
                <td class="small">T.H</td>
                <td class="medium">PRE REQUISITOS</td>
                <td class="small">AP</td>
            </tr>

            <tr class="data">
                <td>1</td>
                <td>MAT 100</td>
                <td>ALGEBRA 1</td>
                <td>2</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>4</td>
                <td>EX INGRESO</td>
                <td><input type="checkbox" name="" id=""></td>
            </tr>
            <tr class="data">
                <td>2</td>
                <td>MAT 101</td>
                <td>CALCULO 1</td>
                <td>2</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>4</td>
                <td>EX INGRESO</td>
                <td><input type="checkbox" name="" id=""></td>
            </tr>
            <tr class="data">
                <td>3</td>
                <td>FIS 100</td>
                <td>FISICA BASICA 1</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>6</td>
                <td>EX INGRESO</td>
                <td><input type="checkbox" name="" id=""></td>
            </tr>
            <tr class="data">
                <td>4</td>
                <td>SIS 100</td>
                <td>PROGRAMACION BASICA</td>
                <td>2</td>
                <td>0</td>
                <td>4</td>
                <td>0</td>
                <td>0</td>
                <td>6</td>
                <td>EX INGRESO</td>
                <td><input type="checkbox" name="" id=""></td>
            </tr>
            <tr class="data">
                <td>5</td>
                <td>SHC 100</td>
                <td>TECNICAS DE ESTUDIO Y HABILIDADES COMUNICATIVAS</td>
                <td>2</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>4</td>
                <td>EX INGRESO</td>
                <td><input type="checkbox" name="" id=""></td>
            </tr>
    `;

    const Semestres = ["1er.SEMESTRE", "2do.SEMESTRE"];
    //Creamos la etiqueta del subtitulo h3
    
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
    let Data = function (){
        let list = [];
        let TR = document.createElement("tr");
        TR.className = "data"
        let text
        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = " ";
        input.id = " ";

        
        for(let i = 0 ; i < 11 ; i++){
            //AQUI ES DONDE DEBEMOS METER LOS DATOS JSON
            list[i] =  document.createElement("td");
            //text = document.createTextNode();
            //list[i].appendChild(text);
            if(i == 10){
                list[i].appendChild(input);
            }
        }

        
        list.forEach(element => {
            TR.appendChild(element);
        });
        console.log(TR);        

        return TR;
    }
    
    
    function Main(){
        
        Tabla.appendChild(Etiqueta_FileData());
        DataForm(Tabla, 5);
        Tabla1.appendChild(Etiqueta_FileData());
        DataForm(Tabla1, 6);
        
    }
    
    
    function DataForm(Tabla, Cantidad){
        let init = 0;
        while(init < Cantidad){
            Tabla.appendChild(Data());
            init++;
        }
    }
    
    Main();
    
});
