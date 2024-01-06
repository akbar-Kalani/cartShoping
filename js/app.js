
const searchInp = document.getElementById("search")
const product = document.querySelectorAll(".product_itmes")
const fliterBtn = document.querySelectorAll(".fliter")
const priecBtn = document.getElementById("search_price").querySelector("button")
console.log(priecBtn);
//const searchBtn = document.getElementById('serachBtn')

const changeClass = (filter) => {
  fliterBtn.forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.classList.add("active")
    } else {
      btn.classList.remove("active")
    }
  })
}


const searchHandalar = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  /*   console.dir(searchValue) */
  product.forEach(items => {
    const productName = items.children[1].children[0].innerText.toLowerCase()
    if (productName.includes(searchValue)) {
      items.style.display = "block"
    } else {
      items.style.display = "none"
    }
  });
}


const fliterHeandlar = (evn) => {


  const filter = evn.target.dataset.filter
  changeClass(filter);
  product.forEach(product => {
    const category = product.dataset.category
    if (filter === "all") {
      product.style.display = "block"
    } else {
      filter === category ? product.style.display = "block" : product.style.display = "none"

    }
  })

}

const searchPriceHeandlar = eve => {
  const searchPri = +eve.target.parentElement.children[0].value

  product.forEach(product => {
    const productItems = product.children[1].children[1].innerText
    const price = +productItems.split(" ")[1]

    if (!searchPri) {
      product.style.display = "block"
    } else {
      searchPri === price ? product.style.display = "block" : product.style.display = "none"
    }
  })
}

fliterBtn.forEach(filter => {
  filter.addEventListener("click", fliterHeandlar)
});

searchInp.addEventListener("keyup", searchHandalar)

priecBtn.addEventListener("click", searchPriceHeandlar)