
// 1
/*setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`; 
    div1.append(p1);
}, 2000); 

// 2
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = 'Two';
        div2.append(p3);
    }, 2000);
} 3000); */

// 3
let time = 1;
setInterval(() => {
    console.log(time);
    time++;
}, 1000);
const stop = document.querySelector(`#countdown`);
stop.addEventListener(`click`, () => {
    clearInterval(time);
});

// BONUS






