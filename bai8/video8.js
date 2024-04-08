console.log('Hello world from HTML')
console.log(1)
//key: value
let obj = {
    name: "Eric", address: "HN", email: 'jdj@gmail.com', gender: "nu", a: function(){
        console.log('hello world inside function')
    }
};
JSON
"{name: 'Eric', address: 'HN'}"
//obj object: doi tuong
let b = 'name';
obj[b]='tao'
console.log('type of a:', typeof a)
console.log("type of b:", typeof b)

console.log('what is your name?', 'my name is: ', obj['name'])
console.log('ban o dau?', 'toi o: ', obj.b)
console.log('call function: ', obj.a())