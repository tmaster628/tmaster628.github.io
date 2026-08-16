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
      <main className="p-6 w-screen">
        <h1>Hi, I'm Trip 👋</h1>
        <div className="flex w-screen flex-row justify-between">
          <div className="flex flex-3 flex-col">
            <p>
              I'm currently a <a href="https://www.locatahealth.com/" target="_blank">CTO</a>!
            </p>
            <p>
              Previously, I built <a
                href="https://www.youtube.com/watch?v=8m4T8ooO5hs&t=1164s"
                target="_blank"
              >
                things
              </a> thing in <a href="https://www.kira-learning.com/" target="_blank">EdTech</a>.
            </p>
            <p>
              I was also doing               <a href="https://pincs.stanford.edu/interactive-lessons/" target="_blank">
                research
              </a> and               <a href="https://web.stanford.edu/class/cs80e/" target="_blank">
                teaching
              </a> at Stanford.
            </p>
            <br />
            <br />
            <p>Here are some (currently-unattended) links, if you're curious:</p>
            { /*<a href={"/CV.pdf"}>My CV</a>*/}
            <a href="https://github.com/tmaster628" target="_blank">
              My Github
            </a>
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
