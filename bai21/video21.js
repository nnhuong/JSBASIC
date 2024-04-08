console.log('Hello world from HTML')

// let arr = [1,2,3,4,5,6,7,8,9,10]

let arr = [
    {name: 'Eric', age: '18'}, 
    {name: 'hi', age: '25'}, 
    {name: 'he', age: '12'}, 
    {name: 'ha', age: '24'}, 
    {name: 'hic', age: '18'}, 
    {name: 'ho', age: '18'}, 
]

let filter = arr.find((item, index )=>{
    // console.log('check fileter: item', item, ',', 'index: ', index )
    return item && item.age === 18;
 });

 console.log(filter)
 