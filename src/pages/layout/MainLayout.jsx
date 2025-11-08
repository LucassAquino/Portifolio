import Header from '../../components/Header'
import Projects from '../../pages/Projects'
import Footer from '../../components/Footer'
import { Outlet } from "react-router";

export default function MainLayout(){
    return (
    <div>
      <div className="app">
        <div className="fade-in">
          <Header />
        </div>
        <main>
        <div className="fade-in-delayed">
          <Outlet />
        </div>
      </main>      
      <div className="fade-in-delayed">
        <Footer />
      </div>
    </div>
    </div>
  )
}