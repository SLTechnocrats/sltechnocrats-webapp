import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function About() {
  // const aboutIntro = useSelector((state) => state.portfolio.aboutIntro);
  // const aboutDetails = useSelector((state) => state.portfolio.aboutDetails);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      name="about"
      className="w-full h-fit  min-h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4 md:p-16 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl text-black-300 mt-10">{accordDetails.name}</p>
        <p className="mt-4 text-black-300">{accordDetails.description}</p>
        <Fragment>
          {aboutDetails?.map(({ id, name, description, edu, eduDetails }) => (
            <Accordion
              key={id}
              open={open === id}
              icon={<Icon id={id} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(id)}
                className="text-gray-400 font-light text-lg text-left"
              >
                {name}
              </AccordionHeader>
              <AccordionBody className="text-gray-300">
                {edu &&
                  eduDetails?.map(({ id, data }) => <li key={id}>{data}</li>)}
                {!edu && description}
              </AccordionBody>
            </Accordion>
          ))}
        </Fragment>
      </div>
    </div>
  );
}

/*
{/* <!-- Services Section --> 
          <section>
            <h2>Our Diverse Service Range Includes:</h2>
            <ul>
              <li>
                <strong>Artificial Intelligence and Machine Learning:</strong>{" "}
                Harnessing the power of AI and ML to transform data into
                actionable insights, driving growth and efficiency.
              </li>
              <li>
                <strong>Full Stack Development:</strong> Building robust,
                scalable, and innovative web and mobile applications from the
                ground up, using the latest technologies and frameworks.
              </li>
              <li>
                <strong>Healthcare Solutions:</strong> Delivering advanced
                healthcare services, including telemedicine and AI-driven
                diagnostics, while ensuring compliance and security.
              </li>
            </ul>
          </section>
          {/* <!-- Why Choose Us Section --> 
          <section>
            <h2>Why Choose Us:</h2>
            <ul>
              <li>
                <strong>Expertise and Innovation:</strong> Our team of experts
                brings together years of experience and a passion for
                innovation, ensuring that we are always at the forefront of
                technology.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> We believe in building
                long-lasting relationships with our clients, with a focus on
                understanding and meeting their unique needs.
              </li>
              <li>
                <strong>Commitment to Excellence:</strong> Our dedication to
                quality and ethical practices is unwavering, as we strive to
                deliver the best solutions to our clients.
              </li>
            </ul>
          </section>

          /* <!-- Portfolio Section --> 
          <section>
            <h2>Explore Our Work:</h2>
            <p>
              <strong>Portfolio and Case Studies:</strong> Our diverse portfolio
              showcases our capabilities and successes across various projects
              in AI, ML, Full Stack Development, and Healthcare.
            </p>
            <p>
              <strong>Client Testimonials:</strong> Hear from our satisfied
              clients who have experienced the transformative impact of our
              solutions.
            </p>
          </section>

          /* <!-- Blog Section --> }
          <section>
            <h2>Stay Informed:</h2>
            <p>
              <strong>Blog and Industry Insights:</strong> Keep up to date with
              the latest trends and insights in technology and healthcare
              through our informative blog.
            </p>
            <p>
              <strong>Company News:</strong> Stay connected with our latest
              achievements and events.
            </p>
          </section>

          {/* <!-- Contact Section --> }
          <section>
            <h2>Get in Touch:</h2>
            <p>
              <strong>Contact Us:</strong> We are here to answer your queries
              and discuss how we can meet your technology needs. Reach out to us
              through our contact page.
            </p>
          </section>
*/

const accordDetails = {
  name: "SL Technocrats Private Limited",
  description: `Our company leads the way in innovative technology solutions, specializing in Artificial Intelligence, Machine Learning, Full Stack Development, and advanced Healthcare Services. We are dedicated to transforming industries and enriching lives through cutting-edge technology and client-centric approaches.\n
      



`,
};

const aboutDetails = [
  {
    id: 1,
    name: "Our Diverse Service Range Includes",
    description: `Artificial Intelligence and Machine Learning: Harnessing the power of AI and ML to transform data into actionable insights, driving growth and efficiency.
Full Stack Development: Building robust, scalable, and innovative web and mobile applications from the ground up, using the latest technologies and frameworks.`,
  },
  {
    id: 2,
    name: "Healthcare Solutions",
    description: `
 Delivering advanced healthcare services, including telemedicine and AI-driven diagnostics, while ensuring compliance and security.`,
  },
  {
    id: 3,
    name: "Why Choose Us",
    description: `
 Expertise and Innovation: Our team of experts brings together years of experience and a passion for innovation, ensuring that we are always at the forefront of technology.
Client-Centric Approach: We believe in building long-lasting relationships with our clients, with a focus on understanding and meeting their unique needs.
Commitment to Excellence: Our dedication to quality and ethical practices is unwavering, as we strive to deliver the best solutions to our clients.
`  },
];
