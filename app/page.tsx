import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.introSection}>
        <h1>Welcome, I'm Muhammad Taha Saif</h1>
        <p>
          I am a passionate and dedicated web developer specializing in creating dynamic, responsive, and user-friendly web applications. With expertise in TypeScript, JavaScript, and modern web frameworks, I bring your ideas to life with clean code and innovative designs.
        </p>
        <p>
          Whether you're looking for a professional website, custom web applications, or design solutions, I'm here to help you elevate your online presence and grow your business.
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/contact">
            <button className={styles.contactButton}>Contact Me</button>
          </Link>
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2>My Skills</h2>
        <ul>
          <li>Web Development: Building modern and responsive websites</li>
          <li>UI/UX Design: Crafting intuitive user experiences</li>
          <li>Video Editing: Professional editing for marketing and social media</li>
          <li>Graphic Design: Enhancing brand identity with creative designs</li>
          <li>Social Media Marketing: Boosting online presence and engagement</li>
        </ul>
      </div>
    </div>
  )
}
