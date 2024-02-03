
const Contect = () => {
  const img1 =
    "https:s3-alpha-sig.figma.com/img/cd39/40f6/90f6a3a5fbc53e9cbc65966f80b73918?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RL-0eou8AzUWEXHf01I6-9jhyD9PFhTbAauujBfHe8-KriHtzDBRPJKPySDMtffUzBOAOdGTTSZ6Xu2lwsrJvRkTBvK4UpzC2J-nlejVdfJcpFfAVVs-XAKj2tnItIWp3aUkijPsm2Q-K1YaafNUy-CuMdzq-8~tDczJzxPR7~pdZ5SGv7LUWCFWTWKvx-K~uKWTNmQY8ZOROgQnQWLNVLyl8jRmhOL5z2zUBgejPuoJMzWlZ6q1MpAck6Zc1TInnqaL5R~CbnXVViOaX4R1XB8z60M3rMqRx8Nf~Sd-AFUABxne1v~-cvVuEsu2zMzpRO3XziDC9RVpu4jARSan2A__";
  return (
    <section
      id="contect"
      className="md:flex overflow-hidden md:h-[30vmax] items-center justify-center bg-[#0F1221]"
    >
      <div className="py-4">
        <div className="h-4 mx-auto w-[60%] bg-[#5E3AEE]"></div>
        <div className="mt-3 px-3 md:px-10 ">
          <p className="text-2xl lg:text-4xl mt-2 font-bold text-white text-center">
            A Bit About Me...
          </p>
          <p className="mt-2 text-sm lg:text-lg font-medium text-slate-200 text-center">
            Earthlings! I am Monank "The Reactor" Sojitra, <br />
            your friendly neighborhood web wizard and code conjurer currently
            pursuing the elusive degree of Web Sorcery at GEC Rajkot. <br />
            Catch a glimpse of my magical creations on the enchanted scrolls of
            GitHub{" "}
            <a
              href="https:github.com/monanksojitra"
              className="cursor-pointer hover:text-blue-300"
              target="_blank"
            >
              @monanksojitra
            </a>
            .
            <br /> May the bugs be ever in your favor! 🚀✨
          </p>
        </div>
      </div>
      <div className=" py-3 flex items-center justify-center">
        <img
          src={img1}
          alt=""
          className="scale-125 md:scale-150 translate-y-6 rotate-[10deg]"
        />
      </div>
    </section>
  );
};

export default Contect;
