export default function (props) {


    // Función para obtener la paginación actual
    const getPaginate = () => {
        const resultado = [];
        for (let i = 0; i < props.total; i++) {
            let page = i + 1;

            resultado.push(

                // Cuando se hace click se pasa el número de página
                <a onClick={() => props.onChange(page)}
                    // Comparar la página, si la condición se cumple muestra el numero de pagina resaltado
                    className={props.page === page ? 'active' : ''}>
                    {page}
                </a>
            )
        }
        return resultado;
    }
    return (
        <div className="topbar-filter">

            <div className="pagination2">
                <span>Page {props.page} of {props.total}:</span>

                {/* Array que recorre el total de las paginaciones y devuelve el valor de la pagina activa */}
                {getPaginate()}

            </div>
        </div>
    );
}