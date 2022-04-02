import '../styles/AuditInfoTable.scss'

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
                ]
    return (
        <table className="audit-info-table">
            <tr>
                <th>Uer Identifer</th>
                <th>User Name</th>
                <th>Executable</th>
            </tr>
            {data.map(row => <tr>
                    <td>{row.uid}</td>
                    <td>{row.user}</td>
                    <td>{row.exec}</td>
                </tr>)}
        </table>
    );
}

export default AuditInfoTable;