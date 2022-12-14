import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage';
import {v4} from 'uuid';
import { useRouter } from 'next/router';

export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter();
  const saveUser = () => {
    let users = [],
    user;

    if(ls('users') < 1){
      
      user = {
        id: v4(),
        user: globalState.user,
        myListID: []
      }
      users.push(user)
      ls('users', users)
      router.push('/login')
      
      console.log('users:', users)
      console.log('lsusers', ls('users'))
    } else{
      users = ls('users')
      user = {
        id: v4(),
        user: globalState.user,
        myListID: []
      }
      users.push(user)
      ls('users', users)
      console.log('users:', users)
      console.log('lsusers', ls('users'))
      router.push('/login')
    }
  }

  const cancelButton = () => {
    router.push('/login')
  }
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
            <button className="create-user__cancel" onClick={cancelButton}>Cancel</button>
            <button className="create-user__save" onClick={saveUser}>Save</button>
          </div>
      </div>
    </div>
  )
}
