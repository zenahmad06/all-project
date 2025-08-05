// setipa proses dilar mneggunakan proses asynchronus ya 

async function getData(){
    try{
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,flags')
        const data = await res.json()
        console.log(data)
    }catch(e){
        console.log(e)
    }
}

//call function
getData()