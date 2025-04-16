const newCarForm = document.getElementById("newCarForm");
const filterForm = document.getElementById("filterForm");
const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards");
const cardetails = document.getElementById("cardetails");
const search = document.getElementById("search");
const option = document.getElementById("option");
const loadBtn = document.getElementById("loadBtn");
const sort = document.getElementById("sort");
const opt = document.getElementById("opt");
const minimum = document.getElementById("minimum");
const minimum1 = document.getElementById("minimum1");
const maximum = document.getElementById("maximum");
const maximum1 = document.getElementById("maximum1");
const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2");
const reset = document.getElementById("reset");
const totalPrice = document.getElementById("totalPrice");
const carContent = document.getElementById("carContent");
const carInput = document.getElementById("carInput");
const randomCars = document.getElementById("randomCars");

function toggleCar() {
  if (
    newCarForm.style.maxHeight === "0px" ||
    newCarForm.style.maxHeight === ""
  ) {
    newCarForm.style.maxHeight = newCarForm.scrollHeight + "px";
    newCarForm.style.padding = "1rem";
  } else {
    newCarForm.style.maxHeight = "0px";
    newCarForm.style.padding = "0";
  }
}

function toggleFilter() {
  if (
    filterForm.style.maxHeight === "0px" ||
    filterForm.style.maxHeight === ""
  ) {
    filterForm.style.maxHeight = filterForm.scrollHeight + "px";
    filterForm.style.padding = "1rem";
  } else {
    filterForm.style.maxHeight = "0px";
    filterForm.style.padding = "0";
  }
}

function toggleSidebar() {
  if (sidebar.classList.contains("translate-x-full")) {
    sidebar.classList.remove("translate-x-full");
    sidebar.classList.add("translate-x-0");
  } else {
    sidebar.classList.add("translate-x-full");
    sidebar.classList.remove("translate-x-0");
  }
}

document.addEventListener("click", function (event) {
  if (
    !filterForm.contains(event.target) &&
    !event.target.matches('[onclick="toggleFilter()"]') &&
    !event.target.closest('[onclick="toggleFilter()"]')
  ) {
    filterForm.style.maxHeight = "0px";
    filterForm.style.padding = "0";
  }

  if (
    !newCarForm.contains(event.target) &&
    !event.target.matches('[onclick="toggleCar()"]') &&
    !event.target.closest('[onclick="toggleCar()"]')
  ) {
    newCarForm.style.maxHeight = "0px";
    newCarForm.style.padding = "0";
  }
});

let count = 4;

function showCars() {
  loadBtn.style.display = "flex";
  cards.innerHTML = "";
  cardetails.innerHTML = "";
  cars
    .filter((item) => (option.value ? item.marka == option.value : item))
    .slice(0, count)
    .map((item) => {
      cards.innerHTML += `
            <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="relative">
              <img class="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" src="${item.img}" alt="${item.marka} ${item.model}">
              <div class="absolute top-3 right-3 bg-yellow-400 bg-opacity-80 text-xs font-semibold px-2 py-1 rounded-md text-black uppercase">
                Yeni
              </div>
              <button onclick="addFav(${item.id})" class="absolute w-10 h-10 top-3 left-3 bg-white rounded-full text-gray-400 hover:text-red-600 transition-colors duration-300">
                <i class="fas fa-heart text-lg"></i>
              </button>
            </div>
            <div class="p-4">
              <h3 class="text-[22px] font-semibold text-gray-900 mb-2">${item.marka} ${item.model}</h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-calendar mr-1"></i> ${item.il}
                </span>
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-tachometer-alt mr-1"></i> ${item.mator}
                </span>
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-palette mr-1"></i> ${item.reng}
                </span>
              </div>
              <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div class="text-[22px] font-bold text-green-700">${item.qiymet} ₼</div>
                <div class="flex space-x-2">
                 <a href="https://turbo-az-v2.vercel.app/details.html?id=${item.id}" target="_blank" onclick="prepareDetailsLink(this, ${item.id}); return true;" class="flex items-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors">
                    <i class="fa-solid fa-eye mr-2"></i> Bax
                 </a>
                  <a href="#" onclick="addBasket(${item.id}); event.preventDefault();" class="flex items-center justify-center w-9 h-9 bg-green-200 hover:bg-green-300 text-green-600 hover:text-green-800 rounded-lg transition-colors">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> 
        `;
    });
}

function addFav(id) {
  const favList = JSON.parse(localStorage.getItem('favList')) || []

  const isElementExists = favList.some(item => item.id == id)

  if (!isElementExists) {
      const favElement = cars.find(item => item.id == id)
      favList.push(favElement)
      localStorage.setItem('favList', JSON.stringify(favList))
  } else console.warn('this element is already exist in FavList')
}

function searchCars() {
  cards.innerHTML = "";
  cardetails.innerHTML = "";
  cars
    .filter((item) =>
      item.marka.toLowerCase().startsWith(search.value.toLowerCase())
    )
    .map((item) => {
      cards.innerHTML += `
                <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="relative">
              <img class="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" src="${item.img}" alt="${item.marka} ${item.model}">
              <div class="absolute top-3 right-3 bg-yellow-400 bg-opacity-80 text-xs font-semibold px-2 py-1 rounded-md text-black uppercase">
                Yeni
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-[22px] font-semibold text-gray-900 mb-2">${item.marka} ${item.model}</h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-calendar mr-1"></i> ${item.il}
                </span>
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-tachometer-alt mr-1"></i> ${item.mator}
                </span>
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-palette mr-1"></i> ${item.reng}
                </span>
              </div>
              <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div class="text-[22px] font-bold text-green-700">${item.qiymet} ₼</div>
                <div class="flex space-x-2">
                  <a href="#" onclick="detailCars(${item.id}); event.preventDefault();" class="flex items-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors">
                    <i class="fa-solid fa-eye mr-2"></i> Bax
                  </a>
                  <a href="#" onclick="addBasket(${item.id}); event.preventDefault();" class="flex items-center justify-center w-9 h-9 bg-green-200 hover:bg-green-300 text-green-600 hover:text-green-800 rounded-lg transition-colors">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> 
        `;
    });
}
searchCars();

const markas = [];
function printMarkas() {
  cars.forEach(
    (item) => !markas.includes(item.marka) && markas.push(item.marka)
  );
  markas.sort();
  markas.forEach(
    (item) => (option.innerHTML += `<option value="${item}">${item}</option>`)
  );
}
printMarkas();

function sortCars() {
  if (opt.value === "let1") {
    cars.sort((a, b) => a.marka.localeCompare(b.marka));
  } else if (opt.value === "let2") {
    cars.sort((a, b) => b.marka.localeCompare(a.marka));
  } else if (opt.value === "year1") {
    cars.sort((a, b) => a.il - b.il);
  } else if (opt.value === "year2") {
    cars.sort((a, b) => b.il - a.il);
  } else if (opt.value === "eng1") {
    cars.sort((a, b) => a.mator - b.mator);
  } else if (opt.value === "eng2") {
    cars.sort((a, b) => b.mator - a.mator);
  } else if (opt.value === "time1") {
    cars.sort((a, b) => a.id - b.id);
  } else if (opt.value === "time2") {
    cars.sort((a, b) => b.id - a.id);
  }
  showCars();
}

filter.onclick = function () {
  let minYear = minimum.value ? Number(minimum.value) : 0;
  let maxYear = maximum.value ? Number(maximum.value) : Infinity;
  let minPrice = minimum1.value ? Number(minimum1.value) : 0;
  let maxPrice = maximum1.value ? Number(maximum1.value) : Infinity;

  if (
    (minimum.value && isNaN(minYear)) ||
    (maximum.value && isNaN(maxYear)) ||
    (minimum1.value && isNaN(minPrice)) ||
    (maximum1.value && isNaN(maxPrice))
  ) {
    alert("Please enter valid numbers!");
    return;
  }

  cards.innerHTML = "";
  cardetails.innerHTML = "";

  cars
    .filter((item) => (option.value ? item.marka == option.value : true))
    .filter((item) => {
      const carYear = Number(item.il);
      const carPrice = Number(item.qiymet.replace(/\s/g, ""));

      const yearCondition = carYear >= minYear && carYear <= maxYear;
      const priceCondition = carPrice >= minPrice && carPrice <= maxPrice;

      return yearCondition && priceCondition;
    })
    .forEach((item) => {
      cards.innerHTML += `
        <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="relative">
              <img class="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" src="${item.img}" alt="${item.marka} ${item.model}">
              <div class="absolute top-3 right-3 bg-yellow-400 bg-opacity-80 text-xs font-semibold px-2 py-1 rounded-md text-black uppercase">
                Yeni
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-[22px] font-semibold text-gray-900 mb-2">${item.marka} ${item.model}</h3>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-calendar mr-1"></i> ${item.il}
                </span>
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-tachometer-alt mr-1"></i> ${item.mator}
                </span>
                <span class="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  <i class="fas fa-palette mr-1"></i> ${item.reng}
                </span>
              </div>
              <div class="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div class="text-[22px] font-bold text-green-700">${item.qiymet} ₼</div>
                <div class="flex space-x-2">
                  <a href="#" onclick="detailCars(${item.id}); event.preventDefault();" class="flex items-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors">
                    <i class="fa-solid fa-eye mr-2"></i> Bax
                  </a>
                  <a href="#" onclick="addBasket(${item.id}); event.preventDefault();" class="flex items-center justify-center w-9 h-9 bg-green-200 hover:bg-green-300 text-green-600 hover:text-green-800 rounded-lg transition-colors">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> 
      `;
    });
  loadBtn.style.display = "none";
};

reset.onclick = function () {
  location.reload();
};

function loadMore() {
  count += 4
  showCars()
  loadBtn.style.display = count >= cars.length ? "none" : "block"
}

function addCar() {
  carInput.style.display = "block";
  carContent.style.display = "none";
  carInput.innerHTML = `
    <input id="marka" type="text" placeholder="marka">
    <input id="model" type="text" placeholder="model">
    <input id="il" type="text" placeholder="il">
    <input id="mator" type="text" placeholder="mator">
    <input id="reng" type="text" placeholder="reng">
    <input id="qiymet" type="text" placeholder="qiymet">
    <input id="img" type="text" placeholder="photo linkini daxil et">
    <button onclick="addCarArray()">elave et</button>
  `;
}

function addCarArray() {
  const marka = document.getElementById("marka");
  const model = document.getElementById("model");
  const il = document.getElementById("il");
  const mator = document.getElementById("mator");
  const reng = document.getElementById("reng");
  const qiymet = document.getElementById("qiymet");
  const img = document.getElementById("img");
  if (
    marka.value.trim() !== "" &&
    model.value.trim() !== "" &&
    il.value.trim() !== "" &&
    mator.value.trim() !== "" &&
    reng.value.trim() !== "" &&
    qiymet.value.trim() !== "" &&
    img.value.trim() !== ""
  ) {
    cars.push({
      id: cars.length + 1,
      marka: marka.value.trim(),
      qiymet: qiymet.value.trim(),
      model: model.value.trim(),
      mator: mator.value.trim(),
      il: il.value.trim(),
      reng: reng.value.trim(),
      img: img.value.trim(),
    });
    marka.value = "";
    model.value = "";
    il.value = "";
    mator.value = "";
    reng.value = "";
    qiymet.value = "";
    img.value = "";
    carInput.style.display = "none";
    carContent.style.display = "block";
  } else {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  }
}

const basket = [];
function addBasket(id) {
  let obj = cars.find((item) => item.id == id);
  const alreadyInBasket = basket.find((item) => item.id == id);
  if (alreadyInBasket) {
    alreadyInBasket.count++;
    // console.log('Item added to basket:', obj)
  } else {
    obj = { ...obj, count: 1 };
    basket.push(obj);
    // console.log('Item already in basket')
  }
  // console.log('Current basket:', basket)
  showBasket();
}

function removeBasket(id) {
  const index = basket.findIndex((item) => item.id == id);
  basket.splice(index, 1);
  showBasket();
}

function handleCount(x, id) {
  const element = basket.find((item) => item.id == id);
  if (element.count + x >= 1) element.count += x;
  showBasket();
}

function showBasket() {
  const total = basket.reduce(
    (sum, item) => sum + Number(item.qiymet.replace(/\s/g, "")) * item.count,
    0
  );
  totalPrice.innerHTML = `Total: ${total} AZN`;
  sidebar.innerHTML = `
    <h2 class="cursor-pointer" onclick="toggleSidebar()"><i class="fa-solid fa-x mr-2"></i>Close</h2>  
    <div id="totalPrice">Total: ${total} ₼</div>
  `;
  basket.forEach((item) => {
    sidebar.innerHTML += `
      <div class="w-full p-4 bg-white rounded-lg shadow-2xl mb-6">
        <div class="flex max-md:flex-col items-center space-x-4">
          <img src="${item.img}" alt="car-img" class="md:w-1/3 w-36 h-40 object-cover rounded">
          <div class="flex-1 max-md:flex items-center max-md:flex-col">
            <h2 class="text-lg font-semibold">${item.marka}, ${item.model}</h2>
            <p class="text-gray-600">${item.mator}, ${item.il}</p>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="handleCount(-1, ${item.id})" class="px-2 py-1 bg-gray-200 rounded">-</button>
            <span class="text-lg font-semibold">${item.count}</span>
            <button onclick="handleCount(+1, ${item.id})" class="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
          <p class="text-lg font-semibold">${Number(item.qiymet.replace(/\s/g, "")) * item.count} ₼</p>
          <button 
            onclick="removeBasket(${item.id})" 
            class="p-2 flex items-center text-red-500 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors"
            title="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>Remove
          </button>
        </div>
      </div>
    `;
  });
}

function detailCars(id) {
  window.location.href = `http://127.0.0.1:5500/details.html?id=${id}`
}

showCars();
