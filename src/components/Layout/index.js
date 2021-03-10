import React from 'react'

// components
import { Header } from '@/components'

// styles
import styles from './styles.css'

const Layout = ({ children = [] }) => (
  <div className={styles.primaryGrid}>
    <div className={styles.primaryColumn} />
    <div className={styles.contentGrid}>
      <div className={styles.contentLeftColumn}>
        <Header />
      </div>
      <div>
        {children}
      </div>
    </div>
    <div />
  </div>
)

export default Layout
