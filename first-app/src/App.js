import Header from "./Header";
import LeftSideMenu from "./LeftSideMenu";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <Header />
      <div className="wraper">
        <div className="left-bar">
          <LeftSideMenu />
        </div>
        <div className="main-container">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
