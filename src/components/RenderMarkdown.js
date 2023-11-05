import { MathComponent } from "mathjax-react";

const LatexRenderer = ({ value }) => {
    const parts  = value.split('$');
    return (
      <div>
        {parts.map((part, index) => {
          if (index % 2 === 0) {
            return <span key={index}>{part}</span>;
          } else {
            return <MathComponent key={index} tex={part} />;
          }
        })}
      </div>
    );
};

export default LatexRenderer;
