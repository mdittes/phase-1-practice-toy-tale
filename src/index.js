let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  toggleForm()
  getToys()
  newToyForm()
});


const getToys = () => {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => toys.forEach(toy => renderAToy(toy)))
}

const renderAToy = (toy) => {
  let toyCard = document.createElement('div')
  toyCard.className = 'card'

  const toyCollection = document.querySelector('#toy-collection')
  toyCollection.append(toyCard)

  let h2 = document.createElement('h2')
  h2.textContent = toy.name

  let img = document.createElement('img')
  img.src = toy.image
  img.className = 'toy-avatar'

  let p = document.createElement('p')
  p.textContent = `${toy.likes} Likes`

  let btn = document.createElement('button')
  btn.id = toy.id
  btn.className = 'like-btn'
  btn.textContent = "Like <3"

  btn.addEventListener('click', (e) => {
    const currentLikes = e.target.previousSibling.textContent
    const actualLikes = currentLikes.split(" ")[0]

    e.target.previousSibling.textContent = `${parseInt(actualLikes) + 1} Likes`
  })

  toyCard.append(h2, img, p, btn)
}

const newToyForm = () => {
  const toyForm = document.querySelector('.add-toy-form')
  toyForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newToyName = e.target.name.value
    const newToyImage = e.target.image.value

    const newToyObj = {
      name: newToyName,
      image: newToyImage,
      likes: 0
    }
    renderAToy(newToyObj)  
  })
}


const toggleForm = () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
}


//let toyCollection = document.getElementById('#toy-collection')

// fetch('http://localhost:3000/toys')
// .then(res => res.json())
// .then(toyData => toyData.forEach(handleToys))
// .catch(err => console.log(err));

// function handleToys(toy) {
//   let toyCard = document.createElement('div')
//   toyCard.className = 'card'

//   let h2 = document.createElement('h2')
//   h2.textContent = toy.name

//   let img = document.createElement('img')
//   img.src = toy.image
//   img.className = 'toy-avatar'

//   let p = document.createElement('p')
//   p.textContent = `${toy.likes} likes`

//   let btn = document.createElement('button')
//   btn.className = 'like-btn'
//   btn.id = toy.id
//   btn.textContent = "Like"
//   //btn.addEventListener('click', () =>
//     //unsure what goes here

//   toyCard.append(h2, img, p, btn)
//   toyCollection.append(toyCard)
//   }
 

 
//make a <div class="card"> for each toy
  //add it to the toy-collection div


/*
save #toy-collection node to append for all toy characters

takes in a single toy's info and renders a card to a page
using it for fetch get forEach
  and post
function addCharacterInfoToDOM(character)
  character.name, character.image etc
  make name node, image node, likes node, add like button
  add info using character
  append it to dom

ADD toy info to the card------
get the div with id toy-collection
fetch get all toys from localhost
  get response data
  loop through data
    for each character, make card dom structure = addCharacterToDOM()
  INCREASE A TOY'S LIKES using a button:-------
    (Note: button tag addEventListener click
        on click, make patch to increment likes by 1) <- optional
        use response or current DOM to update DOM

ADD A NEW TOY------
  get form
  on form submit
    get data
    make post request <- populate DOM directly (can skip post for now)
      use response to populate DOM  = addCharacterToDOM()   
     take data and populate DOM without data persisting (don't use POST)    
    */