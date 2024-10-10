let count=0;
function counter(){
    console.log(count);
    count++;
    Time();
}
function Time(){
    setTimeout(counter,1000);
}
Time();