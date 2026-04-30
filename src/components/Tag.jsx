import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Tag = () => {
  const [tag, setTag] = useState("Dog");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);


  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif(tag);


  return (
    // <div className="w-1/2 h-112.5 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3.75">
    //   <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
    //   {
    //     loading ? (<Spinner />) : (<img src= {gif} width="450" />)
    //   }

    //   <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-0.75 text-center" onChange={(event) => setTag(event.target.value)} value={tag} />

    //   <button
    //     onClick={() => fetchData(tag)}
    //     className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
    //   >
    //     Generate
    //   </button>
    // </div>

    <div className="w-125 bg-blue-500 rounded-xl  border border-black shadow-lg flex flex-col items-center gap-4 p-5">
  <h2 className="text-xl font-bold underline">
    RANDOM {tag} GIF
  </h2>

  {loading ? (
    <Spinner />
  ) : (
    <img
      src={gif}
      alt="gif"
      className="w-full h-62.5 object-cover rounded-lg"
    />
  )}

  <input
    type="text"
    value={tag}
    onChange={(e) => setTag(e.target.value)}
    className="w-full text-center bg-white py-2 rounded-md outline-none"
  />

  <button
    onClick={() => fetchData(tag)}
    className="bg-yellow-400 w-full py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
  >
    Generate
  </button>
</div>
  );
};

export default Tag;
