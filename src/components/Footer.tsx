import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
