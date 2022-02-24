

// const mname = [
//     ['Abdul','Jabbar','Abdul Rahim','Abdul Kadir','Abdul Hasim','Roton','Afsor'],
//     ['Jillur','Rana','Muktar','Kawsar','Kamran','Joy',''],
//     ['Islam','Sobuj','Mahbub','Siraj','Milon','Sarwan','Imtiaj']
// ];


// // mname[1].forEach(data => console.log(data));
// // mname[2].map(data => console.log(data));

// for( let i = 0; i< mname.length; i++ ){
//     console.log(` ${i+1} ${mname[i]} `);
//     // console.log((mname[i]));
// }


// const devs = [
//     ['Malek Joy',220,'MERN Stack','Mirpur',],
//     ['MH Kawsar',190,'Laravel','Banani',],
//     ['Mizanur Rahman',170,'Django','Dhanmondi',],
//     ['Kamrul Islam',180,'GoLang','Uttara',],
//     ['Hamid Faysol',150,'WordPress','Muhammad pur',],
//     ['Safwan Himel',170,'java','Banani',],
// ]

// // for (let i = 0; i < devs.length; i++) {
// //     if (devs[i][3] == 'Mirpur' && devs[i][2]) {
// //         devs[i].map(data => console.log(data));
// //     } 
    
// // }

// Array  methods



// const book = ['Bangla','English','Math','Social Science','Religion'];

// console.log(book);
// console.log(book.toString());
// console.log(book.join('/'));


// let text = "hi, I'm Jahangir Hussen , I'm Profesonal MREN Stack developer , I have 40+ project done , ";
// console.log(text.split(''));


const bookName = ['Bangla','English','Math','Social Science','Religion'];

// last part e add hobe.
bookName.push('Science');
// last part e remove hobe.
bookName.pop();

// first  part e remove hobe.
bookName.shift("Bangla 1st");
// first  part e add hobe.
bookName.unshift("Bangla 2nd");

console.log(bookName);

let nb = ['1','2','3','4','5','6','7','8','9','10',];


let snb = nb.slice(3,8);
console.log(snb);

nb.splice(3,3, '12', '15');
console.log(nb);

let cname = ['Bangladesh'];
let cName = ['DHaka'];
console.log(cName.concat(cname));