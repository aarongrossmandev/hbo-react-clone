import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider'


export default function CreateUser() {
  const globalState = useStateContext();
  console.log(globalState)
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo"/>
          <span className="create-user__title">
            Who Is Watching?
          </span>
        </div>


          <div className="create-user__form">
            <img className="create-user__user-img" src={globalState.defaultUserImg}/>
                <div className="create-user__input-group">
                    <label>Name</label>
                    <input value={globalState.user} onChange={globalState.createUserAction} type="text" className="create-user__inputText" />
                    <div className="create-user__colors">
                        <div className="create-user__color create-user__color--active" style={{
                            backgroundColor:'rgb(2,0,36)', 
                            background: 'linear-gradient(135deg, rgba(2,0,36,1) 40%, rgba(1,236,255,1) 100%, rgba(0,212,255,1) 100%)'}}/>
                            <div className="create-user__color" style={{
                            backgroundColor:'rgb(21,0,36)', 
                            background: 'linear-gradient(135deg, rgba(21,0,36,1) 40%, rgba(255,1,1,1) 100%, rgba(255,0,0,1) 100%)'}}/>
                            <div className="create-user__color" style={{
                            backgroundColor:'rgb(0,28,36)', 
                            background: 'linear-gradient(135deg, rgba(0,28,36,1) 40%, rgba(0,255,111,1) 100%, rgba(0,255,111,1) 100%)'}}/>
                            <div className="create-user__color" style={{
                            backgroundColor:'rgb(0,28,36)', 
                            background: 'linear-gradient(135deg, rgba(0,28,36,1) 40%, rgba(176,255,0,1) 100%, rgba(176,255,0,1) 100%)'}}/>
                            <div className="create-user__color" style={{
                            backgroundColor:'rgb(77,31,111)', 
                            background: 'linear-gradient(135deg, rgba(77,31,111,1) 40%, rgba(255,158,0,1) 100%, rgba(255,158,0,1) 100%)'}}/>
                            
                    </div>
                </div>
            </div>

          <div className="create-user__buttons">
            <button className="create-user__cancel">Cancel</button>
            <button className="create-user__save">Save</button>
          </div>
      </div>
    </div>
  )
}
