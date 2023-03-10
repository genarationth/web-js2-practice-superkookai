function getInfo() {
    const name = prompt("What is your name?");
    const location = prompt("What is your location?");
    const hobby = prompt("What is your hobby?");
    document.getElementById('result').innerHTML = `Hi, my name is ${name}. I live in ${location} and enjoy ${hobby}.`;
}