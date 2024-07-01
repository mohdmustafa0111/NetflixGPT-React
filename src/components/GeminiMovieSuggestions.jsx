import { useSelector } from "react-redux";

const GeminiMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gemini);
  // const { movieNames, movieResults } = gpt;

  if (!movieNames) return null;

  return <div className="p-4 m-4 bg-black text-white">{movieNames}</div>;
};
export default GeminiMovieSuggestions;
