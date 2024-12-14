// component to mimic the active command
// that component will be on top of every result like on a normal terminal

const UsedCommand = ({ commandValue }) => {
    return (
        <div className="usedCommand">
            <div className="usedCommand_name">
                <p>
                    Dev@Journal
                </p>
            </div>
            <div className="usedCommand_separator">
                <p>
                    :
                </p>
            </div>
            <div className="usedCommand_location">
                <p>
                    ~
                </p>
            </div>
            <div className="usedCommand_separator">
                <p>
                    $
                </p>
            </div>
            <div className="usedCommand_value">
                <p>{commandValue}</p>
            </div>
        </div>
    )
}

export default UsedCommand