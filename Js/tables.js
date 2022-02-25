export default class Tables{

    constructor(container){
        this.d = document;
        this.container = document.getElementById(container);
    }

    // Subrutina para crear y pintar las tabla en la web
    printTables(){
        const $contenPensul = [];
        // Creamos la etiqueta del titulo
        const $title = this.d.createElement('h1');
        $title.textContent = 'INGENIERIA EN CIENCIAS DE LA COMPUTACION';
        $title.className = 'title';

        for (let index = 0; index < 10; index++) {
            // Creamos las etiquetas de los subtitulos
            const $subtitle =this.d.createElement('h3');
            $subtitle.textContent = `SEMESTRE ${index+1}`;
            $subtitle.id = index;
            $subtitle.className = 'subtitle';
            $contenPensul.push($subtitle);

            // Creamos las etiquetas de las tablas
            const $table =this.d.createElement('table');
            (index === 0 )?$table.id = `Tabla` : $table.id = `Tabla${index}`;
            $table.className = 'table-style';
            $contenPensul.push($table);
        }

        // Metodo unshift() sirve para poner al inicio de un array un elemento
        $contenPensul.unshift($title);
        $contenPensul.forEach(labels =>{
            this.container.appendChild(labels);
        })
    }
}