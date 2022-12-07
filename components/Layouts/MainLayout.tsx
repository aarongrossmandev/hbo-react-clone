import Header from '../UI/Header/Header'
import SideNav from '../UI/SideNav/SideNav';
const MainLayout = (props: any) => {
    return(
    <div style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(1,77,78,1) 100%)', minHeight: '100vh', backgroundAttachment: 'fixed' }}>
    <Header />
    <SideNav />
    <section className="content-container">
        {props.children}
    </section>
    </div>)
}

export default MainLayout;