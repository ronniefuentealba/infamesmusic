import './overlayMenu.scss';

const OverlayMenu = () => 
  <div className={'overlayMenu'}>
    <span>Submenu</span>
    <ul>
    <li>
        <a>Item</a>
      </li><li>
        <a>Item</a>
      </li><li>
        <a>Item</a>
      </li><li>
        <a>Item</a>
      </li><li>
        <a>Item</a>
      </li>
    </ul>
    <button>close</button>
  </div>

  export default OverlayMenu;