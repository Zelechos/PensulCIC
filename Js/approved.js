export default class Approved{

    constructor(){
        this.d = document;
        this.approved = JSON.parse(localStorage.getItem('approved'));

        // Para que la lista de checkbox no este vacia
        if(!this.approved || this.approved.length < 1){
            this.approved = [
                {
                    id: 0,
                    completed: false,
                }
            ];
            this.currentId = 1;
        } else {
            this.currentId = this.approved[this.approved.length - 1].id + 1;
        }
    }

    marked(){
        this.d.addEventListener('click', e=>{
            if(e.target.matches('.checkboxes')){

                (e.target.checked)
                    ? this.addApproved(e.target.id)
                    : this.removeApproved(e.target.id);
                console.log(this.approved);
            }
        });

        this.showApproved();
    }

    save(){
        localStorage.setItem("approved", JSON.stringify(this.approved));
    }

    findIdApproved(id){
        return this.approved.findIndex(approved => approved.id === id);
    }

    getApproved(){
        return this.approved.map(approved => ({...approved}));
    }

    addApproved(id){
        const approved = {
            id: id,
            completed: true
        }

        this.approved.push(approved);
        console.log(this.approved);
        this.save();// sirve para guardar lo cambios al localstorage

        // Aqui retonamos un clone del nuestro objeto task esto es spread sintax
        return {...approved};
    }

    removeApproved(id){
        const index = this.findIdApproved(id);
        console.error("remove task =>",this.approved[index]," \n the elements is ", this.approved);
        this.approved.splice(index, 1);
        this.save();
    }   

    // toggleCompleted(id){
    //     const index = this.findIdApproved(id);
    //     const task = this.approved[index];
    //     task.completed = !task.completed;
    //     this.save();
    // }

    getCheckboxes(){
        let checkboxes;
            return new Promise((resolve, reject)=>{
                
                let time = 300;

                setTimeout(()=>{
                    checkboxes =  document.querySelectorAll("input[type=checkbox]")
                    resolve(checkboxes);
                    return checkboxes;
                }, time);
                
            });
    }

    async showApproved(){
        // Aqui realizamos la peticion de carga de nuestro checkboxes
        let checkboxes  = await this.getCheckboxes();    
        const approveds = this.getApproved();
        approveds.forEach(approved=>{
            // console.log(approved);
            if(approved.completed){
                checkboxes.forEach(checkbox =>{
                    if(checkbox.id === approved.id){
                        checkbox.checked = true;
                    }
                })
            }
        })
    }
    
    
}