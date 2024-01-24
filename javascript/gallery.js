const imageList = [
  {
    imageName: "Christmas car",
    imageLink: "../assets/image 3.png",
  },
  {
    imageName: "Christmas gift",
    imageLink:
      "https://images.pexels.com/photos/5728187/pexels-photo-5728187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    imageName: "Christmas decoration",
    imageLink:
      "https://images.pexels.com/photos/5727927/pexels-photo-5727927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    imageName: "Christmas car",
    imageLink:
      "https://images.pexels.com/photos/3444345/pexels-photo-3444345.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    imageName: "Christmas high",
    imageLink:
      "https://images.pexels.com/photos/11345519/pexels-photo-11345519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    imageName: "Christmas tree",
    imageLink:
      "https://images.pexels.com/photos/18332734/pexels-photo-18332734/free-photo-of-tree-with-autumnal-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const gallery = document.getElementById("gallery");
const galleryForm = document.querySelector("#galleryForm");
const imageLinkInput = document.getElementById("imageLink");
const imageNameInput = document.querySelector("#imageName");

const loadScriptss = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    console.log("i am getting here")
    document.head.append(script);

  })
}

const promise = loadScriptss('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')

promise.then(() => {
  console.log('script loaded')
}).catch((err) => {
  console.log(err)
})




function fillGallery() {
  imageList.reverse().forEach((img) => {
    const li = document.createElement("li");
    li.innerHTML = `  <div class="card" >
    <aside class="imageWrapper">
      <img src="${img.imageLink}" alt="image" />
    </aside>
    <span class="imageDetail">
      ${img.imageName}
    </span>
  </div>`;

    gallery.appendChild(li);
  });
}

const addNewImage = () => {
  const img = [].concat(imageList).pop();
  const li = document.createElement("li");
  li.innerHTML = `  <div class="card" >
  <aside class="imageWrapper">
    <img src="${img.imageLink}" alt="image" />
  </aside>
  <span class="imageDetail">
    ${img.imageName}
  </span>
</div>`;
  gallery.prepend(li);
}


galleryForm.addEventListener('submit',  (event) => {
  event.preventDefault();
  const imageNameValue = imageNameInput.value;
  const imageLinkValue = imageLinkInput.value;
  const imgObj = {
    imageName: imageNameValue,
    imageLink: imageLinkValue,
  }

  imageList.push(imgObj)
  addNewImage()
})


const removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log(e, 'this is the event object')
})
fillGallery();

fromQuestion();




