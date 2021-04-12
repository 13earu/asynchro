const doSomethingAsync = () => {
    return new Promise ((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Do Someting Async'), 3000)
        : reject (new Error('test Earror'))
    })
}

const doSomething = async () => {
    const someting = await doSomethingAsync()
    console.log(someting)
}

console.log('Before')
doSomething()
console.log('after')

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    }catch (error) {
        console.error(error)
    }
}

console.log('Before 1')
anotherFunction()
console.log('after 1')