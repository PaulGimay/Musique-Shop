const FileJson = 'http://ecommerce/assets/json/myJson.json'

fetch(FileJson)
.then(resp => resp.json())
.then(function(item){
    let col1 = document.createElement('div')
    col1.classList.add('col-4')
    col1.innerHTML = 
    `
        <div id="${item.vinyl[0].id}" data-name="${item.vinyl[0].vinyl_name}" data-price="${item.vinyl[0].price}" data-img="${item.vinyl[0].album_cover}" class="card h-100">
            <img src="${item.vinyl[0].vinyl_cover}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.vinyl[0].artist}</h5>
            <h6 class="card-title">${item.vinyl[0].album_name}</h6>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <small class="text-muted">${item.vinyl[0].price}</small>
            <button data-add="${item.vinyl[0].id}" type="button" class="btn btn-primary btn-sm ">Add Basket</button>
        </div>
        </div>
        `
        
        myrow1.append(col1)

    let col2 = document.createElement('div')
    col2.classList.add('col-4')
    col2.innerHTML = 
    `
        <div id="${item.equip[0].id}" data-name="${item.equip[0].product}" data-price="${item.equip[0].price}" data-img="${item.equip[0].front}" class="card h-100">
            <img src="${item.equip[0].angle}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.equip[0].brand}</h5>
            <h6 class="card-title">${item.equip[0].product}</h6>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <small class="text-muted">${item.equip[0].price}</small>
            <button data-add="${item.equip[0].id}" type="button" class="btn btn-primary btn-sm ">Add Basket</button>
        </div>
        </div>
        `
        
        myrow1.append(col2)

    let col3 = document.createElement('div')
    col3.classList.add('col-4')
    col3.innerHTML = 
    `
        <div id="${item.merch[0].id}" data-name="${item.merch[0].product}" data-price="${item.merch[0].price}" data-img="${item.merch[0].shirt}" class="card h-100">
            <img src="${item.merch[0].shirt}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.merch[0].product}</h5>
            <h6 class="card-title">${item.merch[0].product}</h6>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <small class="text-muted">${item.merch[0].price}</small>
            <button data-add="${item.merch[0].id}" type="button" class="btn btn-primary btn-sm ">Add Basket</button>
        </div>
        </div>
        `
        
        myrow1.append(col3)



        var Cart = []
        var total


    var allAddButtons = document.querySelectorAll('[data-add]')
    allAddButtons.forEach(element => {
        element.addEventListener('click', function(){
            let idParentOfBtn = document.getElementById(element.dataset.add)
            
            console.log(idParentOfBtn.dataset.name)
            console.log(idParentOfBtn.dataset.price)


            /************************ GENERATION JS DU PANIER ***************************/

            if(Cart.length > 0){
                console.log('panier deja existant')
                console.log(Cart)
                var count = 0 // on initialise un compteur pour vérif si notre panier contient déjà le produit
                Cart.forEach(element=>{

                    if(element[0] == idParentOfBtn.id){ // Si produit dans panier, alors augmente Qt
                        count++ // si le produit existe dans le panier, on ++
                        console.log('oui ça correspond')
                        console.table(Cart)
                        element[3]++
                        console.table(Cart)
                        total = Math.round( (total + parseFloat(element[2])) * 100) / 100
                    }

                })

                    if(count > 0) { // donc si count > 0, alors le produit n'est pas dans le panier donc on l'ajoute

                    } else { // Si produit n'est pas dans le panier, alors on l'ajoute
                        var qt = 1
                        var Product = [idParentOfBtn.id, idParentOfBtn.dataset.name, idParentOfBtn.dataset.price, qt, idParentOfBtn.dataset.img]
            
                        console.log(Product)
                
                        Cart.push(Product)
                
                        console.table(Cart)
                        total = Math.round((total + parseFloat(idParentOfBtn.dataset.price)) * 100) / 100
                    }
                
            } else { // Première fois que l'on arrive dans le panier (vide)

                console.log('panier vide, donc ajout')
                var qt = 1
                var Product = [idParentOfBtn.id, idParentOfBtn.dataset.name, idParentOfBtn.dataset.price, qt, idParentOfBtn.dataset.img]
    
                console.log(Product)
        
                Cart.push(Product)
        
                console.table(Cart )

                total = parseFloat(idParentOfBtn.dataset.price)

            }



            /************************ GENERATION HTML DU PANIER ***************************/

            while(myrow2.hasChildNodes()){
                myrow2.removeChild(myrow2.firstChild)
            }            

            Cart.forEach((element,i) => {
                console.log(total)

                let row = document.createElement('div')
                row.classList.add('row')
                myrow2.append(row)
    
                row.innerHTML = 
                    `
                <div data-cart-item="${element[0]}" data class="row">
                <div class="col d-flex justify-content-around">
                    <div><img src="${element[4]}"></div>
                    <div data-cart-name="${element[1]}">${element[1]}</div>
                    <div data-cart-price="${element[2]}">${element[2]}</div>
                    <div data-cart-qt-id="${element[0]}" data-cart-qt="${element[3]}">${element[3]}</div>
                    <div><button data-plus="${element[0]}">+</button><button data-minus="${element[0]}">-</button></div>
                    <div><button data-trash="${element[0]}">TRASH</button></div>

                </div>
                </div>
                `
                
                
                let btnPlus = document.querySelector(`[data-plus="${element[0]}"`)
                let btnMinus = document.querySelector(`[data-minus="${element[0]}"`)
                let divQt = document.querySelector(`[data-cart-qt-id="${element[0]}"`)

                // console.log(btnPlus.dataset.plus)
                // console.log(divQt.dataset.cartQt)

                btnPlus.addEventListener('click', function(){
                    if(element[3]++ < 10){
                        // console.log(element[3])
                        element[3]
                        total = Math.round( (total + parseFloat(element[2])) * 100) / 100
                        // console.log(element[3])
                        divQt.dataset.cartQt = element[3]
                        divQt.innerHTML = element[3]
                        // console.log(divQt.dataset.cartQt)
                        // console.table(element)
                        console.table(Cart)
                        console.log(total)

                    } else {
                        alert('Vous ne pouvez achetez plus de 10 fois le même article')
                    }
                })

                btnMinus.addEventListener('click', function(){
                    if(element[3]-- > 1){
                        // console.log(element[3])
                        element[3]
                        // console.log(element[3])
                        divQt.dataset.cartQt = element[3]
                        divQt.innerHTML = element[3]
                        // console.log(divQt.dataset.cartQt)
                        // console.table(element)
                        console.table(Cart)
                        total = Math.round( (total - parseFloat(element[2])) * 100) / 100
                        console.log(total)
                        
                    } else {
                        let minusBtn = document.querySelector(`[data-minus=${CSS.escape(element[0])}]`)
                        let idParentOfMinus = document.querySelector(`[data-cart-item=${CSS.escape(minusBtn.dataset.minus)}]`)
                        // console.log(idParentOfMinus)
                        idParentOfMinus.remove()
                        // console.table(Cart)
                        Cart.splice(i,1)
                        total = Math.round( (total - parseFloat(element[2])) * 100) / 100
                        console.table(Cart)
                        console.log(total)
                    }
                })
            })

            var TrashButtons = document.querySelectorAll('[data-trash]')
            
            TrashButtons.forEach(element => {
              element.addEventListener('click', function(){
                let idParentOfTrash = document.querySelector(`[data-cart-item=${CSS.escape(element.dataset.trash)}]`)
                idParentOfTrash.remove()

                Cart.forEach((element,i)=>{
                    if(element[0] == idParentOfTrash.dataset.cartItem){
                        total = Math.round((total - parseFloat(element[3]) * parseFloat(element[2])) * 100) / 100
                        Cart.splice(i,1)
                        
                    }
                })
                console.log(Cart)
                console.log(total)


              })  
            })

        })

    })

})

.catch(function(){
    console.log('error')
})
