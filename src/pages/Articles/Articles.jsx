import React from 'react'
import "./Articles.css"
import IMG1 from "../../assets/Article1.jpg"
import IMG2 from "../../assets/Article2.jpg"
import IMG3 from "../../assets/Article3.jpg"
function Articles() {
  return (

      <section id = "Articles">
        <h2>Articles</h2>

<div class="container">
  <div class="block">
    <h3>Grounded in family, Phoenix ...</h3>
    <img src={IMG1} alt="About Image1" />
    <p>Growing up in The Villages, Florida, Benjamin Dinal found himself straddling two worlds....</p>
  </div>
  <div class="block">
    <h3>PhoenixHacks: 24-Hour Hackathon</h3>
    <h3> </h3>
    <img src={IMG2} alt="About Image2" />
    <p>The drive and will to meet a challenge never stops, even sometimes for sleep! PhoenixHacks is a 24-hour hackathon</p>
  </div>
  <div class="block">
   <h3>New class of Presidential Ambassadors</h3>
   <img src={IMG3} alt="About Image3" />
    <p>For Florida Polytechnic University freshman Benjamin Dinal, leadership is rooted in a true desire to serve others.</p>
  </div>
</div>






      </section>

  )
}

export default Articles
