

const TitelBox = ({ titel="Make titel here!!", css = " " }) => {
  return (
    <p
      className={` ${css} flex items-center justify-center py-6 font-bold mx-8  h-10  uppercase`}
    >
      {titel}
    </p>
  );
};

export default TitelBox;
