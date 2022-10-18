function ctrFunction(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
const itvID = setInterval(ctrFunction, 1000);