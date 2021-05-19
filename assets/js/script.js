const FileJson = 'http://ecommerce/assets/json/myJSON.json'

fetch(FileJson)
.then(resp => resp.json())
.then(function (myJson){
    
})
.catch(function(){
    console.log('error')
})
