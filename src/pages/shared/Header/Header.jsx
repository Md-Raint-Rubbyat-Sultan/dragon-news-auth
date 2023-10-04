import moment from 'moment/moment';
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div className='text-center space-y-5 mt-8 md:mt-12'>
            <img className='w-full md:w-auto mx-auto px-4 md:px-0' src={logo} alt="logo of dragon news" />
            <div className='space-y-2 font-medium'>
                <p>Journalism Without Fear or Favour</p>
                <h4 className='text-2xl'>{moment().format("dddd, MMMM D, YYYY")}</h4>
            </div>
        </div>
    );
};

export default Header;