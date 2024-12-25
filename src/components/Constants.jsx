import Aivot from "../assets/Aivot.jpeg";
import Keysight from "../assets/Keysight.jpeg";
import Simon from "../assets/Simon Game.png";
import Assistant from "../assets/AI Desktop Voice Assistant.png";
import OCR from "../assets/Optical-Character-Recognition.jpg";
import Gesture from "../assets/Hand Gesture Recognition.jpg";
import Finger from "../assets/Finger-Counter.jpg";
import Document from "../assets/Document-Scanner.jpg";
import Paint from "../assets/Virtual-Paint.jpg";
import Award from "../assets/Award.jpeg";


export const NAME = `Madhusree Rana`;

export const ROLE = `Associate Software Engineer`;

export const ABOUT_CONTENT = `I am an ardent full stack developer with a passion for engineering responsive, robust, and scalable web applications. With more than 2 years of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, Express.js, MongoDB, Django, Flask, FastAPI, and MySQL. Besides, I also have hands-on experience in Machine Learning, Data Analytics, and Image Processing. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    image: Aivot,
    year: "July 2023 - August 2024",
    role: "Associate Software Engineer",
    company: "Aivot AI",
    description: {
      one: {
        activity: `Designed and developed an end-to-end web application along with API integration and deployed it`,
        technologies: ["MERN", "Bootstrap", "FastAPI", "Nginx", "Certbot"]
      },
      two: {
        activity: `Built a feature extraction algorithm on soil images that identified key soil characterisitics`,

        technologies: ["Python", "OpenCV", "Numpy", "Pandas", "Matplotlib"]
      },
      three: {
        activity: `Developed a model to predict the pH of soil from soil images`,
        technologies: ["Multiple Correlation", "Data Analytics", "Machine Learning", "Regression"]
      },
      four: {
        activity: `Engineered a computer-based ECG graph from physical reports, reducing the interpretation time for analyzing patient data`,
        technologies: ["Clustering", "Interpolation", "OpenCV", "Numpy"]
      }
    },
    place: "Kolkata, West Bengal",
    mode: "On-site"
  },

  {
    image: Keysight,
    year: "April 2022 - June 2023",
    role: "Research and Development Intern",
    company: "Keysight Technologies",
    description: {
      one: {
        activity: `Designed, developed, and containerized an end-to-end web application`,
        technologies: ["Flask", "Docker", "Nginx", "Linux", "MySQL"]
      },
      two: {
        activity: `Fixed and published misconfiguration errors related to ISIS protocol`,
        technologies: ["C++", "Linux"]
      }
    },
    place: "Kolkata, West Bengal",
    mode: "On-site"
  }
];

export const EDUCATION = [
  {
    institution: "Techno International New Town",
    degree: "B.Tech - Information Technology",
    result: "CGPA: 9.07",
    year: "July 2019 - June 2023",
    place: "Kolkata, West Bengal"
  },

  {
    institution: "Hem Sheela Model School",
    degree: "XII (CBSE) - Computer Science",
    result: "89.8%",
    year: "2017 - 2019",
    place: "Durgapur, West Bengal"
  },

  {
    institution: "Carmel Convent High School",
    degree: "X (ICSE) - General Studies",
    result: "86.8%",
    year: "2017",
    place: "Durgapur, West Bengal"
  }
];

export const PROJECTS = [
  {
    title: "Simon Game Web App",
    image: Simon,
    description:
      "A simple responsive web application along with instructions for playing the fun and engaging Simon Game which improves memory",
    technologies: ["Javascript", "Bootstrap", "Netlify"],
    github: "https://github.com/MadhusreeRana2001/AI_Desktop_Voice_Assistant",
    view: "https://simon-game-for-children.netlify.app/"
  },
  {
    title: "AI Desktop Voice Assistant",
    image: Assistant,
    description:
      "A bot that can speak and recognize human speech, and perform nearly 10 different types of tasks on the PC as per the voice queries of the user",
    technologies: ["Python", "Speech Recognition"],
    github: "https://github.com/MadhusreeRana2001/AI_Desktop_Voice_Assistant"
  },
  {
    title: "Optical Character Recognition",
    image: OCR,
    description:
      "A model that takes screenshot(s) on the PC or from any video and extracts the text written in it inside a text file",
    technologies: ["Python", "Pytesseract", "Tkinter", "OpenCV"],
    github: "https://github.com/MadhusreeRana2001/Optical_Character_Recognition"
  },
  {
    title: "Hand Gesture Recognition",
    image: Gesture,
    description:
      "A model that tracks the hand movements and recognizes, from real-time video, up to 5-6 different gestures shown by the human hand",
    technologies: ["Python", "Mediapipe"],
    github: "https://github.com/MadhusreeRana2001/Hand-Gesture-Recognition"
  },
  {
    title: "Finger Counter",
    image: Finger,
    description:
      "A model that detects, from real-time video, and displays the number of fingers shown by the human hand",
    technologies: ["Python", "OpenCV", "Numpy", "Mediapipe"],
    github: "https://github.com/MadhusreeRana2001/Finger-Counter"
  },
  {
    title: "Document Scanner",
    image: Document,
    description:
      "A model that returns a straight scanned black-and-white image of any printed or hand-written document",
    technologies: ["Python", "OpenCV", "Numpy"],
    github: "https://github.com/MadhusreeRana2001/Document-Scanner"
  },
  {
    title: "Virtual Paint",
    image: Paint,
    description:
      "A model that forms layer(s) of colour(s) as per the movement of colour pen(s) in front of the webcam",
    technologies: ["Python", "OpenCV"],
    github: "https://github.com/MadhusreeRana2001/Virtual_Paint"
  }
];

export const AWARD = [
  {
    title: "Topper in NPTEL Soft Skills Course",
    image: Award,
    institution: "IIT Kharagpur",
    year: "2019",
    description: "Awarded by IIT Kharagpur for being one of the toppers, among 3700+ certified participants all across the country, in the course of Soft Skills offered bt IIT Roorkee through NPTEL"
  }
];

export const CONTACT = {
    address: "Durgapur, West Bengal, India",
    email: "madhusree.rana2017@gmail.com",
};

export const FOOTER = {
  footer: "Developed by Madhusree Rana in React.js and Tailwind CSS"
}