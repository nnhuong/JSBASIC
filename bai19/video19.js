console.log('Hello world from HTML')

let sum = (a,b) => {
    return a + b;
}
console.log('check sum:', sum(9,6))

let obj = {
    name: 'Eric',
    address: 'HN',
    getName: function(){
        return this.name;
    }
}
console.log(obj)