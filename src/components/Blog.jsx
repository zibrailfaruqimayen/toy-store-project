import DynamicTitle from "../hooks/DynamicTitle";

const Blog = () => {
  DynamicTitle("Blog");
  return (
    <div className="container mx-auto space-y-5 mb-10">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-2xl">
            Refresh tokens allow you to balance your users access needs with
            your organizations security practices. Access tokens help users get
            the resources they need to complete their tasks, but such tokens can
            also expose your organization to data compromise or other malicious
            actions if a hacker is able to steal them.
          </p>
          <p className="text-2xl">
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key. <br />
            JWT should be stored in cookies. You can use httponly and secure
            flags depending on your requirements. To protect from CSRF samesite
            cookie attribute can be set to strict if it generally fits your
            application - it will prevent logged-in users of your site to follow
            any link to your site from any other site.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl">2. Compare SQL and NoSQL databases?</h2>
          <p className="text-2xl">
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl">3. What is express js? What is Nest JS ?</h2>
          <p className="text-2xl">
            <span className="underline">Express JS:</span> <br />
            Express is a node js web application framework that provides broad
            features for building web and mobile applications. It is used to
            build a single page, multipage, and hybrid web application.
          </p>
          <p className="text-2xl">
            <span className="underline">NestJs:</span>
            <br />
            First of all, It is an open-source Node. js framework for developing
            challenging backend systems that use the design paradigm convention
            over configuration that eliminates the need for explicit
            configuration by allowing developers to utilize common tools and
            code in a particular way.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl">
            4. What is MongoDB aggregate and how does it work ?
          </h2>
          <p className="text-2xl">
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
