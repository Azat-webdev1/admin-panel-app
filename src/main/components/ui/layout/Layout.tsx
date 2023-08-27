import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'

import style from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main className={style.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
