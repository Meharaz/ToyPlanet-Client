import React from 'react';
import useTitle from '../../UseTitle/UseTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='mt-20 p-10'>
            <h1 className='text-3xl text-center font-bold mb-10'>Questions & Answers</h1>
            <section>
                <div>
                    <h2 className="text-lg font-bold">
                        1.  What is   <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                            an access token and refresh token?
                        </span> How do  <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                            they work and where should we store them
                        </span> on the client-side?

                    </h2>
                    <p className="text-sm leading-6">
                        <span className="p-4">
                            <span className='font-extrabold text-xl'>**</span> An access token is a unique credential issued to a user upon successful authentication. It acts as proof of authorization, granting access to specific resources or actions on a web application or API. Access tokens are short-lived and contain user identification data, enabling secure access to protected resources when included in request headers.</span> <br />
                        <span className="p-4">
                            <span className='font-extrabold text-xl'>**</span> A refresh token is a credential given to a user during authentication, with a longer lifespan compared to access tokens. It is primarily used to obtain new access tokens without requiring the user to log in again. When an access token expires, the client application sends the refresh token to the server, which validates it and issues a new access token, allowing the user to continue accessing protected resources seamlessly without re-authentication. Refresh tokens are securely stored on the client-side, often as HTTP-only cookies or in secure local storage, to minimize the risk of unauthorized access and enhance security.</span> <br />
                        <span className="p-4">
                            <span className='font-extrabold text-xl'>**</span>Access tokens and refresh tokens work together to facilitate secure authentication and authorization in web applications. Upon successful authentication, the server issues an access token, which is used to access specific resources for a limited time. When the access token expires, the client sends the refresh token to the server to obtain a new access token without requiring the user to log in again. It is crucial to store refresh tokens securely on the client-side, typically as HTTP-only cookies or in secure local storage, to prevent unauthorized access and potential security risks. Storing access tokens temporarily in memory during the user's session is common, ensuring they are short-lived and not stored persistently. Following these practices helps enhance the overall security and user experience of the application.</span> <br />
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-bold">
                        2.  Compare   <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                            SQL and NoSQL
                        </span> databases?

                    </h2>
                    <p className="text-sm leading-6">
                        <span className="p-4">
                            <span className='font-extrabold text-xl'>**</span>
                            SQL and NoSQL databases are two different types of database management systems with distinct approaches to data storage and management. SQL databases, also known as relational databases, use a structured schema to store data in tables with predefined relationships between them. They offer strong data consistency, ACID (Atomicity, Consistency, Isolation, Durability) properties, and are suitable for complex queries and transactions. On the other hand, NoSQL databases, also known as non-relational databases, offer a flexible schema or schema-less structure to store data in various formats, such as key-value, document, column-family, or graph. NoSQL databases prioritize horizontal scalability, high performance, and flexible data models, making them suitable for handling large amounts of unstructured or semi-structured data and distributed systems. The choice between SQL and NoSQL databases depends on the specific project requirements, data structure, and scalability needs of the application.</span> <br />
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-bold">
                        3. What is   <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                            express js?
                        </span>  What is   <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                            Nest JS ?
                        </span>

                    </h2>
                    <p className="text-sm leading-6">
                        <span className="p-4">
                            <span className='font-extrabold text-xl'>**</span> Express.js is a minimalist and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of robust features and middleware that handle common tasks like routing, request handling, and response rendering. Express.js is lightweight, easy to learn, and allows developers to create server-side applications efficiently with its intuitive API. It is well-suited for both small-scale projects and large-scale applications, making it a popular choice for web development in the Node.js ecosystem.</span> <br />
                        <span className="p-4">
                            <span className='font-extrabold text-xl'>**</span> Nest.js is a progressive and powerful Node.js framework built on top of Express.js. It follows the principles of modularity, extensibility, and scalability, aiming to provide developers with a structured and organized framework for building server-side applications. Nest.js leverages decorators and TypeScript to enable robust dependency injection and provide a seamless development experience. Its architecture promotes the use of modules, services, controllers, and decorators, making code organization and maintainability more straightforward. Nest.js is particularly suitable for building complex and scalable applications and is well-regarded for its clean code structure and strong community suppo</span> <br />
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-bold">
                        4. What is   <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                            MongoDB aggregate
                        </span> &  <span className="animate-text bg-gradient-to-r ml-1 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-lg font-black">
                            how does it work ?
                        </span>

                    </h2>
                    <p className="text-sm leading-6">
                        <span className="p-4">
                            <span className='font-extrabold text-xl'>**</span> MongoDB's aggregate is a powerful framework that enables advanced data processing and aggregation operations on documents within a collection. It allows developers to perform complex queries, transformations, and computations on the data, similar to SQL's GROUP BY and JOIN operations. The aggregate pipeline consists of multiple stages, each applying a specific operation to the data. These stages can include grouping, filtering, projecting, sorting, and more, allowing for flexible and precise data analysis. Aggregation in MongoDB is particularly useful for generating reports, performing data analytics, and extracting insights from large datasets.</span> <br />
                        <span className="p-4">
                            <span className='font-extrabold text-xl'>**</span> The aggregate pipeline in MongoDB works by sequentially applying the specified stages to the documents in the collection. Each stage processes the input data and passes the modified data to the next stage in the pipeline. The pipeline's flexibility allows developers to chain multiple stages together to achieve complex aggregation tasks. During the aggregation process, MongoDB optimizes performance by leveraging indexes and parallelizing the computation across multiple shards in a sharded cluster. This makes aggregation efficient even for large datasets. The result of the aggregation is a structured output that can be further analyzed, used for reporting, or stored in another collection for future use.</span> <br />
                    </p>
                </div>

            </section>
        </div>
    );
};

export default Blogs;