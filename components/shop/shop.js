import {ProductsDB} from './../../config';
import './shop.scss';

const Shop = () => (
  <section className={'shopSection home-part'}>
    <h2>Shop</h2>
    <div className={'productsWrapper'}>
      {ProductsDB.map(product => (
        <div key={product.id} className={'productWrapper'}>
          <img src={product.photo} width="100%"/>
          <h4>{product.productName}</h4>
          <p>{product.price}</p>
          <div className={'shopButtonsWrapper'}>
            <a className={'shopButton'} href="">Ver producto</a>
            <a className={'shopButton'} href="">Chat</a>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Shop;