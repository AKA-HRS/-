import React from "react";

const data = [
  {
    title: "Comprehensive Course Catalog",
    description: `Our platform features a wide array of courses across various fields, including technology,
            business, the arts, sciences, and more. Whether you're a beginner
            looking to start from scratch or an expert wanting to deepen your
            expertise, you'll find a course that meets your needs.`,
  },

  {
    title: "Expert Instructors",
    description: `Our courses are taught by
            leading professionals and academics who are passionate about sharing
            their knowledge. These instructors bring years of experience and
            practical insights to help you learn effectively and stay ahead of
            the curve.`,
  },

  {
    title: "Flexible Learning Experience",
    description: `We understand that
            everyone’s learning journey is unique. That’s why "Class Mate" offers
            flexibility in how you learn. Access your courses anytime, anywhere,
            and learn at your own pace. Whether you prefer watching videos,
            reading content, or engaging in interactive activities, our platform
            adapts to your preferred learning style.`,
  },
  {
    title: "Community and Support",
    description: `Learning is more rewarding
            when done together. At "Class Mate", you’ll find a supportive
            community of fellow learners and instructors. Participate in
            discussions, collaborate on projects, and connect with others who
            share your interests.`,
  },
  {
    title: "Recognition and Certification",
    description: `We believe in recognizing your achievements. Upon
            completion of your courses, you'll receive certificates that can be
            shared with your network or added to your professional portfolio.
            These certificates are a testament to your dedication and a valuable
            addition to your resume.`,
  },
];

export function About() {
  return (
    <div className="w-full h-full font-Varela flex flex-col p-5 overflow-y-auto">
      <div className="w-full flex justify-center relative items-center text-4xl my-5 font-bold">
        <div className="relative w-48 h-12 flex justify-start items-start  before:absolute before:content-[''] before:w-1/2 before:-skew-y-12 before:bg-purple-800 before:h-full before:-0 before:top-0 after:absolute after:content-[''] after:w-1/2 after:-skew-y-12 after:bg-purple-800 after:h-full after:right-5 after:top-0">
          <p className="relative m-2  justify-center flex items-center text-3xl text-white z-10 ">
            ABOUT US
          </p>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-4xl font-bold">Our Mission</h1>
        <p className="ml-8">
          At "Class Mate", our mission is to make quality education accessible to
          everyone, everywhere. We believe that learning should be a lifelong
          journey, one that empowers individuals to reach their full potential.
          Whether you're looking to gain new skills, advance your career, or
          explore a personal passion, "Class Mate" is here to guide you every
          step of the way.
        </p>
      </div>

      <div className="my-5">
        <h1 className="text-4xl font-bold ">Who We Are</h1>
        <p className="ml-8">
          "Class Mate" is more than just an online learning platform—it's a
          community of learners, educators, and industry experts dedicated to
          the pursuit of knowledge. Founded by a team of educators and
          technologists, "Class Mate" was created with the vision of transforming
          the way people learn. We bring together the best in education
          technology, expert instruction, and engaging content to provide an
          unparalleled learning experience.
        </p>
      </div>

      <div className="my-5">
        <h1 className="text-4xl font-bold">What We Offer</h1>
        <ul className="ml-8">
          {data.map((item, index) => (
            <li key={index} className="list-disc my-5">
              <strong className="text-xl">{item.title}:</strong>{" "}
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-5 flex-wrap">
        <h1 className="text-4xl font-bold ">Our Vision</h1>
        <p className="ml-8">
          We envision a world where everyone has the opportunity to learn, grow,
          and succeed. By leveraging the power of technology and the expertise
          of our instructors, we aim to remove the barriers to education and
          make learning more inclusive and effective. "Class Mate" is committed
          to continuously innovating and expanding our offerings to meet the
          evolving needs of our learners.
        </p>
      </div>

      <div className="my-5">
        <h1 className="text-4xl font-bold ">Join Us on This Journey</h1>
        <p className="ml-8">
          Education is a powerful tool for change, and at "Class Mate", we're
          passionate about making a positive impact in the lives of our
          learners. Join us on this journey, and unlock the knowledge and skills
          you need to achieve your goals. Together, we can create a brighter
          future through the power of learning.
        </p>
      </div>

      <div className="my-5 text-center w-full flex justify-center items-center">
        <strong className="text-3xl max-md:text-sm">
          Welcome to "Class Mate"—where learning knows no bounds!
        </strong>
      </div>
    </div>
  );
}
