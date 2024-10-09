import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <p className={styles.contactDescription}>Please fill out the form below to get in touch with us.</p>
      
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>Name:</label>
          <input type="text" id="name" name="name" className={styles.formInput} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email:</label>
          <input type="email" id="email" name="email" className={styles.formInput} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>Message:</label>
          <textarea id="message" name="message" rows={5} className={styles.formTextarea} required></textarea>
        </div>
        
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}
