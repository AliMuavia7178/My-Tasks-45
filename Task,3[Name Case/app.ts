/*Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase,
 and titlecase.*/



   let personName : string = "aLi mUaViA";
    console.log(`Name in Upper case: ${personName.toUpperCase()}`);
    console.log(`Name in Lower case: ${personName.toLowerCase()}`);

    let step1 = personName.split(' ');

    let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());

    let step3 = step2.join(' ');
    console.log(`Name in title case: ${step3}`);

    /*let personName : string = "aLi mUaViA";
    console.log(`Name in Upper case: ${personName.toUpperCase()}`);
    console.log(`Name in Lower case: ${personName.toLowerCase()}`);

    let titlecaseName = personName.replace(/\b\w/g,c => c.toUpperCase());
console.log(titlecaseName);*/