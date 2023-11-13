import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "../style/contact.module.css";

const Page = () => {
  return (
    <>
      <div>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2 className="text-4xl">
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1_xJhYeS2A83UaCE9C2gVhCnWijI&hl=en_US&ehbc=2E312F"
        width="640"
        height="480"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Page;
