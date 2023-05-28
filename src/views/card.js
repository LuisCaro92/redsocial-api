


const Card = (props) => {
    return (
        <div className="card d-flex justify-content-center" style={{"width":400,"height":500 }}>
            <img src={props.images} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    
                </div>
        </div>
    )
}

export default Card;