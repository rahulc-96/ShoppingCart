import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
  const products = [
    { id:"2", title: 'Test Item 2', price: 5, description: "This is the second product - amazing!"},
    { id:"1", title: 'Test Item 1', price: 6, description: "This is the first product - amazing!"},
  ]

  const productList = products.map(product => <ProductItem key = {product.id} id={product.id} title ={product.title} price={product.price} description={product.description}/>)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
         {productList}
      </ul>
    </section>
  );
};

export default Products;
