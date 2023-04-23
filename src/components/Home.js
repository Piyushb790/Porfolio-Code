import { ButtonIMG } from "../constant";
import p1 from "../Assets/p1.png";
import { linkedinLink } from "../constant";
const Home = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-around mt-14 md:mt-28 font-Roboto box-border">
      <div className="md:w-[410px] w-96">
        <h1 className="text-5xl">
          Hello.. I'm <span className="font-bold">Piyush Bhatt,</span> a
          front-end developer from Dehradun, India.
        </h1>
        <p className="mt-10">
          I specialize in building responsive and user-friendly web applications
          that provide a great user experience.
        </p>
        <a href={linkedinLink} target="_blank">
          <button className="px-3 py-2 bg-[#282629] text-white mt-10 rounded-md flex items-center font-semibold">
            HIRE ME
            <div className="bg-[#FAD208] rounded-xl ml-2 px-2">
              <img src={ButtonIMG} />
            </div>
          </button>
        </a>
      </div>
      <div>
        <div className=" rounded-full  hover:shadow-[0px_0px_21px_rgba(0,0,0,0.25)] hover:shadow-yellow-500   shadow-[0px_0px_21px_rgba(0,0,0,0.75)] shadow-black ">
          <img src={p1} className=" h-[480px] rounded-full " />
        </div>
      </div>
    </div>
  );
};
export default Home;
