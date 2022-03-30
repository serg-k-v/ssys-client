import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";

import '../styles/Audit.scss'

const Audit = () => {
  return (
    <div className="content-container">
      <Header />
      <div >
        <LeftSideBar/>

      </div>
    </div>
  );
};

export default Audit;
