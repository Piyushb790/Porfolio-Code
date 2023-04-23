import {
  github,
  linkedin,
  instagram,
  gmail,
  ButtonIMG,
  githubLink,
  linkedinLink,
  InstagramLink,
  EmailLink,
} from "../constant";

const Contact = () => {
  return (
    <div className=" my-10 scroll-mt-10 box-border" id="Contact">
      <div className="flex flex-col items-center md:flex-row-reverse md:items-center md:justify-around  md:mt-0 ">
        <div>
          <h1 className="text-5xl font-bold text-center ">Query</h1>
          <form
            method="POST"
            action="https://formspree.io/f/xeqwzkao"
            className="flex flex-col items-start mt-4   "
          >
            <div className="flex flex-col md:block">
              <input
                type="text"
                id="name"
                name="username"
                placeholder="Your Name"
                required
                className=" p-2 rounded m-2 border-2 border-yellow-400 bg-gray-50 "
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email Address"
                required
                className=" p-2 rounded m-2 border-2 border-yellow-400 bg-gray-50 "
              ></input>
            </div>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your Phone no."
              required
              className=" p-2 rounded m-2 md:w-[460px] border-2 border-yellow-400 bg-gray-50 "
            />
            <textarea
              id="message"
              rows="4"
              name="message"
              placeholder="enter your message here"
              className=" p-2 rounded m-2 md:w-[460px] border-2 border-yellow-400 bg-gray-50 "
            ></textarea>
            <button className="px-3 py-2 bg-[#282629] text-white mt-4 ml-2 rounded-md flex items-center font-semibold shadow-md">
              Submit
              <div className="bg-[#FAD208] rounded-xl ml-2 px-2 ">
                <img src={ButtonIMG} />
              </div>
            </button>
          </form>
        </div>
        <div className="md:w-[470px] w-96 my-10">
          <h1 className="text-5xl font-bold">Get In Touch</h1>
          <p className="mt-10">
            Thank you for taking the time to visit my portfolio website. If you
            have any questions or would like to discuss a potential project,
            please do not hesitate to get in touch with me.
          </p>
          <div className="flex mt-7 gap-6 ">
            <a href={githubLink} target="_blank">
              <img
                src={github}
                className="w-12 filter brightness-75 saturate-150 hover:-translate-y-2"
              />
              <p> Github</p>
            </a>
            <a href={linkedinLink} target="_blank">
              <img src={linkedin} className="w-12 hover:-translate-y-2" />
              <p> Linkedin</p>
            </a>
            <a href={InstagramLink} target="_blank">
              <img src={instagram} className="w-12 hover:-translate-y-2" />
              <p> Instagram</p>
            </a>
            <a href={EmailLink} target="_blank">
              <img src={gmail} className="w-12 hover:-translate-y-2" />
              <p> Email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
