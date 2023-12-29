export default function FeaturedProduct({product:{name,description,price,image,rating,processor}}){

    return(
        <div className="card">
        <img 
            className="card--image" 
            src={image}
        />
        <div className="card--stats">
            <img src="https://th.bing.com/th/id/OIP.sqqql7S5H3jzZggFtDyWkgHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7" className="card--star" />
            <span>{rating} </span>
            <span className="gray">{name} • </span>
            <span className="gray">{processor}</span>
        </div>
        <p className="card--title">{description}</p>
        <p className="card--price">
            <span className="bold">From ${price}</span> 
        </p>
    </div>
    )
}

   