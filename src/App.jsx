import { About, Header, Skills, ExpCards, Contact, Modal } from "./Components";

export function App() {
  return (
    <>
      <div className="hidden lg:block absolute h-[430px] blur-[10rem] w-[50vw] rounded-full bg-[#D13876] animate-bubble1" />
      <div className="hidden lg:block absolute h-[430px] blur-[10rem] w-[50vw] rounded-full bg-[#0D0645] animate-bubble2" />
      <div className="hidden lg:block absolute h-[430px] blur-[10rem] w-[50vw] rounded-full bg-[#A01F88] animate-bubble3" />
      <section className="h-full w-full bg-[#090909] inset-0 overflow-hidden flex justify-center items-center lg:p-10">
        <section className="h-full w-full lg:w-3/4 2xl:w-3/5 z-50 bg-black lg:rounded-[50px] relative">
          <Modal />
          <Header />
          <About />
          <Skills />
          <ExpCards />
          <Contact />
        </section>
      </section>
    </>
  );
}

export default App;
