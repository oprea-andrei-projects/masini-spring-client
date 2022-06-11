class Api{



    constructor(){
       
    }

    api(path, method='GET', body=null, requiresAuth = false, credentials = null){

        const url ="http://localhost:8080/" + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            },

        };

        if (body !== null) {
            options.body = JSON.stringify(body);
        }
        if (requiresAuth) {
            const encodedCredentials = Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64');
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }
        return fetch(url, options);


    }



    async getMasini(){

        return this.api("allMasini").then(data=>data.json());
    }



    async createMasina(masina){

        let data = await this.api("addMasina",'POST',masina);
    }

    async updateMasina(masina){

        let myData = await this.api(`updateTheCar`,`PUT`,masina);

        
    }

    async deleteCar(id){

        await this.api(`deleteMasina/${id}`,`DELETE`);

    }

    async getPropperCarPrice(min,max){

        return this.api(`getPropperCarPrice/${min},${max}`,`GET`).then(data=>data.json());
    }

    async getOrderedcars(){

        return this.api(`orderCarsAZ`,`GET`).then(data=>data.json());
    }

    async getNewestCars(){

        return this.api(`newestCars`,`GET`).then(data=>data.json());
    }

    async getCarsZA(){

        return this.api(`newestCars`,`GET`).then(data=>data.json());
    }

    




}



export default Api;