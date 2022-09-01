const Tweet = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>@{props.username}</h3>
            <p><i>{props.date}</i></p>
            <p>{props.text}</p>
            <br/>
        </div>
    )
}