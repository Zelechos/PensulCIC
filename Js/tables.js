export default class Tables{

    constructor(container){
        this.d = document;
        this.container = document.getElementById(container);
    }

    print(){

        let content = ``;
        for (let index = 0; index < 10; index++) {

            (index === 0)
            ? content += `<h1 class="title">INGENIERIA EN CIENCIAS DE LA COMPUTACION</h1>
<h3 class="subtitle" id="${index}">SEMESTRE 1</h3>
            <table class="table-style" id="Tabla"></table>\n`
            : content += `<h3 class="subtitle" id="${index}">SEMESTRE ${index+1}</h3>
            <table class="table-style" id="Tabla${index}"></table>\n`
        }
        console.log(content);
        this.container.innerHTML = content;
    }
}