import { FaLinkedin, FaGithub, FaDiscord, FaMailBulk, FaEnvelope, FaVimeo } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/jasonharrel/" },
  { icon: <FaGithub />, path: "https://github.com/jharreldesign" },
  { icon: <FaEnvelope />, path: "mailto:jharreldesign@gmail.com" },
  { icon: <FaVimeo />, path: "https://vimeo.com/jharreldesign" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
