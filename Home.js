import Api from "./Api.js"
import AddMasina from "./AddMasina.js";
import UpdateMasina from "./UpdateMasina.js";

class Home{

    constructor(){

        this.createTable();
        this.api = new Api();
        this.getAllElements();

        

        this.createFormBtn = document.querySelector('.buton');

        this.createFormBtn.addEventListener('click',this.onAddMasina);

        this.tb = document.querySelector('.tableBody');

        this.tb.addEventListener('click',this.onShowMasina);

        this.minInput = document.querySelector('.minimum');
        this.maxInput = document.querySelector('.maximum');

        this.findBtn = document.querySelector('.findCars');

        this.findBtn.addEventListener('click',this.onFindCarByprice);

        this.orderBtn = document.querySelector('.orderAZ');
        this.orderBtn.addEventListener('click', this.onOrderAZ);

        this.newestBtn = document.querySelector('.newest');
        this.newestBtn.addEventListener('click', this.onNewest);

        this.zaBtn = document.querySelector('.za');
        this.zaBtn.addEventListener('click',this.onZA);


    }

    createTable(){

        let myDoc = document.querySelector('.container');

        myDoc.innerHTML=`
        
        <table>
        <caption class="titlu">Masini</caption>
        <caption class="buton">Create Masina</caption>

        <label for="minimum">Min Price: </label>
        <input type="text" id="minimum" class="minimum">
        

        <label for="maximum">Max Price: </label>
        <input type="text" id="maximum" class="maximum">
        <input type="button" value="Find Cars" id="findCars" class="findCars">

        <input type="button" value="Order A->Z" id="orderAZ" class="orderAZ">
        <input type="button" value="Price Z->A" id="za" class="za">
        <input type="button" value="Newest Cars" id="newest" class="newest">
        
        <thead>
            <tr>
                <th scope="col">Brand</th>
                <th scope="col">Year</th>
                <th scope="col">Price</th>
                
            </tr>
    
        </thead>
    
    
    
        <tbody class="tableBody">
    
            
        </tbody>
        </table>
        
        
        `
        
    }

    populateTable(arr){

        let tableBody = document.querySelector('.tableBody');
        let text="";
       arr.forEach(element => {
    
    
             text+= `
             
                 <tr>
                     <th scope="row" class="idMasina idMasina-${element.id}">${element.brand}</th>
                     <td>${element.year}</td>
                     <td>${element.price}</td>
                     
                 </tr>
                 
             
             `
            
        });
    
        tableBody.innerHTML = text;
    
    }

    async getAllElements(){

        let newArr=[];
    
        newArr = await this.api.getMasini();

        console.log(newArr);
    
        this.populateTable(newArr);
    }

    getCar = (e)=>{

        let obj = e.target;

        if(obj.classList.contains('tableBody')){

            console.log(obj.children[0]);

        }
    }

   onAddMasina = ()=>{


    
        new AddMasina();


   }

   onShowMasina = (e)=>{

    let obj = e.target;

    if(obj.classList.contains('idMasina')){


        console.log(obj.className.split('-')[1]);
       


        this.masina = {

            id:obj.className.split('-')[1],
            brand: obj.textContent,
            price: obj.nextElementSibling.textContent,
            year: obj.nextElementSibling.nextElementSibling.textContent
        }

        console.log(this.masina);

        new UpdateMasina(this.masina);



    }



    

   }

   onFindCarByprice = async()=>{

        let minValue = this.minInput.value;
        let maxValue = this.maxInput.value;

        let newArr = await this.api.getPropperCarPrice(minValue,maxValue);

        this.populateTable(newArr);



   }

   onOrderAZ = async()=>{


    let orderArr = await this.api.getOrderedcars();

    this.populateTable(orderArr);


   }

   onNewest = async()=>{


    let newestArr = await this.api.getNewestCars();

    this.populateTable(newestArr);
   }

   onZA = async ()=>{


        let zaArr = await this.api.getCarsZA();

        this.populateTable(zaArr);

   }



   
    
        


    


}

export default Home;
