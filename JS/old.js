//function after click on + btn it display the order
function handlePlusBtn(menuId) {
  //variable for storing innerHTML to it
  let orderHtml = "";

  //target specify id from array data
  const targetObj = menuArray.filter((item) => {
    return item.id === menuId;
  })[0];

  //push the targetObj to the array ordeItems
  orderItems.push(targetObj);

  console.log(orderItems);

  //call the function for sum the price
  sumPrice();

  //set the variable to boiler plate
  orderHtml += `
      <div class="order-item">
          <h1>${targetObj.name}</h1>
          <button class="order-remove-btn" data-remove="${targetObj.id}">remove</button>
          <h2>${targetObj.price} €</h2>
      </div>    
    `;

  //render it to the html of order section
  order.innerHTML += orderHtml;
}

//sum the price in array
function sumPrice() {
  const targetObjSum = orderItems.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);
  //write the sum to the h2 order-sum
  orderSum.textContent = targetObjSum + " €";
}

//function for remove order item from array
function handleDeleteItem(orderId) {
  //go to array and filter out the same id as was clicked
  const targetDeleteObj = orderItems.filter((item) => {
    return item.id === orderId;
  })[0];

  console.log(targetDeleteObj);

  //remove from orderItems array target object
  orderItems.splice(targetDeleteObj, 1);
}
