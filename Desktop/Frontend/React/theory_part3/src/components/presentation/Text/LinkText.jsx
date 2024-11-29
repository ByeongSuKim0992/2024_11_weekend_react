const LinkText = ({ link, text }) => {
  return (
    <a className="text-sm font-light text-blue-600" href={link}>
      {text}
    </a>
  );
};

export default LinkText;
