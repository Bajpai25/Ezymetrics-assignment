import React ,{useState , useEffect} from 'react';
import Navbar from "../Navbar/Navbar"
import Sidebar_main from '../Sidebar/Sidebar_main';


const Layout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        if (mobile) {
          setIsCollapsed(true);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); 
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const toggleSidebar = () => {
      if (!isMobile) {
        setIsCollapsed(!isCollapsed);
      }
    };
  
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex">
          <Sidebar_main 
            isCollapsed={isCollapsed} 
            isMobile={isMobile}
            toggleSidebar={toggleSidebar}
          />
          <main 
            className={`
              flex-1 
              transition-all 
              duration-300 
              ${isCollapsed ? 'ml-12' : 'ml-64'} 
              ${isMobile ? 'ml-12' : ''} 
              pt-4
            `}
          >
            <div className="p-4 md:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  };
  export default Layout