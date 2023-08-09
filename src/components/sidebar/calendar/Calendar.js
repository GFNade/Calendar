import { Outlet } from 'react-router-dom';
import '../../../styles/sidebar/calendar/calendar.scss';
import Header from '../../body/Header';
import Titlecontainer from '../../body/Titlecontainer';
import Navbar from '../../body/Navbar';
const Calendar = () => {
    return (
        <>
            <div className="calendar">
                <Header />
                <div className='title_calendar'>
                    <Titlecontainer />
                    <Navbar />
                </div>
                <div className='calendar_content'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Calendar;