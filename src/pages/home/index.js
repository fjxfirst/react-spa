import React, {PureComponent} from 'react';
import style from './home.css'
import reactLogo from  'images/reactlogo.svg'
export default class Home extends PureComponent {
  render() {
    return (
      <div className={style['home']}>
        this is home~
        <img src={reactLogo}/>
      </div>
    )
  }
}
