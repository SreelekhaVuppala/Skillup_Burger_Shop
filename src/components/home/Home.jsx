// Write all the code here
import React from "react";
import { motion } from "framer-motion"; import Founder from "./Founder";
import Menu from "./Menu";
const Home = () => { const options = {
initial: { x: "-100%",
opacity: 0,
},
whileInView: {
x: 0,
opacity: 1,
},
};
return (
<React.Fragment>
<section className="home">
<div>
<motion.h1 {...options}>Sree Burgers</motion.h1>
<motion.p
{...options} transition={{
delay: 0.2,
}}
>
<h3 style={{color:"white"}}>Bite into tender juicy goodness.</h3>
</motion.p>
</div>
<motion.a href="#menu" initial={{
y: "-100%",
opacity: 0,
}}
whileInView={{ y: 0,
opacity: 1,
}}
transition={{ delay: 0.4,
}}
>
Explore Menu
</motion.a>
</section>
<Menu />
<Founder />
</React.Fragment>
);
};

export default Home;
