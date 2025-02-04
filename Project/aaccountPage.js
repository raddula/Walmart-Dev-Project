function updatePage() {
    updateUser();
    listOfItems();
}
function updateUser() {
    var userName = localStorage.getItem("userName")
    document.getElementById('user').innerText = "Hi " + userName;
}
function listOfItems() {
    var products = ["products/item1.jpeg" , "products/item2.jpeg" , "products/item3.jpeg", "products/item4.jpeg" , "products/item5.jpeg", "products/item6.jpeg", "products/item7.jpeg", "products/item8.jpeg" , "products/item9.jpeg", "products/item10.jpeg" , "products/item11.jpeg", "products/item12.jpeg", "products/item13.jpeg"]
    var ul = document.getElementById("items");
    products.map(function(item) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src", item); 
        var res = item.split('/');
        img.setAttribute("alt", res[1]); 
        li.appendChild(img);
        ul.appendChild(li);
    });
}

onclick = function(event) {
    let target = event.target;
    if (target.tagName != 'IMG') return;
    alert(target.alt + " is clicked");
}
  window.onload = updatePage;