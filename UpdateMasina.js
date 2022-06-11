import Api from "./Api.js"


export default class UpdateMasina{


    constructor(masina){

        this.masina = masina;

        this.api = new Api();

       this.addUpdateFrom(masina);

       this.updateForm = document.querySelector('.myUpdateForm');

       this.updateForm.addEventListener('change',this.onUpdateChange);

       this.updateBtn = document.querySelector('.updateMasina');

       this.updateBtn.addEventListener('click', this.onUpdate);

       this.deleteBtn = document.querySelector('.deleteMasina');

       this.deleteBtn.addEventListener('click',this.onDelete);


    }

    addUpdateFrom(car){

        let myDoc = document.querySelector(".container");

        myDoc.innerHTML = `
              
            <h1>New Car</h1>

            <form class="myUpdateForm">
        
                <p>
                    <label for="brand">Brand</label>
                    <input name="brand" type="text" id="brand" class="brand" value=${car.brand}>
                </p>
        
                <p>
                    <label for="year">Year</label>
                    <input name="year" type="text" id="year" class="year" value=${car.year}>
                </p>
        
                <p>
                    <label for="price">Price</label>
                    <input name="price" type="text" id="price" class="price" value=${car.price}>
                </p>
        
               
                <input type="button" value="Update Car" id="updateMasina" class="updateMasina">

                <input type="button" value="Delete Car" id="deleteMasina" class="deleteMasina">
        
                <input type="button" value="Cancel" id="cancel" class="cancel">

        
            </form>
        
        `
    }

    onUpdateChange =(e)=>{

        let obj = e.target;

        
        if(obj.classList.contains("brand")){
            this.masina.brand = obj.value;
        }else if(obj.classList.contains("year")){

            this.masina.year = obj.value;
        }else if(obj.classList.contains("price")){

            this.masina.price = obj.value;
        }


    }

    onUpdate = async ()=>{

       await this.api.updateMasina(this.masina);

    }

    onDelete = ()=>{

        console.log(this.masina.id);

        this.api.deleteCar(this.masina.id);

    }




}