import prod1 from "../images/products/1.png";
import prod2 from "../images/products/2.png";
import prod3 from "../images/products/3.png";
import prod4 from "../images/products/4.png";
import prod5 from "../images/products/5.png";
import prod6 from "../images/products/6.png";

const productList = [
  {
    img: prod1,
    title: "Hoodie",
    price: "29",
    id: 1
  },
  {
    img: prod2,
    title: "Jacket",
    price: "49",
    id: 2
  },
  {
    img: prod3,
    title: "T-Shirt + Sunglasses",
    price: "13",
    id: 3
  },
  {
    img: prod4,
    title: "Breeches",
    price: "25",
    id: 4
  },
  {
    img: prod5,
    title: "Pullover",
    price: "64",
    id: 5
  },
  {
    img: prod6,
    title: "Suit",
    price: "74",
    id: 6
  },
];



const Products = ({cartItems, setCartItems}) => {

  function prodFinder(event) {
    const index = parseInt(event.target.dataset.index);
    let currentItem = productList.find((obj) => obj.id === index);
    let isAdded = false
    cartItems.forEach((element) => {
      if(element.id == currentItem.id) {
        isAdded = true
      }
    })
    if(isAdded === false) {
      setCartItems([...cartItems, currentItem])
      const newList = [...cartItems, currentItem]
      localStorage.setItem('storageCart', JSON.stringify(newList))
    } else {
      alert('This product is already in cart')
    }
    
     
}



  return (
    <div className="products" id="products">
      <h1>OUR ASSORTMENT</h1>
      <div className="products-list">
        {productList.map((obj, index) => (
          <div className="product-card" key={index}>
            <img
              className="img-responsive"
              src={obj.img}
              alt={obj.title}
            />
            <div className="product-card-information">
              <div className="information">
                <h3>{obj.title}</h3>
                <h2 className="price">{obj.price}$</h2>
              </div>
              <button onClick={prodFinder} data-index={obj.id}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
