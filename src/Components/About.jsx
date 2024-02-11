import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-16 p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Company</h1>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-4 text-left">
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Welcome to [Your Company Name]. We are passionate about delivering exceptional [brief overview of your services/products]. Our mission is to [state your mission]. Since [year], we have been committed to [mention any key achievements or milestones].
          </p>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            At [Your Company Name], we value integrity, innovation, and customer satisfaction. Our dedicated team works collaboratively to ensure the highest standards in everything we do.
          </p>
        </div>

        <div className="md:w-1/2 mb-4 text-left">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>

            <ul className="list-disc ml-6 text-gray-700">
              <li>Customer Satisfaction</li>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Collaboration</li>
              {/* Add more values as needed */}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>

        <div className="flex flex-wrap justify-center">
          {/* Example of team member card */}
          <div className="w-full p-4 flex justify-center items-center space-x-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700 mb-2">Position</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa ullamcorper, fermentum turpis nec, scelerisque nibh.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700 mb-2">Position</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa ullamcorper, fermentum turpis nec, scelerisque nibh.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700 mb-2">Position</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa ullamcorper, fermentum turpis nec, scelerisque nibh.</p>
            </div>
          </div>

          {/* Add more team member cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
