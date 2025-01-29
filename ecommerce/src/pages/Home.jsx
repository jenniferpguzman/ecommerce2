import '../stylesheets/Navbar.css'
import '../stylesheets/Home.css'

export default function Home(){
    return(
        <>
        <div className="hero_text">
        <h2>GOOD DEALS ALL YEAR LONG</h2>
        <h4>GET THE BAG OF YOUR DREAMS</h4>
        </div>
        <section className="box_to_bags">
            <div className="boxbag1">
                <div>
                    <img src="images/windowbag.jpg" alt="Person holding bag out" />
                    <div className="description">
                        <p>Le sac à main parfait pour elle</p>
                    </div>
                </div>
            </div>
                <div className="boxbag2">
                    <img src="images/IMG_1212.JPG" alt="Bag floating" />
                    <div className="description">
                    <p>beau sac à main, femme magnifique</p>
                    </div>
                </div>
                <div className="boxbag3">
                <img src="images/stairbag.jpg" alt="Bag on stairs" />
                    <div className="description">
                    <p>rêve grand, achète le sac à main</p>
                    </div>
                </div>
        </section>

        <div className="fruitbag">
            <img src="images/fruitbag.jpg" alt="Bag in fruit" />
            <div className="story">
            <h3>Our Story</h3>
            <p>Jennifer Spade was founded in 1995 by Jennifer Guzman, a young artisan from Nice, who moved to Paris with a passion for fine craftsmanship. In a small workshop on Rue de Turenne, Jennifer began creating luxurious leather handbags that combined timeless Parisian style with modern design. Her attention to detail and dedication to quality quickly gained the brand a loyal following, and soon Jennifer Spade became known for its understated yet sophisticated bags. As the brand grew, it remained committed to craftsmanship and sustainability, becoming a symbol of French luxury. Today, Jennifer Spade continues to create iconic, handcrafted handbags, preserving the legacy of Jennifer's vision for timeless elegance.</p>
            </div>
        </div>
        </>
    );
}