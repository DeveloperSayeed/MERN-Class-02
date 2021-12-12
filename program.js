
const Name = prompt("Your Name");
const age = prompt(" Your Age");
const gender = prompt(" Male / Female")


if ( age >=20 && age <=35 && gender =="male"){
    console.log(` congration ${name} Bro we are waiting for you this program `);
}

else if ( age <20 && gender =="male"){
    console.log(` Sorry ${name} We can't Give you access this program`);
}
else if ( age >35 && gender =="male"){
    console.log(` Sorry ${name} We can't Give you access this program`);
}

else if ( age >=18 && age <=35 && gender =="female"){
    console.log(` congration ${name} Bro we are waiting for you this program `);
}
else if ( age <18 && age >=36 && gender =="female"){
    console.log(` Sorry ${name} We can't Give you access this program `);
}
else if ( age >35 && gender =="female"){
    console.log(` Sorry ${name} We can't Give you access this program`);
}
else{
    console.log(` Please give you Right information`);
}