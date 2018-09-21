for (var i = 0; i < obj.product.length; i++) {

    document.getElementById('divo1').innerHTML += "<div id='demo'><img getElementById'img' src='" + obj.product[i].url + "' width='300' height='300'</div><p id='price'> " + obj.product[i].price + "$" +
        "</p>" + "<button>Add to Cart</button>" + "<button onclick='remove()'>Delete Item</button>";
}

function remove(t) {
    var x = document.getElementById('demo');
    x.remove();

}