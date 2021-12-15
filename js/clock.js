let clock = document.querySelector(".clock");




function clockFunction()
{
    let date = new Date();
    clock.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    setTimeout(function() {clockFunction()},10);
}
clockFunction();
