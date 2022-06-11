import Api from "./Api.js"

export default class AddMasina{


    constructor(){

        this.api = new Api();

        this.addFrom();


        this.newMasinaBtn = document.querySelector('.newMasina');
        
        this.myForm = document.querySelector('.myForm');

        this.myForm.addEventListener('change',this.onChange);

        this.newMasinaBtn.addEventListener('click', this.onAdd);


        this.masina = {

            brand: "",
            price: "",
            year: ""



        }
        

    }


    addFrom(){

        let myDoc = document.querySelector(".container");

        myDoc.innerHTML = `
              
            <h1>New Car</h1>

            <form class="myForm">
        
                <p>
                    <label for="brand">Brand</label>
                    <input name="brand" type="text" id="brand" class="brand">
                </p>
        
                <p>
                    <label for="year">Year</label>
                    <input name="year" type="text" id="year" class="year">
                </p>
        
                <p>
                    <label for="price">Price</label>
                    <input name="price" type="text" id="price" class="price">
                </p>
        
               
                <input type="button" value="Create New Car" id="newMasina" class="newMasina">
        
                <input type="button" value="Cancel" id="cancel" class="cancel">

        
            </form>
        
        `
    }

    onChange =(e)=>{

        let obj =e.target;

        if(obj.classList.contains("brand")){
            this.masina.brand = obj.value;
        }else if(obj.classList.contains("year")){

            this.masina.year = obj.value;
        }else if(obj.classList.contains("price")){

            this.masina.price = obj.value;
        }



    }

    onAdd = ()=>{

        this.api.createMasina(this.masina);


    }




}