
const Tile =(props)=>{
    return (
        <div className={'tile '+ props.classes}>
        <div className="tile__image" data-aos="fade-right">
        <picture>
        <img src={props.image} alt={props.alt} />
        </picture>
        </div>
        <div className="tile__content"data-aos="fade-left">
        {props.children}</div>
        </div>
    )
}

export default Tile;