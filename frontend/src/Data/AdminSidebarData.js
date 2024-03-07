import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import MessageIcon from '@mui/icons-material/Message';

export const adminItems = [
    { title: "Perfil", path: "/dashboard/perfil", icon: <AccountBoxIcon /> },
    { title: "Administrar Usuarios", path: "/dashboard/administrar-usuarios", icon: <SupervisedUserCircleIcon /> },
    { title: "Administrar Citas", path: "/dashboard/hacer-cita", icon: <EditCalendarIcon />,},
    { title: "Mensajes", path: "/dashboard/historial", icon: <MessageIcon /> }
    ];