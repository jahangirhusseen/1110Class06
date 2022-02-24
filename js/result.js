const stdInfo =[
    ['001','Fahmid',10,50,70,90,88,40],
    ['002','Nabil',44,55,96,46,77,36],
    ['003','Tahsin',77,88,66,84,47,81],
    ['004','Tanha',15,88,69,74,85,99],
    ['005','Tahmid',23,47,58,69,96,58],
    ['006','Tahsan',88,55,69,88,77,55],
    ['007','Tamim',77,88,99,66,55,44],
    ['008','Tazib',88,99,66,55,14,85],
    ['009','Talha',78,98,65,47,85,86],
    ['010','Tanbir',72,66,33,55,44,88],
];
for (let i = 0; i < stdInfo[2].length; i++){
    let bn      =   stdInfo[i][2];
    let eng     =   stdInfo[i][3];
    let math    =   stdInfo[i][4];
    let ss      =   stdInfo[i][5];
    let sci     =   stdInfo[i][6];
    let reg     =   stdInfo[i][7];

let totalNum = bn + eng + math + ss + sci + reg;


function stdInforeslt (){
    this.gpa = function (sub){
        if (sub < 0 || sub > 100 ) {
            return "Invalid Marks";
        }else if( sub >= 33 &&  sub <= 39){
            return "D";
        }else if( sub >= 40 &&  sub <= 49){
            return "C";
        }else if( sub >= 50 &&  sub <= 59){
            return "B";
        }else if( sub >= 60 &&  sub <= 69){
            return "A-";
        }else if( sub >= 71 &&  sub <= 79){
            return "A";
        }else if( sub >= 8 &&  sub <= 100){
            return "A+";
        }else{
            return "F";
        }
    };
    this.grade = function (sub){
        if (sub < 0 || sub > 100 ) {
            return "Invalid Marks";
        }else if( sub >= 33 &&  sub <= 39){
            return 1;
        }else if( sub >= 40 &&  sub <= 49){
            return 2;
        }else if( sub >= 50 &&  sub <= 59){
            return 3;
        }else if( sub >= 60 &&  sub <= 69){
            return 3.5;
        }else if( sub >= 71 &&  sub <= 79){
            return 4;
        }else if( sub >= 8 &&  sub <= 100){
            return 5;
        }else{
            return 0;
        }
    };
    this.cgpa = function (){
        let totalgrade = (bn + eng + math + ss + sci + reg);
        let totalCgpa  = totalgrade/6;
        return totalCgpa;
    };
    this.fail = function () {
        if( bangla < 32 || eng < 32 || math < 32 || ss < 32 || sci < 32 ||  reg < 32){
            return "Failed";
        }else{
            return totalCgpa;
        }
    };
    let reslt = new stdInforeslt();
    let totalCgpa = reslt.cgpa(
        reslt.grade(bn),
        reslt.grade(eng),
        reslt.grade(math),
        reslt.grade(sci),
        reslt.grade(ss),
        reslt.grade(reg)
    );
}
   
console.log(`
Roll Number : ${stdInfo[i][0]}
Student Name :${stdInfo[i][1]}
------------------------------
SubJect             Marks       
Bangla         :    ${stdInfo[i][2]}
English        :    ${stdInfo[i][3]}
Mathematics    :    ${stdInfo[i][4]}
Social Science :    ${stdInfo[i][5]}
Science        :    ${stdInfo[i][6]}
Religion       :    ${stdInfo[i][7]}
`);

}



