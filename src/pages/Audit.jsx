import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";

import '../styles/Audit.scss'

const Audit = () => {
  return (
    <div className="body-container">
      <Header />
      <div className="content-container" >
        <LeftSideBar/>

      </div>
    </div>
  );
};

export default Audit;
