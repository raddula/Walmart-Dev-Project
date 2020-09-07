function updatePage() {
    updateUser();
    listOfItems();
}
function updateUser() {
    var userName = localStorage.getItem("userName")
    document.getElementById('user').innerText = "Hi " + userName;
}
function listOfItems() {
    var products = ["item1.jpeg" , "item2.jpeg" , "item3.jpeg", "item4.jpeg" , "item5.jpeg", "item6.jpeg", "item7.jpeg", "item8.jpeg" , "item9.jpeg", "item10.jpeg" , "item11.jpeg", "item12.jpeg", "item13.jpeg"]
    var ul = document.getElementById("items");
    products.map(function(item) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src", item); 
        img.setAttribute("alt", item); 
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