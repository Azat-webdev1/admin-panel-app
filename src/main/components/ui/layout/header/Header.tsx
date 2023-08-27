/* eslint-disable react/jsx-no-undef */
import { FC } from 'react'
import LoginForm from './login-form/LoginForm'
import Logo from './logo/Logo'
import style from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={style.header}>
      <Logo />
      <LoginForm />
    </header>
  )
}

export default Header
