import Link from 'next/link'
import styles from '@/styles/Services.module.css'

export default function Services() {
  return (
    <div className={styles.services}>
      <h1>My Services</h1>
      <p>I offer a range of services designed to help you elevate your online presence and digital capabilities:</p>
      <ul>
        <li>Web Development</li>
        <li>Responsive Design</li>
        <li>Graphic Design</li>
        <li>Video Editing</li>
        <li>Social Media Marketing</li>
        <li>Custom Web Applications</li>
        <li>UI/UX Design</li>
        <li>Website Redesign</li>
      </ul>
      <p>
        <Link href="/services/details">View Service Details</Link>
      </p>
    </div>
  )
}
