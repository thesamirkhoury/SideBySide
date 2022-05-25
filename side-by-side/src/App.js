import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import UserRegister from './components/auth module/register/Register'
import UserLogin from './components/auth module/login/Login'
import ForgotPassword from './components/auth module/password reset/PasswordReset'
import Update from "./components/updates module/updates/Updates";
import ExpandUpdate from './components/updates module/update expand/UpdateExpand'
import About from "./components/about/About";
import { useState } from "react";
import Blogs from "./components/blog module/blogs/Blogs";
import ExpandedBlog from './components/blog module/blog expand/BlogExpand'

// User dashboard components
import Sidebar from "./components/use dashboard/sidebar/Sidebar";
import Courses from "./components/use dashboard/courses section/Courses";
import Settings from "./components/use dashboard/settings section/Settings";
import Coupons from "./components/use dashboard/coupon section/Coupons";
import Tickets from "./components/use dashboard/tickets section/Tickets";
import ExtendedTicket from './components/use dashboard/expanded ticket/ExpandedTicket'
import NewTicket from './components/use dashboard/new ticket/NewTicket'

// Admin dashboard components
import AdminSidebar from "./components/admin dashboard/admin sidebar/AdminSidebar";
import Updates from "./components/admin dashboard/update section/UpdatesSection";
import BlogsSection from "./components/admin dashboard/blogs section/BlogsSection";
import LecturesSection from "./components/admin dashboard/lectures section/LecturesSection";
import CouponSection from "./components/admin dashboard/coupon section/Coupons";
import TicketsSection from "./components/admin dashboard/tickets section/TicketsSection";
import UsersSection from "./components/admin dashboard/users section/UsersSection";
import AdminsSection from "./components/admin dashboard/admins section/Admins";
import SettingsSection from "./components/admin dashboard/settings section/Settings";
import ListOfRegisteredUsers from "./components/admin dashboard/registered users list/RegisteredUsers";

import NewUpdate from "./components/admin dashboard/new update/NewUpdate";
import NewBlogPost from "./components/admin dashboard/new post/NewPost";
import NewLecture from "./components/admin dashboard/new lecture/NewLecture";

import Lecture1 from "./components/admin dashboard/lectures section/LecturesSection";
// User dashboard components

function App() {
  const [userLogged, setUserLogged] = useState(true);
  const [adminLogged, setAdminLogged] = useState(false);
  return (
    <Router>
      <div className="navbar">
        <Navbar userLogged={userLogged} adminLogged={adminLogged} />
      </div>
      <div className="sidebar-sections">
        <div
          className={
            userLogged || adminLogged ? "all-components" : "endusercomponent"
          }
        >
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path ='/userregister' element={<UserRegister />} />
            <Route exact path ='/login' element={<UserLogin />} />
            <Route exact path ='/forgotpassword' element={<ForgotPassword/>} />
            <Route exact path="/updates" element={<Update />} />
            <Route exact path="/updates/expandupdate" element={<ExpandUpdate />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blogs/expandedblog" element={<ExpandedBlog />} />

            {/* User dashboard component */}
            <Route exact path="/userdashboard/lectures" element={<Courses />} />
            <Route
              exact
              path="/userdashboard/settings"
              element={<Settings />}
            />
            <Route exact path="/userdashboard/coupons" element={<Coupons />} />
            <Route exact path="/userdashboard/tickets" element={<Tickets />} />
            <Route exact path="/userdashboard/tickets/extendedticket" element={<ExtendedTicket />} />
            <Route exact path="/userdashboard/tickets/newticket" element={<NewTicket />} />


            {/* Admin Dashboard components  */}
            <Route exact path="/admindashboard/updates" element={<Updates />} />
            <Route
              exact
              path="/admindashboard/newupdate"
              element={<NewUpdate />}
            />
            <Route
              exact
              path="/admindashboard/blogssection"
              element={<BlogsSection />}
            />
            <Route
              exact
              path="/admindashboard/newblogpost"
              element={<NewBlogPost />}
            />
            <Route
              exact
              path="/admindashboard/lecturessection"
              element={<LecturesSection />}
            />
            <Route
              exact
              path="admindashboard/newlecture"
              element={<NewLecture />}
            />
            <Route
              exact
              path="/admindashboard/couponsection"
              element={<CouponSection />}
            />
            <Route
              exact
              path="/admindashboard/ticketssectin"
              element={<TicketsSection />}
            />
            <Route
              exact
              path="/admindashboard/userssection"
              element={<UsersSection />}
            />
            <Route
              exact
              path="/admindashboard/adminssection"
              element={<AdminsSection />}
            />
            <Route
              exact
              path="/admindashboard/settingssection"
              element={<SettingsSection />}
            />
            <Route
              exact
              path="/admindashboard/registeredusers"
              element={<ListOfRegisteredUsers />}
            />
          </Routes>
        </div>

        <div className="sidebar-component">
          {userLogged ? <Sidebar setUserLogged={setUserLogged} /> : ""}
          {adminLogged ? <AdminSidebar setAdminLogged={setAdminLogged} /> : ""}
        </div>
      </div>
    </Router>
  );
}

export default App;
