const Warning = ({title, content}) => {
    return (
        <div className="warning">
            <div className="warningTitle">
                <h1>
                    &emsp;&emsp;&emsp;{title}
                </h1>
            </div>
            <br /><br />
            <div className="warningContent">
                <p> 
                    &emsp;&emsp;&emsp;{content}
                </p>
            </div>
        </div>
    )
}

export default Warning