function update (target, content ,end){
	let progressBar = document.querySelector(target);
let valueContainer = document.querySelector(content);

let progressValue = 0;
let progressEndValue = end;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #2ec4ca ${progressValue * 3.6}deg,
      #f0f0f0 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

}

const target1 = ".target1";
const content1 = ".content1"
update (target1, content1 ,50);

const target2 = ".target2";
const content2 = ".content2" 
update (target2, content2 ,20);

