import Link from 'next/link'
import styles from '@/styles/Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/services">Services</Link></li>
      </ul>
    </nav>
  )
}