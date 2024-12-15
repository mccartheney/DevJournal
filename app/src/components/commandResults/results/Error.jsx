// component to show a error to a user

const Error = ({errorMessage}) => {
    return (
        <div className="errorResult">
            <p>
                &emsp;&emsp;&emsp;A error Happened : <span>{errorMessage}</span>
            </p>
        </div>
    )
}

export default Error