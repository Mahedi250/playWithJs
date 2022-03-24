
import fetch from 'node-fetch';



const loaddata = async () => {

    try {
        const data = await fetch('https://fakestoreapi.com/products');

        const finaldata = await data.json();

        return finaldata;

    }
    catch (er) { console.error(er) }




}



const promiseall = async () => {
    const ur1 = 'https://jsonplaceholder.typicode.com/todos/1'
    const ur2 = 'https://jsonplaceholder.typicode.com/todos/2'
    const ur3 = 'https://jsonplaceholder.typicode.com/todos/3'
    const ur4 = 'https://jsonplaceholder.typicode.com/todos/4'
    const ur5 = 'https://jsonplaceholder.typicode.com/todos/5'

    const alldata = await Promise.all(
        [
            fetch(ur1),
            fetch(ur2),
            fetch(ur3),
            fetch(ur4),
            fetch(ur5),

        ]) /* fetch multiple data */


    const final = await Promise.all(alldata.map((data) => data.json())); //convert evry response data in json formate
    return final;


}

//loaddata().then((data) => { console.log(data) }); 
/* this funtion return a promise so it can be handle by then and catch*/

/*for top level await it can handle by iife */

(async () => {
    // const data = await loaddata();

    // console.log(data);

    const getalldata = await promiseall();
    console.log(getalldata);

})();
