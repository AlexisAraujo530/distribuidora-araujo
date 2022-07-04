const products = [
    {id:'01', name:'Aceite', description:"Aceite de girasol Cañuelas x1.5L", img:'/Imagen/aceite.jpg' , stock : 9},
    {id:'01', name:'Fideo', description:"Fiideos Secos x500gr", img:'/Imagen/fideos.png' , stock : 5},
    {id:'01', name:'Arroz', description:"Arroz Trimacer x 1Kg", img:'/Imagen/arroz.jpg' , stock : 40},
    {id:'01', name:'Cerveza', description:"Cerveza Brahma retornable x 1L", img:'/Imagen/brahma.jpg' , stock : 30},
    {id:'01', name:'CocaCola', description:"Coca Cola descartable x 1L", img:'/Imagen/cocacola.jpg' , stock : 16},
    {id:'01', name:'Leche', description:"Leche Sach Cotar x1L", img:'/Imagen/cotar.jpg' , stock : 20},
    {id:'01', name:'Harina', description:"Harina Cañuelas x 500gr", img:'/Imagen/harina.jpg' , stock : 31},
    {id:'01', name:'Galletita', description:"Surtido Bagley x500gr", img:'/Imagen/surtido.jpg' , stock :15},

]

export const getData = new Promise ((resolve, reject) =>{
    //acciones
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('Algo Salio Mal')
      }
    },3000)
  })

  export default products;