/* House of Champions, homepage mount */

function App() {
  useChrome();
  return (
    <>
      <Header current="home" />
      <Hero copy="default" />
      <Manifesto />
      <TheSpace />
      <Features />
      <Ticker />
      <Journal />
      <Membership />
      <Contact />
      <HouseWorksAround />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
