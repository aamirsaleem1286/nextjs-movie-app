import  styles from "../style/contact.module.css"
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
            <h1>contact page</h1>

                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <div style={{paddingLeft: "88px"}}>
                        <i> <MdEmail /> </i></div>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="/" className="text-2xl bg-emerald-400	 text-white">  Send Email <span>-&gt;</span></Link>
                    </div>

                    <div className={styles.grid_card}>
                    <div style={{paddingLeft: "88px"}}>
                        <i> <MdVoiceChat /> </i></div>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET</p>
                        <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
                        <Link href="/"className="text-2xl bg-emerald-400	 text-white" >  Chat Now <span>-&gt;</span></Link>
                    </div>

                    <div className={styles.grid_card}>
                    <div style={{paddingLeft: "88px"}}>
                        <i> <MdForum /> </i></div>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="/"  className="text-2xl bg-emerald-400	 text-white">  Ask The Community <span>-&gt;</span></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactCard;