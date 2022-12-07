

const FeaturedMedia = (props: any) => {
    return(
        <div className="featured-media">
            <iframe className="featured-media__video" width="100%" height="100%" 
            src="https://www.youtube.com/embed/qEVUtrk8_B4?autoplay=1&mute=1&loop=1&start=17" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
            
            <div className="featured-media__bg">
                <div className="featured-media__container">
                    <div className="featured-media__title">John Wick Chapter 4</div>
                    <div className="featured-media__playing">Now Playing</div>
                    <div className="featured-media__location">In theaters and on HBO MAX. Streaming throughout 2023.</div>
                    <div className="featured-media__buttons">
                        <button className="featured-media__play-btn">
                            <i className="fas fa-play"/>
                        </button>
                        <button className="featured-media__info-btn">
                            MORE INFO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMedia;