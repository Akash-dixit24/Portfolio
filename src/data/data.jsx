import weatherApp from "../Assets/weatherApp.png";
import passwordGenerator from "../Assets/PasswordGenerator.png";
import skillsync from "../Assets/skillsync.png";
import stremio from "../Assets/stremio.png";


const data = [
  {
    id: 1,
    Name: "Stremio 🎬",
    description:
      "Stremio is a media streaming platform that allows users to watch and organize their favorite movies, TV shows, and live channels. It offers a user-friendly interface and supports various add-ons for enhanced content discovery.",
    technologies: ["ReactJs"],
    image: stremio,
    link: "https://frontend-domination-major-react-app.vercel.app/",
    code: "https://github.com/Akash-dixit24/Stremio"
  },
  {
    id: 2,
    Name: "SkillSync 🧑‍💻",
    description:
      "SkillSync is a platform designed to connect individuals with similar skills and interests, facilitating collaboration and knowledge sharing. It aims to create a community where users can learn from each other and enhance their professional growth.",
    technologies: ["React", "Node.js","Tailwind CSS" , "Express", "MongoDB" , "Socket.io"],
    image: skillsync,
    link: "http://13.60.44.146/",
     code: "https://github.com/Akash-dixit24/SkillSync_Frontend"
  },
  {
    id: 4,
    Name: "Weather ⛅",
    description:
      "A weather application that provides real-time weather updates and forecasts for various locations around the world.The real-time updates and 5-day forecasts ensure that users are always prepared for whatever weather conditions may come their way. ",
    technologies: ["JavaScript", "CSS"],
    image: weatherApp,
    code: "https://github.com/Akash-dixit24/Weather-App-Project",
    link: "https://akash-dixit24.github.io/Weather-App-Project/",
  },
  {
    id: 5,
    Name: "Password Generator 🔑",
    description:
      "A password generator that creates strong, secure passwords for users. The password generator provides a quick and easy way to generate secure passwords that are difficult to crack, helping users protect their online accounts and personal information.",
    technologies: ["JavaScript", "CSS"],
    image: passwordGenerator,
    code: "https://github.com/Akash-dixit24/Password-Generator",
    link: "https://akash-dixit24.github.io/Password-Generator/",
  },
];

export default data;