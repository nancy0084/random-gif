import useGif from "../hooks/UseGIF";
import Spinner from "./Spinner";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {
  // console.log(import.meta.env.VITE_GIPHY_API_KEY);
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    // <div className="w-1/2 h-112.5 bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-3.75">
    //   <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
    //   {loading ? <Spinner /> : <img src={gif} width="450" />}
    //   <button
    //     onClick={() => fetchData()}
    //     className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
    //   >
    //     Generate
    //   </button>
    // </div>
  // );
  <div className="w-125 bg-green-500 rounded-xl  border border-black flex flex-col items-center gap-4 p-5">
  <h2 className="text-xl font-bold underline">A RANDOM GIF</h2>

  {loading ? (
    <Spinner />
  ) : (
    <img
      src={gif}
      alt="gif"
      className="w-full h-62.5 object-cover rounded-lg"
    />
  )}

  <button
    onClick={fetchData}
    className="bg-yellow-400 w-full py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
  >
    Generate
  </button>
</div>
  );
};

export default Random;
