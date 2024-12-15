// component to warn user witch his command have sucess

const Sucess = ({sucessMessage, sucesslight}) => {
    return (
        <div className="sucessResult">
            <pre>
                &emsp;&emsp;&emsp;<span>sucess</span>
                <br /><br />
                <p>&emsp;&emsp;&emsp;{sucessMessage} <span>{sucesslight}</span></p>
            </pre>
        </div>
    )
}

export default Sucess