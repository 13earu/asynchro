const somethisWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            resolve('Hey!!')
        } else {
            reject('Ouups')
        }
    })
}

somethisWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethisWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            setTimeout ( () => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error ('Whoooops!')
        }
    })
}

somethisWillHappen2()
    .then(response => console.log(response))
    .catch(()=> concole.erroe(err))


Promise.all([somethisWillHappen(), somethisWillHappen2()])
    .then(response=> {
        console.log('Array of results', response)
    })
    .catch( err => {
        console.error(err)
    })