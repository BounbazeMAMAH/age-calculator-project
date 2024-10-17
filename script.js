const jsBtn = document.querySelector('.js-btn');
const jsInput = document.querySelector('.js-input');
const jsContainer = document.querySelector('.js-container')

const dayDate = new Date();
const dayD = dayDate.getDate();
const dayM = dayDate.getMonth() + 1;
const dayY = dayDate.getFullYear();
function setMaxDate() {
  const full = `${dayY}-${String(dayM).padStart(2, '0')}-${String(dayD).padStart(2, '0')}`;
  jsInput.setAttribute('max', full);
}

setMaxDate();

jsBtn.addEventListener('click',()=>{
  let date = jsInput.value;
  const saveData = new Date(date);
  let dateD = saveData.getDate();
  let dateM = saveData.getMonth() + 1;
  let dateY = saveData.getFullYear();

  let day = dayD - dateD;
  let month = dayM - dateM;
  let old = dayY - dateY;
  if(!jsInput.value){
    return
  }
  if(month<0){
    month = 12 + month
    old = old - 1
  }
  if(day<0){
    const thisMonthFirst = new Date(dayDate.getFullYear(), dayDate.getMonth(), 1)
    const lastdayofLastMounth = new Date(thisMonthFirst - 1)
    const nbreDay = lastdayofLastMounth.getDate()
    day = nbreDay + day
  }
  const jsDisplay = document.createElement('p')
  jsDisplay.classList.add('paragraph')
  jsDisplay.textContent = `You are ${old} years, ${month} month and ${day} old`
  jsContainer.append(jsDisplay)
  jsInput.value=''
})
