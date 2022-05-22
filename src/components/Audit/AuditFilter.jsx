
import '../../styles/Audit/AuditFilter.scss'
import '../../styles/Buttons.scss'

import serach from '../../images/research.svg'
import expandFilter from '../../images/expand-filter.svg'
import InputWithValidate from '../../UI/Input'

const AuditFilter = () => {

    const userNameValidator = (data) => {
        console.log(data)
        if (data === "akuma")
            return false;
        return true;
    }

    return (
        <div className="audit-filter">
            <div className="audit-filter-input">
                <InputWithValidate default={{id:"username", type:"text", placeholder:"Username"}}
                    validation={
                        {validClassName:"filter-input",
                         invalidClassName: "filter-input-invalid",
                         validator: userNameValidator}
                        }/>
                <input type="text" className="filter-input" ></input>
                <input type="text" className="filter-input" ></input>
                <input type="text" className="filter-input" ></input>
                <input type="text" className="filter-input" ></input>
                <div className="audit-filter__btns-container">
                    <button className="square-btn filter-btn">
                        <img src={expandFilter} alt="Expand" className="btn-icon"/>
                    </button>
                    <button className="square-btn search-btn">
                        <img src={serach} alt="Search" className="btn-icon"/>
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default AuditFilter;