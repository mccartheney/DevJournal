// component to warn user the command dont exist

const NoResult = () => {
    return (
        <div className="noResult">
            <pre>
                Command not found.
            </pre>
            <pre>
                Type <span>help</span> to show all command
            </pre>
        </div>
    )
}

export default NoResult