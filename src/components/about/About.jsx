// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri"; import me from "../../assets/Owner.png";
const About = () => { return (
<section className="about">
<main>
<h1>About Us</h1>
<article>
<h4>Burger Shop</h4>
<p>
This is Burger Shop. The place for most tasty burgers on the enitre earth.
</p>
<p>
Explore the various type of food and burgers. Click below to see the menu
</p>
<Link to="/">
<RiFindReplaceLine />
</Link>
</article>
<div>
<h2>Founder</h2>
<article>
<div>
<img src={me} alt="Founder" />
<h3>Sree</h3>
</div>
<p>
I am Sree, the founder of Burger Shop. Explore the new tastes of burgers.
</p>
</article>
</div>
</main>
</section>
);
};
export default About;
