function CalAge(){
    const birthYear = prompt('Please enter your birth year');
    const futureYear = prompt('Please enter future year');
    const yourAge = Number(futureYear) - Number(birthYear);
    document.getElementById('result').innerHTML = 'Your age is ' + yourAge + ' years old';
}