let articles = [
    {"id": "1" , "name" : "Bread", "price" : 6.50, "img" : "https://www.berman.co.il/wp-content/uploads/2018/04/Haretz_D_5_N.jpg" },
    {"id": "2" , "name" : "Water", "price" : 15.90, "img" : "https://www.jafora.co.il/wp-content/uploads/2017/07/shrink_6_0.5_liter.png" },
    {"id": "3" , "name" : "M&m's", "price" : 4.90, "img" : "https://www.monoprix.fr/assets/images/grocery/2811311/580x580.jpg?impolicy=High_Grocery"},
    {"id": "4" , "name" : "Olive Oil", "price" : 27.50, "img" : "https://m.pricez.co.il/ProductPictures/7290105368713.jpg" },
    {"id": "5" , "name" : "Tomatoes", "price" : 4.90, "img" : "https://img.freepik.com/photos-gratuite/tomate-rouge-fraiche-isole-blanc_1205-548.jpg?size=626&ext=jpg" },
    {"id": "6" , "name" : "Pasta", "price" : 3.90, "img" : "https://www.hsg.co.il/gallery/sideDish_0037_curly-308x308.png"},
    {"id": "7" , "name" : "Nutella", "price" : 15.50, "img" : "https://www.carrefour.fr/media/540x540/Photosite/PGC/EPICERIE/3017620420047_PHOTOSITE_20200328_045622_0.jpg?placeholder=1" },
    {"id": "8" , "name" : "Milk", "price" : 6.00, "img" : "https://m.pricez.co.il/ProductPictures/7290000056845.jpg" },
    {"id": "9" , "name" : "Coffee", "price" : 22.90, "img" : "https://osemcat.signature-it.com//images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/12355615/Custom/12355615_7613036314114.png"},
    {"id": "10" , "name" : "Sugar", "price" : 3.90, "img" : "https://mdyo.co.il/i/7931.jpg" },
    {"id": "11" , "name" : "Salade Lettuce", "price" : 4.90, "img" : "https://brinadavid.co.il/wp-content/uploads/2019/06/%D7%97%D7%A1%D7%94-%D7%A2%D7%A8%D7%91%D7%99%D7%AA.jpg" },
    {"id": "12" , "name" : "Ketshup", "price" : 6.90, "img" : "https://m.pricez.co.il/ProductPictures/8715700419732.jpg"}
]

let p = [] ; 


 function display(articles) {

     let a = document.getElementById('container') ;

     articles.forEach(article => {  
        
         
        let div = document.createElement('div');
            div.classList.add('col');
            

        let aname = document.createElement('h4');
        let articleName = document.createTextNode(`${article.name}`);
            aname.appendChild(articleName);
            div.appendChild(aname); 

        let price = document.createElement('h5');
        let articlePrice = document.createTextNode(`${article.price}`);
            price.appendChild(articlePrice);
            div.appendChild(price);

        let image = document.createElement('img');
            image.src = `${article.img}` ;
            div.appendChild(image); 
        
        let btn = document.createElement('button') ;
            btn.innerHTML = ('Add to cart');
            div.appendChild(btn);
        

            let arr = [] ;
            
            

            btn.onclick = function cart(img, price, name){
            
                let cartD = document.getElementById('cart')
                arr.push(article.img, article.price, article.name);
                cartD.style.visibility = 'visible' ;
                cartD.innerHTML += `
                <div style='width: 80px ; height: 80px'>
                    <h1>${article.name}</h1>
                    <p>${article.price}</p>
                    <img src='${article.img}'>
                </div>  `
               
                p.push(article.price);
                console.log(p)
                let totalCart = 0;

               for (let i = 0; i < p.length; i++) {
                let totalcartt = document.getElementById('totalCartt')
                totalCart += p[i]
                totalcartt.innerHTML = ` <p> total : ${Math.round((totalCart) * 100) / 100}</p>`
                console.log(totalCart)
                } 

             }

            document.body.appendChild(a);
            a.appendChild(div);
    });
      

    
}

display(articles)

function hiddenCart() {
    document.getElementById('cart').style.visibility = 'hidden'

}

function showCart() {
    document.getElementById('cart').style.visibility = 'visible'

}
