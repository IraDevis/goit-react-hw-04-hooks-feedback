// import { Component } from "react";
import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <>
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// class Section extends Component {
// static propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

//   render() {
// return (
//   <>
//     <section>
//       <h2>{this.props.title}</h2>
//       {this.props.children}
//     </section>
//   </>
// );
//   }
// }

// export default Section;
