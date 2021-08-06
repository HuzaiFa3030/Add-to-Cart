let allData = document.getElementById('get_products')

var data = JSON.parse(localStorage.getItem('carts'))

for (var i = 0; i < data.length; i++) {
    allData.innerHTML += `
    <div class="card" style="width: 18rem;">
<img src="${data[i].image}" class="card-img-top" alt="Your browser doesn't supported this image">
<div class="card-body">
    <h5 class="card-title">${data[i].discription}</h5>
    <p class="card-text">${data[i].price}</p>
</div>
</div>`
}

