import React, { useState } from "react";
import "./index.css";
import img from './supernatural.png';
import img2 from './img2.png'
import img3 from './sandman.jpg'
import img4 from './paranormal.jpg'
import img5 from './Twilight.jpg'
import img6 from './stranger.jpg'
import img7 from './blackmirror.jpg'
import img8 from './Mandalorian.jpg'
import img9 from './100.jpg'
import img10 from './Expanse.jpg'
import img11 from './Thrones.jpg'
import img12 from './Wars.jpg'
import img13 from './Kingdom.jpg'
import img14 from './Titans.jpg'
import img15 from './Witcher.jpg'
import img16 from './Fargo.jpg'
import img20 from './breaking.jpg'

const seriesDB = {
  Horror: [
    { name: " Supernatural ", rating: "8.4/10" ,story:"Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth",
    image: img
  },
    { name: " The Walking Dead", rating: "8.2/10" ,story:"Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive",
    image: img2
  },
    { name: " The Sandman" , rating: "9.6/10" ,story:"When The Sandman is pulled from his realm and imprisoned on Earth, he languishes for decades before finally escaping.",
    image: img3
    
  },
    {name:" Paranormal" , rating: "8.2/10" ,story:"Set in the 1960s, the series, packed with mystery and suspense, depicts the adventures of PARANORMAL leading character Dr. Refaat Ismail, a single hematologist who finds himself faced with a series of supernatural events.",image:img4},
    {name: " The Twilight Zone" ,rating:"9.0/10",story:"Ordinary people find themselves in extraordinarily astounding situations, which they each try to solve in a remarkable manner.",image:img5}
  ],

  SciFi: [
    {
      name: "Stranger Things",
      rating: "8.8/10",
      story: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
      image: img6
    },
    {
      name: "Black Mirror",
      rating: "8.8/10",
      story: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collidec.",
      image: img7
    },
    {
      name: " The Mandalorian",
      rating: "8.7/10",
      story: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      image: img8
    },
    {
      name: " The 100",
      rating: "7.6/10",
      story: "Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanity's lone survivors sends one hundred juvenile delinquents back to Earth, in hopes of possibly re-populating the planet.",
      image: img9
    },
    {
      name: "The Expanse",
      rating: "8.5/10",
      story: "In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.",
      image: img10
    }
  ],
  Action: [
    {
      name: " Game of Thrones",
      rating: "9.3/10",
      story: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      image: img11
    },
    {
      name: " Star Wars: The Clone Wars",
      rating: "8.2/10",
      story: "Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.",
      image: img12
    },
    {
      name: " The Last Kingdom",
      rating: "8.4/10",
      story: "As Alfred the Great defends his kingdom from Norse invaders, Uhtred - born a Saxon but raised by Vikings - seeks to claim his ancestral birthright.",
      image: img13
    },
    {
      name: " Titans",
      rating: "7.7/10",
      story: "A team of young superheroes combat evil and other perils."
      ,image: img14
    },
    {
      name: "The Witcher",
      rating: "8.2/10",
      story: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
      ,image: img15
    }
  ],
  Thriller: [
    {
      name: " Fargo",
      rating: "8.9/10",
      story: "Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota."
      ,image: img16
    },
    {
      name: " Supernatural",
      rating: "8.4/10",
      story: "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth.."
      ,image: img
    },
    {
      name: "The Witcher",
      rating: "8.2/10",
      story: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
      ,image: img15
    },
    {
      name: "The Walking Dead",
      rating: "8.2/10",
      story: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive."
      ,image: img2
    },
    {
      name: " Breaking Bad",
      rating: "9.5/10",
      story: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."
      ,image: img20
    }
  ]
};
export default function App() {
  
  const [selectedGenre, setGenre] = useState("Horror");
  function genreClickHandler(genre) {
  
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Top 20 Web Series to Watch </h1>

      <div>
        {Object.keys(seriesDB).map((genre) => (
          <button className="Button"
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
     
      <div className="container">
        <ul style={{ paddingInlineStart: "5" }}>
          {seriesDB[selectedGenre].map((series) => (
            <li className="list" key={series.name} >
              <img src={series.image} width="200" height="300" />
              <section className="section">
              <div className="heading"> {series.name} </div>
              <div className="rating" > <span role="img" aria-label="star">⭐</span> {series.rating} </div>
              <div className="story"> {series.story} </div>
              </section>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
}
