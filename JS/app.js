import { menuArray } from "/JS/data.js";

const menu = document.querySelector(".menu");
const orderSection = document.querySelector(".order");
const order = document.querySelector(".order-pick");
const orderSum = document.querySelector(".order-sum");
const modal = document.querySelector(".modal");

//store the clicked menu item
let storeOrder = [];

//function for looping throught the data
function getData(data) {
  let dataToHtml = "";

  data.forEach((item) => {
    //object destructor for array objects properties
    const { name, description, id, price, bikeImg } = item;

    dataToHtml += `
    <div class="container">
      <div class="menu-container">
        <div class="bike-img-container">
          <img class="bike-img" src=${bikeImg}>
        </div>
        <div class="bike-info">
            <h1>${name}</h1>
            <p>${description}</p>
            <h2>${price} €</h2>
        </div>        
        <button class="plus-btn" data-add="${id}">+</button>
      </div>
    </div>`;
  });
  return dataToHtml;
}

//function to render data
function renderData(data) {
  const dataToRender = getData(data);
  menu.innerHTML = dataToRender;
}
//call function for render the menu
renderData(menuArray);

//get order data from array
function getOrderDataArr(orders) {
  let orderPick = "";
  //loop throught array where we storing orders
  orders.forEach((item, index) => {
    orderPick += `
    <div class="order-item">
        <h1>${item.name}</h1>
        <button class="order-remove-btn" data-remove="${index}">remove</button>
        <h2>${item.price} €</h2>
    </div>    
  `;
  });
  return orderPick;
}
//function for render the order
function renderOrder(orders) {
  //store the functions
  const orderToRender = getOrderDataArr(orders);
  const renderOrderPrice = totalPrice(orders);
  //display the functions in order section and total price
  order.innerHTML = orderToRender;
  orderSum.textContent = renderOrderPrice + " €";
}

//listen for clicks on specific btns
document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    handlePlusClick(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    deleteStoreOrder(e.target.dataset.remove);
  } else if (e.target.id === "complete-order-btn") {
    //show the modal after click
    modal.showModal();
  } else if (e.target.id === "pay-btn") {
    //if function validateForm returns true make an pay order
    if (validateForm()) {
      e.preventDefault();
      // Close modal
      modal.close();
      // Display thank you message
      thankYou();
    }
    //close modal when you click on it background
  } else if (e.target.id === "myModal") {
    modal.close();
  }
});

//function handle plus click
function handlePlusClick(dataId) {
  //remove hidden class from order section
  orderSection.classList.remove("hidden");
  //filter from menuArray if id from data attribute is same as was click
  const targetObjToAdd = menuArray.filter((items) => {
    return items.id === dataId;
  })[0];
  //push the filter targetObj to the array
  storeOrder.push(targetObjToAdd);
  //update the order section
  renderOrder(storeOrder);
}

//function for sum order the total price
function totalPrice(price) {
  let total = 0;
  //loop throught storeOrder array and add property price number to total
  price.forEach((item) => {
    total += item.price;
  });
  //return total price
  return total;
}

//function for deleting item from order array
function deleteStoreOrder(removeId) {
  //remove object from array by id
  storeOrder.splice(removeId, 1);
  //update the renderOrder function
  renderOrder(storeOrder);
  //if array length is equal to 0 hide the order section
  if (storeOrder.length === 0) {
    //add hidden class from order section
    orderSection.classList.add("hidden");
  }
}

//Cant get to work the form with just required in HTML so i write a function that checks if inputfields had a required in their attribute and if does change boolean isFill to false
function validateForm() {
  // Get all the input fields in the form (nodeList)
  const inputsInModal = document.querySelectorAll("form input");
  // Initialize a variable to keep track of whether the form is fill
  let isFill = true;

  // Loop through each input field
  inputsInModal.forEach((item) => {
    if (item.hasAttribute("required") && item.value === "") {
      isFill = false;
    }
  });
  // Return the result
  return isFill;
}

//thank you after ordering
function thankYou() {
  orderSection.innerHTML = `
  <h1> Your dream bike is on the way! Thank you for your order! </h1>`;
}
