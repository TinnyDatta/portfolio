
import { FaReact, FaJs, FaNode, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const skills = [
    { name: "React.js", icon: <FaReact size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-500" /> },
    { name: "Node.js", icon: <FaNode size={40} className="text-green-500" /> },
    { name: "MongoDB", icon: <FaDatabase size={40} className="text-green-700" /> },
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt size={40} className="text-blue-400" /> }
];

const Skills = () => {
    return (
        <section>
            <h2 className="relative text-center text-2xl font-bold mt-10 mb-3 ">My Skills</h2>
            <div className="text-xl text-center  mb-6">
                <p>
                    <Typewriter
                        options={{
                            strings: ['My learning will continue and I believe soon I will add some more skills.'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                        }}
                    />
                    
                </p>
            </div>
            <div className="relative flex flex-col items-center p-10 overflow-hidden">
                <h2 className="relative text-2xl font-bold text-white mb-10 z-10">Skills</h2>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl z-10">
                    {skills.map(skill => (
                        <div key={skill.name} className="p-5 border border-gray-200 rounded-lg bg-white shadow-lg text-center transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
                            <div className="mb-3">{skill.icon}</div>
                            <div className="text-xl font-semibold">{skill.name}</div>
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 animate-movingBackground"></div>
            </div></section>
    );
};

// Adding animation styles
const style = document.createElement('style');
style.innerHTML = `
  @keyframes slideIn {
    from { transform: translateY(-100px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes movingBackground {
    0% { background-position: 0 0; }
    50% { background-position: 100% 0; }
    100% { background-position: 0 0; }
  }
  .animate-slideIn {
    animation: slideIn 1.5s ease-out;
  }
  .animate-movingBackground {
    animation: movingBackground 15s linear infinite;
    background-size: 200% 200%;
  }
`;
document.head.appendChild(style);

export default Skills;
