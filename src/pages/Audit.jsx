import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import AuditFilter from "../components/Audit/AuditFilter";
import AuditInfoTable from "../components/Audit/AuditInfoTable";

import '../styles/Audit/Audit.scss'

const Audit = () => {
  return (
    <div className="body-container">
      {/* <Header /> */}
      {/* <div className="content-container" > */}
        <LeftSideBar/>
        <div className="audit-container">
          <AuditFilter/>
          <AuditInfoTable/>
        </div>
      </div>
    // </div>
  );
};

export default Audit;
