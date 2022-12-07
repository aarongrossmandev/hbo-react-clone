

const CastInfo = (props: any) => {
    return(
        <div className="cast-info">
            <div className="cast-info__group-title">
                Cast & Crew
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>Raphael</li>
                    <li>John</li>
                </ul>
                <ul className="cast-info__crew">
                    <li>Sam</li>
                    <li>Niki</li>
                </ul>
                <ul className="cast-info__crew">
                    <li>Paul Doe</li>
                    <li>Raul</li>
                </ul>
                <ul className="cast-info__crew">
                    <li>Billy</li>
                    <li>Georgie</li>
                </ul>
             </div>

             <div className="cast-info__group-title">
                Directors
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>George Lucas</li>
                    <li>John James</li>
                </ul>
                
             </div>
        </div>
    )
}

export default CastInfo;