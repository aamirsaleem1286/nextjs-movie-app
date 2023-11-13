import React from 'react';
import styles from "@/app/style/common.module.css";
import Image from 'next/image';

const Page = ({ params }) => {
  const { id } = params;

  const data=
  [
      {
      "id": 1,
      "movie": "The Shawshank Redemption",
      "rating": 9.2,
      "image": "images/shawshank.jpg",
      "imdb_url": "/img1",
      "desc":"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion."
      },
      {
      "id": 2,
      "movie": "The Godfather",
      "rating": 9.2,
      "image": "images/godfather.jpg",
      "imdb_url": "/img2",
      "desc":"Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger."
      },
      {
      "id": 3,
      "movie": "The Dark Knight",
      "rating": 9,
      "image": "images/dark_knight.jpg",
      "imdb_url": "/img3",
      "desc":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
      },
      {
      "id": 4,
      "movie": "Pulp Fiction",
      "rating": 8.9,
      "image": "images/pulp_fiction.jpg",
      "imdb_url": "/img4",
      "desc":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
      },
      {
      "id": 5,
      "movie": "The Lord of the Rings: The Return of the King",
      "rating": 9,
      "image": "images/lotr_return_king.jpg",
      "imdb_url": "/img5",
      "desc":"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
      },
      {
      "id": 6,
      "movie": "The Good, the Bad and the Ugly",
      "rating": 8.8,
      "image": "images/good_bad_ugly.jpg",
      "imdb_url": "/img6",
      "desc":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
      },
      {
      "id": 7,
      "movie": "Fight Club",
      "rating": 8.8,
      "image": "images/fight_club.jpg",
      "imdb_url": "/img7",
      "desc":"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
      },
      {
      "id": 8,
      "movie": "The Lord of the Rings: The Fellowship of the Ring",
      "rating": 8.8,
      "image": "images/lotr_fellowship.jpg",
      "imdb_url": "/img8",
      "desc":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
      },
      {
      "id": 9,
      "movie": "Forrest Gump",
      "rating": 8.8,
      "image": "images/forrest_gump.jpg",
      "imdb_url": "/img9",
      "desc":"The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart."
      },
      {
      "id": 10,
      "movie": "Inception",
      "rating": 8.8,
      "image": "images/inception.jpg",
      "imdb_url": "/img10",
      "desc":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
      },  
      {
        "id": 11,
        "movie": "Titanic",
        "rating": 9,
        "image": "Titanic.jpg",
        "imdb_url": "/img11",
        "desc":"James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line "
  
        },
        {
          "id": 12,
          "movie": "Forrest Gump",
          "rating": 9,
          "image": "images/lotr_return_king.jpg",
          "imdb_url": "/img12",
          "desc":"Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat"
      }
      ]

  const selectedMovie = data.find((movie) => movie.id === parseInt(id, 10));

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-6 mt-10">
          <Image
            src={`/img${selectedMovie.id}.png`}
            alt={selectedMovie.image}
            width={600}
            height={300}
            style={{width: "100%",height: "300px"}}
          />
        </div>
        <div>
          <h1 className="text-4xl line-clamp-1">{selectedMovie.movie}</h1>
          <br />
          <p className="text-2xl">{selectedMovie.desc}</p>
        </div>
      </div>
    </div>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> </>
  );
};

export default Page;
