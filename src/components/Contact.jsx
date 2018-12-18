import React from "react";
const Contact = props => {
  // console.log(props);
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  //Programmatic Redirects
  return (
    <div className="container">
      <h4 className="center">Contact...</h4>
    </div>
  );
};

export default Contact;
