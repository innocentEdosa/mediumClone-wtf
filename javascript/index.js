const btn = document.querySelector("#openModalButton");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const form = document.getElementById("form");

const loadScriptss = (src) => {

  console.log('i am called')
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    console.log("i am getting here")
    document.head.append(script);

  })
}

const _ = {
  size: () => {},
}

const promise = loadScriptss('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')

promise.then(() => {
  console.log(_.size([1,2,3]), ">>>>>>>>")
  console.log('script loaded')
}).catch((err) => {
  console.log(err)
})



const openModal = () => {
  modal.style.display = "flex";
};

const closeModal = (e) => {
  modal.style.display = "none";
};

const tomato = () => {
    console.log('i am submiting')
  openModal();
};



btn.addEventListener("click", tomato);
modal.addEventListener('click', closeModal)

window.addEventListener("resize", (e) => {
console.log('keydown', 'i am resizing')
})

const fromQuestion = () => {
  // alert('i am from question')
}


