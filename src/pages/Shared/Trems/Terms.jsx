import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        aperiam debitis corrupti, enim consequuntur est placeat natus accusamus
        impedit praesentium quas, qui aut autem sapiente nisi repellendus animi
        dicta? Labore?
      </p>
      <br />
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
