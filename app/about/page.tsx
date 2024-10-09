import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <div className={styles.aboutContainer}>
    <div className={styles.imageContainer}>
      {/* Add your image here */}
      <img src="/profile.png" alt="Muhammad Taha Saif" className={styles.profileImage} />
    </div>

    <div className={styles.about}>
      <h1>About Me</h1>
      <p>Muhammad Taha Saif - Junior Frontend Developer & Digital Creator

Hi, I’m Muhammad Taha Saif, a passionate Junior Frontend Developer with a strong focus on building modern, responsive web applications. With expertise in HTML, CSS, JavaScript, TypeScript, and frameworks like Next.js, I bring ideas to life through clean code and dynamic user interfaces. My journey in web development has been fueled by a commitment to learning, as I continue to expand my skills in areas such as asynchronous programming, API integration, and UI/UX design.

In addition to web development, I’m skilled in graphic design, video editing, and social media management. I use these abilities to create visually appealing content and engaging digital experiences. Whether it’s designing a sleek user interface, crafting compelling YouTube thumbnails, or building a custom website, I thrive on delivering solutions that meet both aesthetic and functional requirements.

Currently, I’m working on various projects, including e-commerce platforms, resume builders, and dynamic web applications. I also run my own affiliate marketing business, manage a Shopify store, and offer consultation services through Upwork.</p>
    </div>
    </div>
  )
}