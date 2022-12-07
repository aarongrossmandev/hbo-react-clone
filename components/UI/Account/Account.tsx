import { useStateContext } from '../../HBOProvider';

const Account = (props: any) => {
    const globalState = useStateContext();
    const loopComp = (comp: any, digit: any) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
        }
    return(
        <div className={`account ${globalState.accountModalOpen ? 'account--active' : ''}`}>
           <div className="account__details">
                <div className="account__title">My List</div>
                <div className="account__watch-list">
                    {loopComp((
                        <div className="account__watch-video">
                        <img src="https://www.awn.com/sites/default/files/styles/large_featured/public/image/featured/posterh-rick_and_morty_1280x720.jpg?itok=IPYESqxZ"/>
                        <div className="account__watch-overlay">
                            <div className="account__watch-buttons">
                                <button className="account__watch-circle">
                                    <i className="fas fa-play"/>
                                </button>
                                <button className="account__watch-circle">
                                    <i className="fas fa-times"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    ), 6)}
                    
                </div>
           </div>
           <div className="account__menu">
            <ul className="account__main">
                <li><a href="#" className="active">My List</a></li>
            </ul>
            <div className="side-nav__divider"/>
            <ul className="account__main">
                <li><a href="#">Account</a></li>
                <li><a href="#">Sign Out</a></li>
            </ul>
           </div>
        </div>
    )
}

export default Account;