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
const removeBtn = document.querySelector("#removeBtn")

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


function removeButton (item){
  imageList.splice(item, 1)
  updateGallery ()
  
}

function updateGallery() {
  
  gallery.innerHTML = "";
  
  fillGallery();
}

removeBtn.addEventListener('click', removeButton)


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

fillGallery();