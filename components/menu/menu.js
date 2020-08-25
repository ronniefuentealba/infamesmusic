import React, {Component} from 'react'
import Link from 'next/link'
import { uniqueId } from 'lodash/uniqueId'
import Proptypes from 'prop-types'

class Menu extends Component {
  renderSubMenu = (children) => {
    if(children && children.lenght > 0 ){
      return (
        <ul className={'menu__submenu'}>{this.renderMenuItems(children)}</ul>
      )
    }
  }

  renderMenuItems = (items) => 
    items.map((item, i) => {
      const {href, target, label, children} = item;
      return (
        <li className={'menu__item'} key={uniqueId(`item-${i}-`)}>
          <Link href={href} key={uniqueId(`link-${i}-`)}>
            <a className="menu__link" target={target}>
              {label}
            </a>
          </Link>
          {this.renderSubMenu(children)}
        </li>
      )
    })

    render () {
      const className = this.props.className
      ? `menu ${this.props.className}`
      : 'menu';

      return(
        <ul className={className}>{this.renderMenuItems(this.props.items)}</ul>
      )
    }
}