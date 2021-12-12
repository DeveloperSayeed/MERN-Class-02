
let name = prompt("waht is your Name");
let age = prompt("How old are you");
let gender = prompt("Gender");



if ( age >= 18 && age <=30 && gender == "female"){
console.log(` Congration ${name} apu apni biya korty parna `);
}
else if( age <18 && gender == "female"){
    console.log(` Sorry ${ name } Apu tmr akon Biyar boyos hoy nai`);
}
else if(age >30 && gender == "female"){
    console.log(` Apu apni tho bori hoiya jaitycan biya kovy korban `);
}
else if( age >=21 && age < 40 && gender == "male"){
    console.log(` congratin ${name} Bhai apni Biya korty parna`);
}
else if( age <21 && gender == "male"){
    console.log(` Sorry ${ name } bhai tmr akon Biyar boyos hoy nai`);
}
else if(age >40 && gender == "male"){
    console.log(` bhai apni tho bori hoiya jaitycan biya kovy korban `);
}
else{
    console.log(`please Give your Right Information`);
}
