const devs = [
    ['Malek Joy',25,'MERN Stack','Mirpur',230],
    ['MH Kawsar',29,'Laravel','Banani',190],
    ['Mizanur Rahman',27,'Django','Dhanmondi',180],
    ['Kamrul Islam',30,'GoLang','Uttara',170],
    ['Hamid Faysol',31,'WordPress','Muhammad pur',190],
    ['Safwan Himel',28,'java','Banani',200],
]

let total = 0;
for ( let i = 0; i < devs.length; i++ ) {
    console.log(`----------------------------------
Name     =   ${devs[i][0]}
Age      =   ${devs[i][1]}
Devs     =   ${devs[i][2]}
Location =   ${devs[i][3]}
Salary   =   ${devs[i][4]}
----------------------------------
    `);
    total = total + devs[i][4];
   } 
   console.log(`Total Salary = $${total}`);