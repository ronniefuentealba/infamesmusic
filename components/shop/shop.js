import {ProductsDB} from './../../config';
import './shop.scss';

const Shop = () => (
  <section className={'shopSection'}>
    <h2>Shop</h2>
    <div className={'productsWrapper'}>
      {ProductsDB.map(product => (
        <div key={product.id} className={'productWrapper'}>
          <img src={product.photo}/>
          <h4>{product.productName}</h4>
          <p>{product.price}</p>
          <button>Ver producto</button>
          <button>Chat</button>
        </div>
      ))}
    </div>
  </section>
)

export default Shop;