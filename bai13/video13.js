console.log('Hello world from HTML')

let arrTop4 = ['Liver', 'Chelsea', 'MU', 'Man City']

// let i = 0;
// while( i < arrTop4.length) {
//     //if else
//     if(arrTop4[i].length === 2) {
//     console.log('Top Club: ', i + 1, arrTop4[i]);
// } else if(arrTop4[i].length === 4){
//     console.log('Top club:', i + 1, arrTop4[i]);
// } else{

//     }
//     i++;
// }

let i = 0;
while( i < arrTop4.length) {
    if (arrTop4[i] === 'Chelsea') {
        console.log('Found it:', arrTop4[i])
        break;
    }
    console.log('>>> check i:', i)
    i++;
}



