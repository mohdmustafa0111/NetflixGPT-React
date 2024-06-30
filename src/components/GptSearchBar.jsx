import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAPI_KEY } from "../utils/constants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const genAI = new GoogleGenerativeAI(GEMINIAPI_KEY);
  const searchText = useRef(null);

  // Search movie in TMDB

  const handleGptSearchClick = async () => {
    // Make an API call to get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the exmaple result given ahead. Example Result: Lagaan, Sholay, Don, Golmaal, Dhoom";

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const gptResults = await model.generateContent(gptQuery);
    const response = await gptResults.response;
    const text = response.text();
    console.log(text);

    const gptMovies = text.split(",");
    console.log(gptMovies);
  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
