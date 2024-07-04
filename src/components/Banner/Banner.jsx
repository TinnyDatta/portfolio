import { FaDownload } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-blue-50 p-5">
      <div className="flex flex-col items-center text-center max-w-2xl w-full p-5 border border-gray-200 rounded-lg bg-white shadow-md animate-fadeIn">
        <div className="mb-5 animate-slideIn">
          <img src="/profile.jpg" alt="Tinny datta" className="w-36 h-36 rounded-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold mb-2">Tinny Datta</h1>
        <h2 className="text-2xl text-gray-600 mb-5">Junior Web Developer</h2>
        <p className="text-lg leading-relaxed">
          I am Tinny Datta, an enthusiastic and progressive Junior Web Developer. I am currently learning programming and web development. My goal is to become proficient in web development and work successfully on various web projects. I am skilled in HTML, CSS, and JavaScript and currently learning React.js and Node.js. I also known to MongoDB, Express.js and used in some of projects. I am always eager to learn new technologies and aspire to become a professional web developer.
        </p>
        <div className="my-4">
        <button className="btn text-white btn-accent hover:bg-royalblue"> <FaDownload /> Download CV</button>
          </div>
      </div>
    </div>
  );
};

// Adding animation styles
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideIn {
    from { transform: translateY(-100px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 2s ease-in-out;
  }
  .animate-slideIn {
    animation: slideIn 1.5s ease-out;
  }
`;
document.head.appendChild(style);

export default Banner;
