const fetchData = require ('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

fetchData (API)
    .then(data => {
        console.log(data.info.count)
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err))

   


    const andres = () => {
        if(true){
            console.log ('is true')
        } else {
            console.log ('fake')
        }
    }
    andres()

    const pan = () => {
        (false)
            ? console.log ('is true')
            : console.log ('fake')     
    }
    pan()