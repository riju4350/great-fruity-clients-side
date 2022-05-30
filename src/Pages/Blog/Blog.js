import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";
const Blog = () => {
  return (
    <Container className="my-5">
      <div className="blogCard">
        <h3>Difference between javascript and node.js</h3>
        <p>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use.
        </p>
      </div>

      <div className="blogCard">
        <h3>When should you use node.js and when should you use mongodb</h3>
        <p>
          <p>
            <b>Node : </b>
            Node. js is primarily used for non-blocking, event-driven servers,
            due to its single-threaded nature. It's used for traditional web
            sites and back-end API services, but was designed with real-time,
            push-based architectures in mind.
          </p>
          <p>
            <b>MongoDB : </b>
            MongoDB is a good choice when your data is document-centric and
            doesn't fit well into the schema of a relational database, when you
            need to accommodate massive scale, when you are rapidly prototyping,
            and a few other use cases.
          </p>
        </p>
      </div>
      <div className="blogCard">
        <h3>Differences between sql and nosql databases.</h3>
        <p>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>
      <div className="blogCard">
        <h3>What is the purpose of jwt and how does it work</h3>
        <p>
          JSON Web Token (JWT) defines a compact and self-contained way for
          securely transmitting information between parties as a JSON object.
          This information can be verified and trusted because it is digitally
          signed.
        </p>
      </div>
    </Container>
  );
};

export default Blog;
