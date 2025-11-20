import {
    HiOutlineViewGrid,
    HiOutlineHeart,
    HiOutlineUsers,
    HiOutlineShoppingCart,
    HiOutlineHome,
    HiOutlineBookOpen,
    HiOutlineCog,
    HiOutlineQuestionMarkCircle,
    HiOutlineClipboardList,    // للإضافات الجديدة
    HiOutlineUserGroup,        // لإدارة المستخدمين
    HiOutlineArchive           // للمخزون
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'pet-management',
        label: 'Pet Management',
        path: '/dashboard/pet-management',
        icon: <HiOutlineUsers />
    },
    {
        key: 'adoption-center',
        label: 'Adoption Center',
        path: '/dashboard/adoption-center',
        icon: <HiOutlineHeart />
    },
    {
        key: 'boarding-management',
        label: 'Boarding Management',
        path: '/dashboard/boarding-management',
        icon: <HiOutlineHome />
    },
    {
        key: 'appointments-management',
        label: 'Appointments Management',
        path: '/dashboard/appointments-management',
        icon: <HiOutlineBookOpen />
    },
    {
        key: 'medical-records',
        label: 'Medical Records',
        path: '/dashboard/medical-records',
        icon: <HiOutlineClipboardList />
    },
    {
        key: 'store-management',
        label: 'Store Management',
        path: '/dashboard/store-management',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'user-management',
        label: 'User Management',
        path: '/dashboard/user-management',
        icon: <HiOutlineUserGroup />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/dashboard/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/dashboard/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]