import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryIcon from '@mui/icons-material/History';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const userItems = [
           {title: "Perfil", path: "/dashboard/perfil", icon: <AccountBoxIcon />},
           {title: "Citas", path: "/dashboard/citas", icon: <CalendarMonthIcon />},
           {title: "Hacer Una Cita", path: "/dashboard/hacer-cita", icon: <EditCalendarIcon />},
           {title: "Historial", path: "/dashboard/historial", icon: <HistoryIcon />},
           {title: "Contacto", path: "/dashboard/contacto", icon: <ContactPageIcon />}
       ]

