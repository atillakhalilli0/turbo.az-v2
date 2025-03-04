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
    alert("Butun bosluqlari doldur!");
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
    <div id="totalPrice">Total: ${total} AZN</div>
  `;
  basket.forEach((item) => {
    sidebar.innerHTML += `
      <div class="bg-slate-400 rounded-lg px-8 mb-4 py-3 flex justify-between gap-4">
          <div class="flex gap-4">
              <img class="w-[250px] h-[200px] rounded-lg object-cover" src="${
                item.img
              }" alt="car-img">
              <div class="flex flex-col">
                  <h1>${item.marka}, ${item.model}</h1>
                  <h1>Ili: ${item.il}</h1>
                  <h1>Motor: ${item.mator}</h1>
                  <h1 class="flex gap-4"><span class="cursor-pointer px-3 bg-blue-700 rounded text-white" onclick="handleCount(-1, ${
                    item.id
                  })">-</span>Sayi: ${
      item.count
    }<span class="cursor-pointer px-3 bg-blue-700 rounded text-white" onclick="handleCount(+1, ${
      item.id
    })">+</span></h1>
              </div>
          </div>
          <div>
              <h1>${item.qiymet} AZN</h1>
              <h1>${Number(item.qiymet.replace(/\s/g, "")) * item.count}</h1>
              <button onclick="removeBasket(${
                item.id
              })" class="rounded-2xl font-bold text-[20px] p-3 text-white border-[2px] border-black bg-red-600" type="button">remove</button>
          </div>
      </div>
    `;
  });
}
function detailCars(id) {
  search.value = "";
  loadBtn.style.display = "none";
  cards.innerHTML = "";
  const car = cars.find((item) => item.id == id);
  cardetails.innerHTML = `
  <div class="flex justify-between items-center mb-6 md:flex-nowrap gap-4">
          <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">
            ${car.marka} ${car.model} <span class="text-gray-600">${car.il}, ${car.mator}, ${car.reng}</span>
          </h1>
          <div class="flex gap-6 items-center">
            <button class="flex items-center gap-2 text-gray-700 hover:text-red-500 transition group">
              <i class="fa-regular fa-heart text-xl group-hover:scale-110 transition-transform"></i>
              <span class="font-medium">Seçilmişlərdə saxla</span>
            </button>
            <button class="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition group">
              <i class="fa-regular fa-flag text-xl group-hover:scale-110 transition-transform"></i>
              <span class="font-medium">Şikayət et</span>
            </button>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="bg-white rounded-xl overflow-hidden shadow-lg flex max-md:flex-col">
          <!-- Image Section -->
          <div class="w-full lg:w-3/5 relative">
            <div class="absolute top-3 right-3 bg-yellow-400 bg-opacity-80 text-xs font-semibold px-2 py-1 rounded-md text-black uppercase">
                Yeni
              </div>
            <img class="w-full h-[400px] md:h-[500px] object-cover" src="${car.img}" alt="${car.marka} ${car.model}">
          </div>
          
          <!-- Details Section -->
          <div class="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col">
            <!-- Price -->
            <div class="mb-6">
              <span class="text-sm text-gray-500 mb-1 block">Qiymət</span>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800">${car.qiymet} ₼</h2>
            </div>
            
            <!-- Seller Info -->
            <div class="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
              <div>
                <span class="text-sm text-gray-500 block">Satıcı</span>
                <h3 class="text-xl font-medium text-gray-800">Alverci Elvin</h3>
              </div>
              <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <i class="fa-solid fa-user text-2xl text-gray-500"></i>
              </div>
            </div>
            
            <!-- Actions -->
            <div class="space-y-3 mb-6">
              <button onclick="addBasket(${car.id})" type="button" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg">
                <i class="fas fa-shopping-cart"></i>
                <span>Səbətə əlavə et</span>
              </button>
              
              <button class="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                <span class="block text-lg font-medium mb-1">Nömrəni göstər</span>
                <span class="flex items-center justify-center text-base">
                  <i class="fa-solid fa-phone mr-2"></i>
                  +994-50-278-63-••
                </span>
              </button>
            </div>
            
            <!-- Promotion Options -->
            <div class="mt-auto">
              <h4 class="text-sm text-gray-500 mb-3">Elanı irəli çəkmək üçün</h4>
              <div class="grid grid-cols-3 gap-3">
                <div class="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-blue-400 hover:shadow-md transition cursor-pointer group">
                  <div class="font-bold text-gray-700 group-hover:text-blue-600 transition">İrəli çək</div>
                  <div class="text-sm text-gray-600 flex items-center justify-center mt-1">
                    3 ₼-dən 
                    <span class="text-green-500 ml-1 group-hover:scale-110 transition-transform">
                      <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </span>
                  </div>
                </div>
                
                <div class="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-blue-400 hover:shadow-md transition cursor-pointer group">
                  <div class="font-bold text-gray-700 group-hover:text-blue-600 transition">VIP</div>
                  <div class="text-sm text-gray-600 flex items-center justify-center mt-1">
                    5 ₼-dən
                    <span class="text-red-500 ml-1 group-hover:scale-110 transition-transform">
                      <i class="fa-solid fa-gem"></i>
                    </span>
                  </div>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-blue-400 hover:shadow-md transition cursor-pointer group">
                  <div class="font-bold text-gray-700 group-hover:text-blue-600 transition">Premium</div>
                  <div class="text-sm text-gray-600 flex items-center justify-center mt-1">
                    7 ₼-dən
                    <span class="text-yellow-500 ml-1 group-hover:scale-110 transition-transform">
                      <i class="fa-solid fa-crown"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Car Specifications -->
        <div class="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Avtomobilin xüsusiyyətləri</h3>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i class="fas fa-calendar text-blue-600"></i>
              </div>
              <div>
                <div class="text-sm text-gray-500">İl</div>
                <div class="font-medium">${car.il}</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i class="fas fa-tachometer-alt text-blue-600"></i>
              </div>
              <div>
                <div class="text-sm text-gray-500">Mühərrik</div>
                <div class="font-medium">${car.mator}</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i class="fas fa-palette text-blue-600"></i>
              </div>
              <div>
                <div class="text-sm text-gray-500">Rəng</div>
                <div class="font-medium">${car.reng}</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i class="fas fa-gas-pump text-blue-600"></i>
              </div>
              <div>
                <div class="text-sm text-gray-500">Yanacaq</div>
                <div class="font-medium">Benzin</div>
              </div>
            </div>
          </div>
        </div>
  `;
}

showCars();
