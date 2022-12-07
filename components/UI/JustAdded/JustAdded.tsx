

const JustAdded = (props: any) => {
    const loopComp = (comp: any, digit: any) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="just-added">
            <h3 className="just-added__title">For You</h3>
            <div className="just-added__thumbnails">
                
                {loopComp(
                    (<div className="just-added__thumbnail">
                    <img src="https://i5.walmartimages.com/asr/86bae80c-9bc6-48b2-bc49-da9112d15f8e.09e5625dc667619a33e1d359b8644472.jpeg"/>
                    <div className="just-added__top-layer">
                        <i className="fas fa-play"/>
                    </div>
                </div>), 10)}
               
            </div>
        </div>
    )
}

export default JustAdded;