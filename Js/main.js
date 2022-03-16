'use strict'
// ------------------- Imports -------------------
import Tables from './tables.js';
import Approved from './approved.js';

window.addEventListener('DOMContentLoaded', ()=>{

//  ------------------- Instancia para pintar las Tablas -------------------
    const table = new Tables("container");
    table.printTables();
    //  Traemos las tablas creadas!!
    const tablesList = table.getTables();

    // Cargamos los materias aprobadas!!
    const checkboxes  = new Approved();
    checkboxes.marked();

    // Subrutina para crear la cabezera de las tablas 
    const tableHeader = () => {
        let listLabels = [];
        let contentlist = ["N","SIGLA","NOMBRE DE LA ASIGNATURA", "PRE REQUISITOS","AP"];
        const TR = document.createElement("tr");
        TR.className = "fila-data";
        let text;

        // Creamos las etiquetas de la primer fila de la tabla
        for(let i = 0 ; i < 5 ; i++){
            listLabels[i] = document.createElement("td");

            if( i === 0 || i === 4 )listLabels[i].className= "small";
            if(i === 1 || i === 3)listLabels[i].className="medium";
            if(i == 2)listLabels[i].className="big";
            
            text = document.createTextNode(contentlist[i]);
            listLabels[i].appendChild(text);
        }

        const $fragment = document.createDocumentFragment();
        listLabels.forEach(element => {
            $fragment.appendChild(element);
        });
        
        TR.appendChild($fragment);
        return TR;
    }

    //Subrutina para crear la filas con los datos traidos desde el JSON
    const coursesRows = num => {
        let list = []; 
        let text = "";
        let index = num-1;

        // AQUI MISMO PUEDO CREAR LOS ID DE LAS ETIQUETAS TR
        let TR = document.createElement("tr");
        TR.className = "data"
        TR.id = num;

        let input = document.createElement("input");
        input.className = "checkboxes";
        input.type = "checkbox";
        input.id = "c"+num;

        //Controla la Creacion de Td
        for(let i=0; i < 5; i++){
            list[i]= document.createElement("td");
        }

        $.get('./Js/data.json', response =>{
            //Dado que el valor de el json es un array empieza del indice 0 por eso index = 0
                if(num === response[index].N){
                    //el valor de position equivale a las 5 columnas
                    list.forEach((column, position)=>{
                        if(position == 0)column.textContent = response[index].N;
                        if(position == 1)column.textContent = response[index].SIGLA;
                        if(position == 2)column.textContent = response[index].ASIGNATURA;
                        if(position == 3)column.textContent = response[index].REQUISITOS;
                        if(position == 4)column.appendChild(input);
                    })
                }
            
        });

        list.forEach(element=> {
            TR.appendChild(element);
        });
        
        return TR;
    }
    
    //Subrutina para llenar las tablas dinamicamente
    const fillTable = (table, amount, number)=>{
        const $fragment = document.createDocumentFragment();
        let label;
        let rows = number;

        for (let index = 0; index < amount; index++) {
            label = coursesRows(rows);
            label.id = rows;
            $fragment.appendChild(label);
            rows++
        }
        table.appendChild($fragment);
    }

    // Migrar a una clase!!
    const Main = ()=>{
        tablesList.forEach((table, index) =>{
            // Primero introducimos la cabezera de la tabla
            table.appendChild(tableHeader());

            // Segundo introducimos la filas con las asignaturas
            if(index === 0)fillTable(table, 5 , 1);
            if(index > 0 && index < 7)fillTable(table, 6 , (6 * index));
            if(index === 7)fillTable(table, 7 , 42);
            if(index === 8)fillTable(table, 3 , 49);
            if(index === 9)fillTable(table, 1 , 52);
        });

    }
    
    Main();

});

