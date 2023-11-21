import { MathComponent } from "mathjax-react";
import PropTypes from "prop-types";

const LatexRenderer = ({ value }) => {
    //const parts  = value.split('$');
    return (
      <div>
        <MathComponent  tex={value} />;
      </div>
    );
};

LatexRenderer.propTypes = {
  value: PropTypes.string.isRequired,
};

export default LatexRenderer;
