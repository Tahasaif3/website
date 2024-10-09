import Link from 'next/link'
import styles from '@/styles/Servicedetail.module.css'

export default function ServiceDetails() {
  return (
    <div className={styles.serviceDetails}>
      <h1>Service Details</h1>
      <p>We provide a comprehensive set of services tailored to your business needs. Below is a breakdown of each service we offer:</p>
      
      <h2>Web Development</h2>
      <p>We create modern, scalable websites using the latest technologies like HTML, CSS, JavaScript, TypeScript, and frameworks such as React and Next.js. Whether you need a simple landing page or a full-fledged web application, we’ve got you covered.</p>

      <h2>Responsive Design</h2>
      <p>Your website needs to look and perform well on all devices. We specialize in creating fully responsive websites that adapt seamlessly to mobile, tablet, and desktop screens.</p>

      <h2>Graphic Design</h2>
      <p>From logos to marketing materials, we provide custom graphic design solutions to enhance your brand’s visual identity. Our designs are professional, eye-catching, and tailored to your brand's messaging.</p>

      <h2>Video Editing</h2>
      <p>Our video editing services will help you create polished, engaging videos for marketing, social media, or any other use. We offer services like cutting, transitions, effects, and adding audio tracks to make your content stand out.</p>

      <h2>Social Media Marketing</h2>
      <p>We can help you grow your online presence and reach a wider audience through effective social media marketing strategies. From content creation to ad management, we’ll help boost your engagement and drive more traffic to your site.</p>

      <h2>Custom Web Applications</h2>
      <p>Need a custom solution? We build tailored web applications for businesses, providing unique functionality that suits your specific needs, whether it's e-commerce, a content management system, or something else.</p>

      <h2>UI/UX Design</h2>
      <p>We design user interfaces that are both visually appealing and easy to navigate. Our user-centric approach ensures that your website or application offers an intuitive and enjoyable experience for all users.</p>

      <h2>Website Redesign</h2>
      <p>If you have an existing website that needs a fresh look or better functionality, we can help. Our redesign services focus on modernizing outdated designs and improving user experience to drive better engagement and conversions.</p>
      
      <Link href="/services">Back to Services</Link>
    </div>
  )
}
