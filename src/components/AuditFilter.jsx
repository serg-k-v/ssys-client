
import '../styles/AuditFilter.scss'
import '../styles/Buttons.scss'

const AuditFilter = () => {

    return (
        <div className="audit-filter">
            <div className="audit-filter-input">
                <input type="text" className="filter-input" ></input>
                <input type="text" className="filter-input" ></input>
                <input type="text" className="filter-input" ></input>
                <input type="text" className="filter-input" ></input>
                <div>
                    <button className="square-btn filter-btn"></button>
                    <button className="square-btn search-btn"></button>
                </div>
            </div>
            
        </div>
    );
}

export default AuditFilter;