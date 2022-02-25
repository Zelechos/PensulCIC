export default class Tables{

    constructor(container){
        this.d = document;
        this.container = document.getElementById(container);
        this.fragment = document.createDocumentFragment();
        this.contentPensul;
    }

    // Subrutina para crear y pintar las tabla en la web
    printTables(){
        const $contentPensul = [];
        // Creamos la etiqueta del titulo
        const $title = this.d.createElement('h1');
        $title.textContent = 'INGENIERIA EN CIENCIAS DE LA COMPUTACION';
        $title.className = 'title';
        
        $contentPensul.push($title);

        for (let index = 0; index < 10; index++) {
            // Creamos las etiquetas de los subtitulos
            const $subtitle =this.d.createElement('h3');
            $subtitle.textContent = `SEMESTRE ${index+1}`;
            $subtitle.id = index;
            $subtitle.className = 'subtitle';
            $contentPensul.push($subtitle);

            // Creamos las etiquetas de las tablas
            const $table =this.d.createElement('table');
            (index === 0 )?$table.id = `Tabla` : $table.id = `Tabla${index}`;
            $table.className = 'table-style';
            $contentPensul.push($table);
        }


        $contentPensul.forEach(labels =>{
            this.fragment.appendChild(labels);
        })

        // Introducimos nuestro fragmento al documento
        this.container.appendChild(this.fragment);
        this.contentPensul = $contentPensul;
    }

    getTables(){    
        return this.contentPensul.filter(tables => tables.id.includes("Tabla"));
    }
}