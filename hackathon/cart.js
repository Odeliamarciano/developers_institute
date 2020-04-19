function cart(img, price, name){
    let cartD = document.getElementById('cart')
    arr.push(article.img, article.price, article.name);
    cartD.style.visibility = 'visible' ;
    cartD.innerHTML += `
    <div style='width: 80px ; height: 80px'>
        <h1>${article.name}</h1>
        <p>${article.price}</p>
        <img src='${article.img}'>
    </div>    `

// totalCart.push(Number(article.price))
// totalCart += articlePrice ;
// console.log(totalCart);
 }