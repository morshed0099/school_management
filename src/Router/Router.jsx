import AddEmplyee from "../Dashborad/AddEmplyee"
import AddSchool from "../Dashborad/AddSchool"
import AddStudent from "../Dashborad/AddStudent"
import AddTeacher from "../Dashborad/AddTeacher"
import AddedDistic from "../Dashborad/AddedDistic"
import AddedThana from "../Dashborad/AddedThana"
import Dahslayout from "../Dashborad/DashboardLayout/Dahslayout"
import Main from "../layout/Main"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignIn from "../pages/SignIn"

const { createBrowserRouter } = require("react-router-dom")

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signin',
                element:<SignIn />
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dahslayout/>,
        children:[
            {
                path:'/dashboard/addemplyee',
                element:<AddEmplyee />
            },
            {
                path:'/dashboard/addteacher',
                element:<AddTeacher />
            },
            {
                path:'/dashboard/addstudent',
                element:<AddStudent />
            },
            {
                path:'/dashboard/addschool',
                element:<AddSchool />
            },
            {
                path:'/dashboard/adddistic',
                element:<AddedDistic />
            },
            {
                path:'/dashboard/addthana',
                element:<AddedThana />
            }
           
        ]
        
    },
   
])