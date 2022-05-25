import React from "react";
import UpdatesSection from './update section/UpdatesSection'
import AdminSidebar from './admin sidebar/AdminSidebar'
import './AdminDashboard.css'
import BlogsSection from "./blogs section/BlogsSection";
import LecturesSection from "./lectures section/LecturesSection";
import CouponSection from './coupon section/Coupons'
import Setting from './settings section/Settings'
import TicketsSection from './tickets section/TicketsSection'
import UsersSection from "./users section/UsersSection";
import Admins from "./admins section/Admins";
function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="courses-components">
     
      </div>
      <div className="sidebar-componentAdmin">
        <AdminSidebar />
      </div>
    </div>
  );
}

export default AdminDashboard;
