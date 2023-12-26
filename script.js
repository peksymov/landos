const subBtn = document.getElementById("submit-btn")
const inputSub = document.getElementById("submit-input")
const modal = document.getElementById("modal")
const modalClose = document.getElementById("modal-close")
const inputModalSub = document.getElementById("submit-input-modal")
const subModalBtn = document.getElementById("submit-btn-modal")
const btnToTop = document.querySelectorAll(".btn-to-top")
let inputValue = ''
btnToTop.forEach(function (el) {
  el.addEventListener("click", function() {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  });
})
inputSub.addEventListener('input', (event)=> {
  inputValue = event.target.value
})
subBtn.addEventListener('click', ()=> {
  inputModalSub.value = inputValue
  modal.style.display = 'flex'
})


modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
})
modal.addEventListener('click', (event) => {
  event.target === modal ? modal.style.display = 'none' : 'flex'
})
subModalBtn.addEventListener('click', () => {
  sentEmail(inputModalSub.value).then(() => {
    console.log('inputModalSub', inputModalSub.value)
  })
})


sentEmail = async (data) => {
  const location = window.location.hostname;
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  };
  try {
    const fetchResponse = await fetch(`http://${location}:9000/api/sensors/`, settings);
    return await fetchResponse.json();
  } catch (e) {
    return e;
  }

}

const headerBtn = document.getElementById("header-btn");

headerBtn.addEventListener("click", function(){
  window.open("https://hqhq.ai/", "_blank");
});