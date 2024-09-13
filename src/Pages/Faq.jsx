import React, { useState } from 'react';

const faqs = [
  {
    question: "Q1. How does the 'Intern Teach Intern Earn' program work?",
    answer: (
      <div>
        <p>After completing the course, Interns can opt for teaching.</p>
        <ul className="list-disc list-inside">
          <li>You will first be tested on your skills and expertise.</li>
          <li>If you clear the tests, go to the ITIE section.</li>
          <li>Enter your Email ID and click on Become a Trainer.</li>
          <li>We will match you with an Intern who is looking to study the same course as you.</li>
          <li>After completing the teaching session, Interns will earn compensation and incentives.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Q2. What is the procedure for signing up on the website?",
    answer: (
      <div>
        <p>The sign-up procedure for our website consists of 4 simple steps:</p>
        <ul className="list-disc list-inside">
          <li>Go to our website and click on the Login button and then the Signup button or just click this link <a  href="http://www.baoiam.com/Login/index.html" className="text-blue-600 underline">baoiam.com</a></li>
          <li>Enter a Username of your choice.</li>
          <li>Enter your Email ID.</li>
          <li>Create a strong password with uppercase, lowercase, numbers, and special characters.</li>
          <li>Click on Sign up and there you go, you are now a part of the Baoiam family!</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Q3. How do I enroll or register, if I am interested in an online course?",
    answer: (
      <div>
        <p>The enrollment process is as easy as the sign-up process.</p>
        <ul className="list-disc list-inside">
        <li>Take a Dashboard tour and head to the Courses section.</li>
        <li>You will find a wide range of specially curated courses.</li>
        <li>Explore them and choose the one you like.</li>
        <li>Click on Enroll Now.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Q4. What kind of skill-based courses do you offer?",
    answer: (
      <div>
        <p>We offer a wide range of courses like Web Development, Data Analytics, Graphic Designing, Human Resources, Product Management, Strategic Marketing, SEO, Business Communication, and UI/UX. Head to the Courses section to explore many such skills-centric courses.</p>
      </div>
    ),
  },
  {
    question: "Q5. Can I opt for more than one course at a time?",
    answer: (
      <div>
        <p>Yes, we at Baoiam do not limit your potential and therefore give you the option to choose multiple courses at a time. <br />
        We also provide with options where you can get various discounts by buying multiple courses together.</p>
      </div>
    ),
  },
  {
    question: "Q6. How long does each course take?",
    answer: (
      <div>
        <p>Each course is timed differently depending on the lessons, modules and degree of difficulty. The duration of each course is mentioned on their respective course pages.</p>
      </div>
    ),
  },
  {
    question: "Q7. Do you provide any study material? ",
    answer: (
      <div>
        <p>Yes, we do provide study material that can be downloaded and accessed by you at any time.</p>
      </div>
    ),
  },
  {
    question: "Q8. Are the classes live or recorded?",
    answer: (
      <div>
        <p>We have live classes as it involves interaction and engagement.</p>
      </div>
    ),
  },
  {
    question: "Q9. Will I gain access to the recorded sessions if I’m unable to attend the live classes?",
    answer: (
      <div>
        <p>Yes, we understand that juggling your college studies or work and course studies might be hard, so you will be able to access the recorded sessions.</p>
      </div>
    ),
  },
  {
    question: "Q10. Will there be regular doubt-clearing sessions?",
    answer: (
      <div>
        <p>Yes, the doubt-clearing session is one of the key features of Baoiam, as we don't want our students to have half-baked knowledge.</p>
      </div>
    ),
  },
  {
    question: "Q11. Will I get a 'Certificate of Completion' after completing the course?",
    answer: (
      <div>
        <p>Yes, you will get a Certificate of Completion only after you attend all classes, complete the assignments and projects and get good scores on the tests.</p>
      </div>
    ),
  },
  {
    question: "Q12. How helpful will the Certificate be in future?",
    answer: (
      <div>
        <p>This Certificate can pave the way to your desired career, as you will be trained and highly skilled in your respective field.</p>
      </div>
    ),
  },
  {
    question: "Q13. How do I contact Customer Care for technical or payment issues?",
    answer: (
      <div>
        <ul className="list-disc list-inside">
            <li>Send us an email : <a href="mailto:tutors@baoiam.com" className='text-blue-600 underline'>tutors@baoiam.com </a></li>
            <li>Give us a ring : <a href="tel:+91-8062179867" className='text-blue-600 underline'>+91-8062179867</a>  </li>
        </ul>
      </div>
    ),
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mx-5 shadow-lg  text-gray-600 px-8 my-4">
      <button
        className="w-full text-left flex justify-between items-center py-4 text-lg text-black font-bold hover:scale-105 hover:text-indigo-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="ml-2">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="py-4">
          <hr className=" border-gray-300 mb-4" />
          {answer}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto my-10 ">
      <h2 className="font-bold text-4xl text-center mb-8 mt-20 mx-5 ">
        Frequently Asked <span className="text-indigo-600">Questions</span>
      </h2>

      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
