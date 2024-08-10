import React from 'react'
import { Header } from '../../components/Header'
import classNames from 'classnames/bind'
import styles from './LoginLayout.module.scss'
import  '../../assets/oto.svg' 
const cx = classNames.bind(styles)

export default function LoginLayout({children}) {
  return (
    <div className={cx('wrapper')}>
      <Header/>
      <div className={cx('container')}>
        <div className={cx('image')}>
        </div>
        <div className={cx('content')}>{children}</div>  
      </div>
      <div className={cx('footer')}>© 2021. All rights reserved.</div>
    </div>
  )
}
