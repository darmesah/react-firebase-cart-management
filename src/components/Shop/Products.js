import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Rice",
    price: 2,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Beans",
    price: 5,
    description: "This is a second product - amazing!",
  },
  {
    id: "p3",
    title: "Egg",
    price: 10,
    description: "This is a third product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
