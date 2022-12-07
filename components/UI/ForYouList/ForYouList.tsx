

const ForYouList = (props: any) => {
    const loopComp = (comp: any, digit: any) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="foryou-list">
            <h3 className="foryou-list__title">For You</h3>
            <div className="foryou-list__thumbnails">
                
                {loopComp(
                    (<div className="foryou-list__thumbnail">
                    <img src="https://www.awn.com/sites/default/files/styles/large_featured/public/image/featured/posterh-rick_and_morty_1280x720.jpg?itok=IPYESqxZ"/>
                    <div className="foryou-list__top-layer">
                        <i className="fas fa-play"/>
                    </div>
                </div>), 10)}
               
            </div>
        </div>
    )
}

export default ForYouList;