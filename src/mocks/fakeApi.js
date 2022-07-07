export const productos = [
    {id:8,name:'Aceite',category:'almacen',  description:"Aceite de girasol Cañuelas x1.5L", image:'/Imagen/aceite.jpg' ,stock : 25,price: 200},
    {id:1, name:'Fideo',category:'almacen', description:"Fiideos Secos x500gr", image:'/Imagen/fideos.png' , stock : 5,price: 88},
    {id:2, name:'Arroz', category:'almacen',description:"Arroz Trimacer x 1Kg", image:'/Imagen/arroz.jpg' , stock : 40,price: 88},
    {id:3, name:'Cerveza', category:'bebidas',description:"Cerveza Brahma retornable x 1L", image:'/Imagen/brahma.jpg' , stock : 30,price: 88},
    {id:4, name:'CocaCola', category:'bebidas',description:"Coca Cola descartable x 1L", image:'/Imagen/cocacola.jpg' , stock : 16,price: 88},
    {id:5, name:'Leche', category:'lacteos',description:"Leche Sach Cotar x1L", image:'/Imagen/cotar.jpg' , stock : 20,price: 88},
    {id:6, name:'Harina', category:'almacen',description:"Harina Cañuelas x 500gr", image:'/Imagen/harina.jpg' , stock : 31,price: 88},
    {id:7, name:'Galletita', category:'almacen',description:"Surtido Bagley x500gr", image:'/Imagen/surtido.jpg' , stock :15,price: 88},
];

export const getProds = (categoryId) => {
  return new Promise((resolve, reject) => {
      const productosFiltrados = productos.filter(
          (prod) => prod.category === categoryId
      );
      setTimeout(() => {
          categoryId ? resolve(productosFiltrados) : resolve(productos);
      }, 1000);
  });
};

export const getProd = (id) => {
  return new Promise((resolve, reject) => {
      const productoEncontrado = productos.find(
          (prod) => prod.id === Number(id)
      );
      setTimeout(() => {
          resolve(productoEncontrado);
      }, 1000);
  });
};

