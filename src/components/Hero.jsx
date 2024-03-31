// import {logo} from '../assets';
// const Hero = () => {
//   return (
//     // <div>Hero</div>
// <header className="w-full flex justify-center items-center flex-col">
// <nav className="flex justify-between items-center w-full mb-10 pt-3">
//     <img src = {logo} alt = "sumz_logo"
//     className="w-28 object-contain" />
//     <button
//     type="button"
//     onClick={()=>window.open('https://github.com/meghavitomar')}
//     className="black_btn">
//         Github
//     </button>
// </nav>
// <h1 className="head_text">
//     Summarize Articles with <br className="max-md:hidden"/>
//     <span className="orange_gradient">OPenAI GPT-4</span>
// </h1>
// <h2 className="desc">
//     Simplify your reading with summize, an open-source article summarizer
//     that transforms lengthy articles into clear and concise summaries.
// </h2>
// </header>
//   )
// }

// export default Hero
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col relative z-10">
      <nav className="justify-between items-center w-full h-10 mb-10 pt-3">
      <div className='flex items-center'>
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        </div>
        <button
          type="button"
          onClick={() => window.open('https://github.com/meghavitomar')}
          className="black_btn">
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OPenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;