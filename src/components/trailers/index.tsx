// Trailer.js
const trailers = [
    {
    name: "A Quiet Place",
    imageSrc: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    desription: "A family is forced to live in silence while hiding from creatures that hunt by sound.",
    releasedYear: 2019
    },
    {
        name: "A Quiet Place",
        imageSrc: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
        desription: "A family is forced to live in silence while hiding from creatures that hunt by sound.",
        releasedYear: 2019
    },
    {
            name: "A Quiet Place",
            imageSrc: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
            desription: "A family is forced to live in silence while hiding from creatures that hunt by sound.",
            releasedYear: 2019
            },
            {
                name: "A Quiet Place",
                imageSrc: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
                desription: "A family is forced to live in silence while hiding from creatures that hunt by sound.",
                releasedYear: 2019
                },
]


const Trailer = () => {
  return (
    <div className="flex flex-wrap max-w-4xl">
      {/* Movie Cards*/}
      {trailers.map(trailer=>(
        <div className="w-full md:w-1/2 lg:w-1/2 max-w-4xl rounded overflow-hidden shadow-lg m-2 md:m-4 flex bg-gray-800">
        <div className="md:flex-shrink-0">
         <img
           className="md:w-56"
           src={trailer.imageSrc}
           alt={trailer.name+" movie poster"}
         />
        </div>
        <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
         <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
           {trailer.name}
         </h3>
         <span className="movie--year text-xl lg:text-sm lg:mb-4">{trailer.releasedYear}</span>
         <div className="flex-grow">
           <p className="text-md md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">
             {trailer.desription}
           </p>
         </div>
         <div className="button-container flex justify-between mb-2">
           <button className="text-lg mr-4 lg:text-sm text-gray-200">More Info</button>
           <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700">
             Add to List
           </button>
         </div>
       </div>
     </div>
      ))}
    </div>
  );
};

export default Trailer;
