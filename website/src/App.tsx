import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  //const buttons = [{ title: "Hobbies", link: "/Hobbies" }];
  return (
    <div className="flex flex-col h-screen w-screen]">
      {/* <header className="flex flex-row pt-4 pl-4">
         {buttons.map((ele, idx) => (
           <Link key={idx} to="/whoami/hobbies">
             {ele.title}
           </Link>
         ))}
       </header> */}
      <Outlet />
      <main className="p-6">
        <h1>Hi, I'm Trip 👋</h1>
        <div className="flex flex-row  gap-4">
          <div className="flex-3 flex-col">
            <p>
              I'm a computer scientist and educator currently based in{" "}
              <b>New York.</b>{" "}
            </p>
            <p>
              I'm currently the CTO and co-founder of <a href="https://www.locatahealth.com/" target="_blank">Locata</a>, a YC-backed referral automation startup.
            </p>
            <p>
              Outside of work, my area of focus is the intersection of <b>Computer Science</b>{" "}
              and <b>Education</b>, and I'm particularly interested in how the
              learner's experience has been affected by modern technology,
              especially given the omnipresence of LLM's.{" "}
            </p>
            <p>
              Previously, I worked as a <b>full-stack engineer</b> at the EdTech
              company{" "}
              <a href="https://www.kira-learning.com/" target="_blank">
                Kira
              </a>
              , where I was the <b>engineering lead</b> for a number of
              projects, including a few AI-driven features{" "}
              <a
                href="https://www.youtube.com/watch?v=8m4T8ooO5hs&t=1164s"
                target="_blank"
              >
                you can see here.
              </a>{" "}
            </p>
            <p>
              More recently, I was a <b>research assistant</b> at Prof.{" "}
              <a
                href="https://web.stanford.edu/~cgregg/chris-gregg/"
                target="_blank"
              >
                Chris Gregg
              </a>
              's PinCS Lab, a new group whose focus is <b>P</b>edagogy <b>in</b> <b>C</b>
              omputer <b>S</b>cience. We created a <a href="https://pincs.stanford.edu/interactive-lessons" target="_blank">platform</a> that allows
              anyone to create interdisciplinary lessons that enrich
              non-computational subjects with CS.
            </p>
            <p>
              During that time, I was also an <b>adjunct lecturer</b> at Stanford. I taught{" "}
              <a href="https://web.stanford.edu/class/cs80e/" target="_blank">
                CS80E
              </a>
              , a Computer Architecture course I created in 2023 as a graduate
              student. We had about 30 students with a handful of auditors, and we had a great time!
            </p>
            <p>
              I'm always eager to chat with people about the CS / Education
              space or about my hobbies. Or maybe you just want to know if "Trip
              Master" is my real name. Either way, let's talk!
            </p>
            <br />
            <p>Here are some links, if you're curious:</p>
            { /*<a href={"/CV.pdf"}>My CV</a>*/}
            <a href="https://github.com/tmaster628" target="_blank">
              My Github
            </a>
            <br />
            <Link to={"/"}>My Hobbies (coming soon!)</Link>
            <br />
          </div>
          <div className="flex flex-1 flex-col items-center justify-start">
            <div className="mb-4 bg-[url('/public/trip_1.jpeg')] hover:bg-[url('/public/trip_hungry.jpeg')] bg-cover bg-center w-60 h-100 transition-all duration-10" />
            <p>Trip Master (He/Him)</p>
            <p>trip "at" cs.stanford.edu</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
