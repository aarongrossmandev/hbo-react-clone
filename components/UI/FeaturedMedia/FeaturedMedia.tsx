import { useRouter } from "next/router"
import { useStateContext } from "../../HBOProvider"

const FeaturedMedia = (props: any) => {
    const globalState = useStateContext();
    const router = useRouter()

    const clickedPlay = () => {
    router.push(props.linkUrl)
        console.log('send user to media page ' + props.mediaUrl)
    }

    const clickedAdd = (props:any) => {
        globalState.addToList({mediaId: props.mediaId, mediaType: props.mediaType, mediaUrl: props.mediaUrl})
        console.log('clicked to add movie')
            
        }

    const showMedia = () => {
        if (props.type === 'front'){
            return(
                <iframe className="featured-media__video" width="100%" height="100%" 
            src={props.mediaUrl} title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            )
        }else{
            return(
                <img src={props.mediaUrl} className="featured-media__img" />
            )
        }
    }
    return(
        <div className={`featured-media ${props.type === 'single' ? 'featured-media--single' : ''}`}>
            {showMedia()}
            
            <div className="featured-media__bg">
                <div className="featured-media__container">
                    <div className="featured-media__title" onClick={clickedPlay}>{props.title}</div>
                    <div className={`featured-media__playing ${props.type == 'single' ? 'hide-comp' : ''}   `}>Now Playing</div>
                    <div className={`featured-media__location ${props.type == 'single' ? 'hide-comp' : ''}`}>{props.location}</div>
                    <div className="featured-media__buttons">
                        <button className="featured-media__play-btn" onClick={clickedPlay}>
                            <i className="fas fa-play"/>
                        </button>
                        <button className={`featured-media__add-btn ${props.type !== 'single' ? 'hide-comp' : ''}`} onClick={() => clickedAdd(props)}>
                            <i className="fas fa-plus"/>
                        </button>
                        <button className={`featured-media__info-btn ${props.type === 'single' ? 'hide-comp' : ''}`} onClick={clickedPlay}>
                            MORE INFO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMedia;