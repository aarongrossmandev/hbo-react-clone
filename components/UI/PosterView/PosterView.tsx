

const PosterView = (props: any) => {
    const loopComp = (comp: any, digit: any) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="poster-view">
            <h3 className="poster-view__title">Movies</h3>
            <div className="poster-view__thumbnails">
                
                {loopComp(
                    (<div className="poster-view__thumbnail">
                    <img src="https://i5.walmartimages.com/asr/86bae80c-9bc6-48b2-bc49-da9112d15f8e.09e5625dc667619a33e1d359b8644472.jpeg"/>
                    <div className="poster-view__top-layer">
                        <i className="fas fa-play"/>
                    </div>
                </div>), 10)}
               
            </div>
        </div>
    )
}

export default PosterView;