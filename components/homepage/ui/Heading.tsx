const Heading = ({ text, strong }: { text: string; strong: string }) => {
  return (
    <h1 className="heading">
      {text} <span className="text-lightBlue">{strong}</span>
    </h1>
  );
};

export default Heading;
