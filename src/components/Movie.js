export default function Movie(props) {

    return (

        <div className="movie-item-style-2">
            
            {/* Imagen */}
            <img src={props.img} alt="" />
            
            <div className="mv-item-infor">

                {/* Titulo */}
                <h6>
                    <a href="moviesingle.html">
                        {props.title}
                    </a>
                </h6>

                {/* Calificación */}
                <p className="rate"><i className="ion-android-star"></i>
                    {props.rate}
                </p>

                {/* Descripción */}
                <p className="description">{props.description}</p>
                
                {/* Duración */}
                <p className="runTime">{props.runTime}</p>
                
                {/* Director */}
                <p className="director">{props.director}</p>
                
                {/* Actores */}
                <p className="stars">{props.stars}</p>

                {/* Fecha */}
                <p className="date"><span>{props.date}</span></p>
            </div>
        </div>

    )
}