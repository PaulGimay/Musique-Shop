const FileJson = 'https://paulgimay.github.io/Musique-Shop//assets/json/myJson.json'

fetch(FileJson)
.then(resp => resp.json())
.then(function(item){

/********************************* GENERATING LAYOUT **************************************/

/******************** VINYL LAYOUT ********************/
    let vinylCat = document.createElement('div')
    vinylCat.classList.add('row','px-md-5')
    document.querySelector('.VINYL').append(vinylCat)

    for(i=0;i<4;i++){
        let vinylcolCat = document.createElement('div')
        vinylcolCat.classList.add('col-sm-6','mb-5','col-md-5','col-lg-6','col-xl-3','VINYLcolCard')
        vinylCat.append(vinylcolCat)
    }

    for(i=0;i<2;i++){
        let vinylclone = vinylCat.cloneNode(true)
        document.querySelector('.VINYL').append(vinylclone)
        
    }

    let VINYLcolCARD = document.querySelectorAll('.VINYLcolCard')

    VINYLcolCARD.forEach(element=>{
        element.innerHTML =
        `
        <div id="" data-name="" data-price="" data-img="" class="shadowcard card border-0 my-3 cardRadius datavinyl" >
            <div class="row g-0">
                <div class="col-6 col-lg-6 col-xl-12 h-xl-100 col-xxl-6">
                    <img data-img-vinyl="" data-bs-toggle="modal" data-bs-target="" src="" class="cardRadius w-100 handCursor">
                </div>
                <div class="col-6 col-lg-6 col-xl-12 h-xl-100 col-xxl-6 p-1 d-flex flex-wrap justify-content-between">
                        <div class="row"><div data-artist="" class="fontContent"></div></div>
                        <div class="row"><div data-vinyl-namehtml="" class="fw-bold fontContent"></div></div>
                        <div class="row"><div data-price-vinylhtml="" class="fs-5 mt-2 mb-1 fontContent text-end"></div></div>
                        <div class="row w-100"><div data-add="" class="addvinyl text-center"><button type="button" class="fontContent text-white cardBtnRadius btn btn-sm bgPinkDark">Ajouter au Panier</button></div></div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade datavinylmodal" id="" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header p-0">
                  <img data-img-vinylmodal="" src="" class="cardRadius w-100">
              </div>
              <div class="modal-body">
                  <div class="row"><div data-vinyl-namehtmlmodal="" class="fs-4 fw-bold fontContent"></div></div>
                  <div class="row"><div data-artistmodal="" class="fs-5 fontContent"></div></div>
                  <div class="row"><div class="fw-bold mt-3 fontContent">Packaging and Shipment</div></div>
                  <div class="row"><div class="fontContent">Each record is protected within its record sleeve by a white vellum anti-dust sleeve. Every record is shipped in original factory-applied shrink wrap.</div></div>
                  <div class="row"><div data-price-vinylhtmlmodal="" class="fs-5 mt-2 mb-1 fontContent text-end"></div></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary cardBtnRadius" data-bs-dismiss="modal">Close</button>
                <button data-add="" type="button" class="addmodal fontContent text-white cardBtnRadius btn bgPinkDark">Ajouter au Panier</button>
              </div>
            </div>
          </div>
        </div>
        `
    })

    let Datavinyl = document.querySelectorAll('.datavinyl')
    let Imgsvinyl = document.querySelectorAll('[data-img-vinyl]')
    let Artist = document.querySelectorAll('[data-artist]')
    let VinylHTML = document.querySelectorAll('[data-vinyl-namehtml]')
    let PricevinylHTML = document.querySelectorAll('[data-price-vinylhtml]')
    let Add = document.querySelectorAll('.addvinyl')

    let Datavinylmodal = document.querySelectorAll('.datavinylmodal')
    let Imgsvinylmodal = document.querySelectorAll('[data-img-vinylmodal]')
    let Artistmodal = document.querySelectorAll('[data-artistmodal]')
    let VinylHTMLmodal = document.querySelectorAll('[data-vinyl-namehtmlmodal]')
    let PricevinylHTMLmodal = document.querySelectorAll('[data-price-vinylhtmlmodal]')
    let Addmodal = document.querySelectorAll('.addmodal')
    let Targetvinylmodal = document.querySelectorAll('.VINYL [data-bs-target]')
    
    item.vinyl.forEach((item,i)=>{
        Datavinyl[i].id = item.id
        Datavinyl[i].dataset.name = item.vinyl_name
        Datavinyl[i].dataset.price = item.price
        Datavinyl[i].dataset.img = item.album_cover
        Imgsvinyl[i].src = item.vinyl_cover
        Artist[i].innerHTML = item.artist
        VinylHTML[i].innerHTML = item.vinyl_name
        PricevinylHTML[i].innerHTML = item.price + ' €'
        Add[i].dataset.add = item.id

        Datavinylmodal[i].id = 'modal'+item.id
        Datavinylmodal[i].dataset.name = item.vinyl_name
        Datavinylmodal[i].dataset.price = item.price
        Datavinylmodal[i].dataset.img = item.album_cover
        Imgsvinylmodal[i].src = item.album_cover
        Artistmodal[i].innerHTML = item.artist
        VinylHTMLmodal[i].innerHTML = item.vinyl_name
        PricevinylHTMLmodal[i].innerHTML = item.price + ' €'
        Addmodal[i].dataset.add = 'modal'+item.id
        Targetvinylmodal[i].dataset.bsTarget = '#modal'+item.id
    })

/******************** HIFI LAYOUT ********************/
let hifiCat = document.createElement('div')
hifiCat.classList.add('row','px-md-5')
document.querySelector('.HIFI').append(hifiCat)

for(i=0;i<4;i++){
    let hificolCat = document.createElement('div')
    hificolCat.classList.add('col-sm-6','mb-5','mb-5','col-md-5','col-lg-6','col-xl-3','HIFIcolCard')
    hifiCat.append(hificolCat)
}

for(i=0;i<1;i++){
    let hificlone = hifiCat.cloneNode(true)
    document.querySelector('.HIFI').append(hificlone)
    
}

let HIFIcolCARD = document.querySelectorAll('.HIFIcolCard')

HIFIcolCARD.forEach(element=>{
    element.innerHTML =
    `
    <div id="" data-name="" data-price="" data-img="" class="shadowcard card border-0 my-3 cardRadius datahifi" >
        <div class="row g-0">
            <div class="col-6 col-lg-6 col-xl-12 h-xl-100 col-xxl-6">
                <img data-img-angle-equip="" data-bs-toggle="modal" data-bs-target="" src="" class="cardRadius w-100 handCursor">
            </div>
            <div class="col-6 col-lg-6 col-xl-12 h-xl-100 col-xxl-6">
                <div class="card-body p-1">
                    <div class="row"><div data-brand-equip="" class="fontContent"></div></div>
                    <div class="row"><div data-product-equiphtml="" class="fw-bold fontContent"></div></div>
                    <div class="row"><div data-price-equiphtml="" class="fs-5 mt-2 mb-1 fontContent text-end"></div></div>
                    <div class="row w-100"><div data-add="" class="addequip text-center"><button type="button" class="fontContent text-white cardBtnRadius btn btn-sm bgBlueDark">Ajouter au Panier</button></div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade datahifimodal" id="" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
              <img data-img-angle-equipmodal="" src="" class="cardRadius w-100">
          </div>
          <div class="modal-body">
              <div class="row"><div data-product-equiphtmlmodal="" class="fs-4 fw-bold fontContent"></div></div>
              <div class="row"><div data-brand-equipmodal="" class="fs-5 fontContent"></div></div>
              <div class="row"><div class="fw-bold mt-3 fontContent">Packaging and Shipment</div></div>
              <div class="row"><div class="fontContent">Each record is protected within its record sleeve by a white vellum anti-dust sleeve. Every record is shipped in original factory-applied shrink wrap.</div></div>
              <div class="row"><div data-price-equiphtmlmodal="" class="fs-5 mt-2 mb-1 fontContent text-end"></div></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary cardBtnRadius" data-bs-dismiss="modal">Close</button>
            <button data-add="" type="button" class="addequipmodal fontContent text-white cardBtnRadius btn bgBlueDark">Ajouter au Panier</button>
          </div>
        </div>
      </div>
    </div>
    `
})

let Datahifi = document.querySelectorAll('.datahifi')
let Imgsequip = document.querySelectorAll('[data-img-angle-equip]')
let Brandequip = document.querySelectorAll('[data-brand-equip]')
let ProductequipHTML = document.querySelectorAll('[data-product-equiphtml]')
let PriceequipHTML = document.querySelectorAll('[data-price-equiphtml]')
let Addequip = document.querySelectorAll('.addequip')

let Datahifimodal = document.querySelectorAll('.datahifimodal')
let Imgsequipmodal = document.querySelectorAll('[data-img-angle-equipmodal]')
let Brandequipmodal = document.querySelectorAll('[data-brand-equipmodal]')
let ProductequipHTMLmodal = document.querySelectorAll('[data-product-equiphtmlmodal]')
let PriceequipHTMLmodal = document.querySelectorAll('[data-price-equiphtmlmodal]')
let Addequipmodal = document.querySelectorAll('.addequipmodal')
let Targetequipmodal = document.querySelectorAll('.HIFI [data-bs-target]')

item.equip.forEach((item,i)=>{
    Datahifi[i].id = item.id
    Datahifi[i].dataset.name = item.product
    Datahifi[i].dataset.price = item.price
    Datahifi[i].dataset.img = item.front
    Imgsequip[i].src = item.angle
    Brandequip[i].innerHTML = item.brand
    ProductequipHTML[i].innerHTML = item.product
    PriceequipHTML[i].innerHTML = item.price + ' €'
    Addequip[i].dataset.add = item.id

    Datahifimodal[i].id = 'modal'+item.id
    Datahifimodal[i].dataset.name = item.product
    Datahifimodal[i].dataset.price = item.price
    Datahifimodal[i].dataset.img = item.front
    Imgsequipmodal[i].src = item.angle
    Brandequipmodal[i].innerHTML = item.brand
    ProductequipHTMLmodal[i].innerHTML = item.product
    PriceequipHTMLmodal[i].innerHTML = item.price + ' €'
    Addequipmodal[i].dataset.add = 'modal'+item.id
    Targetequipmodal[i].dataset.bsTarget = '#modal'+item.id
})

/******************** MERCH LAYOUT ********************/
let merchCat = document.createElement('div')
merchCat.classList.add('row','px-md-5')
document.querySelector('.MERCH').append(merchCat)

for(i=0;i<4;i++){
    let hificolCat = document.createElement('div')
    hificolCat.classList.add('col-sm-6','mb-5','mb-5','col-md-5','col-lg-6','col-xl-3','MERCHcolCard')
    merchCat.append(hificolCat)
}

for(i=0;i<2;i++){
    let merchclone = merchCat.cloneNode(true)
    document.querySelector('.MERCH').append(merchclone)
    
}

let MERCHcolCARD = document.querySelectorAll('.MERCHcolCard')

MERCHcolCARD.forEach(element=>{
    element.innerHTML =
    `
    <div id="" data-name="" data-price="" data-img="" class="shadowcard card border-0 my-3 cardRadius datamerch" >
        <div class="row g-0">
            <div class="col-6 col-lg-6 col-xl-12 h-xl-100 col-xxl-6">
                <img data-img-angle-merch="" data-bs-toggle="modal" data-bs-target="" src="" class="cardRadius w-100 handCursor">
            </div>
            <div class="col-6 col-lg-6 col-xl-12 h-xl-100 col-xxl-6">
                <div class="card-body p-1">
                    <div class="row"><div data-product-merchhtml="" class="fw-bold fontContent"></div></div>
                    <div class="row"><div data-price-merchhtml="" class="fs-5 mt-2 mb-1 fontContent text-end"></div></div>
                    <div class="row w-100"><div data-add="" class="addmerch text-center"><button type="button" class="fontContent text-white cardBtnRadius btn btn-sm bgOrangeDark">Ajouter au Panier</button></div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade datamerchmodal" id="" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
              <img data-img-angle-merchmodal="" src="" class="cardRadius w-100">
          </div>
          <div class="modal-body">
              <div class="row"><div data-product-merchhtmlmodal="" class="fs-4 fw-bold fontContent"></div></div>
              <div class="row"><div class="fw-bold mt-3 fontContent">Packaging and Shipment</div></div>
              <div class="row"><div class="fontContent">Each record is protected within its record sleeve by a white vellum anti-dust sleeve. Every record is shipped in original factory-applied shrink wrap.</div></div>
              <div class="row"><div data-price-merchhtmlmodal="" class="fs-5 mt-2 mb-1 fontContent text-end"></div></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary cardBtnRadius" data-bs-dismiss="modal">Close</button>
            <button data-add="" type="button" class="addmerchmodal fontContent text-white cardBtnRadius btn bgOrangeDark">Ajouter au Panier</button>
          </div>
        </div>
      </div>
    </div>
    `
})

let Datamerch = document.querySelectorAll('.datamerch')
let Imgsmerch = document.querySelectorAll('[data-img-angle-merch]')
let ProductmerchHTML = document.querySelectorAll('[data-product-merchhtml]')
let PricemerchHTML = document.querySelectorAll('[data-price-merchhtml]')
let Addmerch = document.querySelectorAll('.addmerch')

let Datamerchmodal = document.querySelectorAll('.datamerchmodal')
let Imgsmerchmodal = document.querySelectorAll('[data-img-angle-merchmodal]')
let ProductmerchHTMLmodal = document.querySelectorAll('[data-product-merchhtmlmodal]')
let PricemerchHTMLmodal = document.querySelectorAll('[data-price-merchhtmlmodal]')
let Addmerchmodal = document.querySelectorAll('.addmerchmodal')
let Targetmerchpmodal = document.querySelectorAll('.MERCH [data-bs-target]')

item.merch.forEach((item,i)=>{
    Datamerch[i].id = item.id
    Datamerch[i].dataset.name = item.product
    Datamerch[i].dataset.price = item.price
    Datamerch[i].dataset.img = item.shirt
    Imgsmerch[i].src = item.shirt
    ProductmerchHTML[i].innerHTML = item.product
    PricemerchHTML[i].innerHTML = item.price + ' €'
    Addmerch[i].dataset.add = item.id

    Datamerchmodal[i].id = 'modal'+item.id
    Datamerchmodal[i].dataset.name = item.product
    Datamerchmodal[i].dataset.price = item.price
    Datamerchmodal[i].dataset.img = item.front
    Imgsmerchmodal[i].src = item.shirt
    ProductmerchHTMLmodal[i].innerHTML = item.product
    PricemerchHTMLmodal[i].innerHTML = item.price + ' €'
    Addmerchmodal[i].dataset.add = 'modal'+item.id
    Targetmerchpmodal[i].dataset.bsTarget = '#modal'+item.id
})

let AllCol = document.querySelectorAll('.col-sm-6','mb-5')

AllCol.forEach((element,i) => {
    if(i%2 !=0){
        element.classList.add('offset-md-2','offset-lg-0')
    }    
})

// const height = document.querySelector('#ouioui').offsetHeight
// console.log(height)

    var Cart = []
    var total

/********************************* ADD BUTTONS **************************************/

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
                        console.log(total)
                        innerTotal.innerHTML = 'Total : ' + total + ' €'
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
                        console.log(total)
                        innerTotal.innerHTML = 'Total : ' + total + ' €'

                    }
                
            } else { // Première fois que l'on arrive dans le panier (vide)

                console.log('panier vide, donc ajout')
                var qt = 1
                var Product = [idParentOfBtn.id, idParentOfBtn.dataset.name, idParentOfBtn.dataset.price, qt, idParentOfBtn.dataset.img]
    
                console.log(Product)
        
                Cart.push(Product)
        
                console.table(Cart )

                total = parseFloat(idParentOfBtn.dataset.price)
                console.log(total)
                innerTotal.innerHTML = 'Total : ' + total + ' €'

            }



            /************************ GENERATION HTML DU PANIER ***************************/

            while(innerCart.hasChildNodes()){
                innerCart.removeChild(innerCart.firstChild)
            }            

            Cart.forEach((element,i) => {
                console.log(total)

                let row = document.createElement('div')
                row.classList.add('row')
                innerCart.append(row)
    
                row.insertAdjacentHTML('afterbegin',
                    `
                <div data-cart-item="${element[0]}" class="row mb-1">
                    <div class="col-3">
                        <img src="${element[4]}" class="w-100">
                    </div>
                    <div class="col-4 fs-5" data-cart-name="${element[1]}">${element[1]}</div>
                    <div class="col-5">
                        <div class="row">
                            <div class="col fs-5" data-cart-price="${element[2]}">${element[2]}€</div>
                            <div class="col fs-5" data-cart-qt-id="${element[0]}" data-cart-qt="${element[3]}">${element[3]}</div>
                            <div class="col"><button data-plus="${element[0]}">+</button><button data-minus="${element[0]}">-</button></div>
                            <div class="col"><button data-trash="${element[0]}">TRASH</button></div>
                        </div>
                    </div>
                </div>
                `
                )
                
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
                        innerTotal.innerHTML = 'Total : ' + total + ' €'

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
                        innerTotal.innerHTML = 'Total : ' + total + ' €'
                        
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
                        innerTotal.innerHTML = 'Total : ' + total + ' €'
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
                innerTotal.innerHTML = 'Total : ' + total + ' €'


              })  
            })

        })

    })

})

.catch(function(){
    console.log('error')
})
