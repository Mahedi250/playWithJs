
import fetch from 'node-fetch';


const loaddata = async () => {

    try {
        const data = await fetch('https://fakestoreapi.com/products');

        const finaldata = await data.json();

        return finaldata;

    }
    catch (er) { console.error(er) }




}

//loaddata().then((data) => { console.log(data) }); 
/* this funtion return a promise so it can be handle by then and catch*/

/*for top level await it can handle by iife */

(async () => {
    const data = await loaddata();

    console.log(data);

})();
