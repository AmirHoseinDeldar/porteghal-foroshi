import WorldMap from "../../assets/world-map.png";

const WhereToBuy = () => {
  return (
    <>
      <div className="container my-36">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          <div className="space-y-8">
            <h1
              className="text-4xl font-bold text-dark font-serif"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              کجا میتونید محصولات مارو تهیه کنید؟
            </h1>
            <div
              className="flex items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <input
                type="text"
                placeholder="کشور"
                className="input-style w-full lg:w-[120px]"
              />
              <input type="text" placeholder="کدپستی" className="input-style" />
            </div>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-btn"
            >
              سرچ کنید
            </button>
          </div>
          <div data-aos="fade" className="col-span-2">
            <img
              src={WorldMap}
              alt="map"
              className="w-full sm:w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToBuy;
