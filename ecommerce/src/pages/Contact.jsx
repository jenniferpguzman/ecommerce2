import '../stylesheets/Navbar.css'
import '../stylesheets/Contact.css'

export default function Home(){
    return(
        <>
        <section className="contact_box">
          <div className="contact_text">
            <p><strong>Location:</strong> 1101 Red Ventures Dr Fort Mill,SC 29707</p>
            <p><strong>Phone Number:</strong>(980)-234-5678</p>
            <p><strong>Email:</strong>jenny.spade@gmail.com</p>
          </div>
        </section>
        <div className="form_container">
            <form>
                <div className="form_box">
                    <h1>Contact Us!</h1>
                    <h1>Contact Us</h1>
            <input type="text" id="first_name" placeholder="First Name" required />
            <input type="text" id="last_name" placeholder="Last Name" required />
            <input type="email" id="email" placeholder="Email" required />
            <h3>Leave Us a Comment</h3>
            <textarea name="comments" id="comment_section" required></textarea>
            <input type="submit" value="send" id="button"></input>
            </div>
            </form>
            <section className="contact_additional">
                <h2>Monday-Friday 8am-5pm</h2>
                <h4>THE BAG OF YOUR DREAMS IS ONE CLICK AWAY</h4>
            </section>
        </div>
        </>
    );
}