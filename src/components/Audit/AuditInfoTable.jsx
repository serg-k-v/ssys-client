import '../../styles/Audit/AuditInfoTable.scss'

const HeaderElement = (props) => {
    return (
        <th>
            <section className="adit-table__header-container">
                {props.title}
                <span className="th__underline"></span>
            </section>
        </th>
    );
}

const AuditInfoTable = () => {

    const data = [{"uid":1111, "user":"user", "exec":"docker"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                  {"uid":2333, "user":"akka", "exec":"/sh"},
                  {"uid":2333, "user":"akka", "exec":"/sh"},
                  {"uid":2333, "user":"akka", "exec":"/sh"},
                  {"uid":2333, "user":"akka", "exec":"/sh"},
                  {"uid":2333, "user":"akka", "exec":"/sh"},
                  {"uid":2333, "user":"akka", "exec":"/sh"},
                  {"uid":2333, "user":"akka", "exec":"/sh"},
                  {"uid":2333, "user":"akka", "exec":"/sh"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                  {"uid":2222, "user":"akuma", "exec":"/bin/bash"},
                ]
    return (
        <div className="audit-info">
            <div className="audit-info-table">
                <table>
                    <thead>
                    <tr>
                        <HeaderElement title="Uer Identifer"/>
                        <HeaderElement title="User Name"/>
                        <HeaderElement title="Executable"/>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map(row => 
                        <tr>
                            <td>{row.uid}</td>
                            <td>{row.user}</td>
                            <td>{row.exec}</td>
                        </tr>
                        )}
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
}

export default AuditInfoTable;