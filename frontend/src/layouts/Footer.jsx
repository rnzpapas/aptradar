import Logo from '@/assets/logofullwhite.png';
import Button from '@/components/Button';
import Text from '@/components/Text';
import TextArea from '@/components/TextArea';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="h-[280px] w-full bg-blue flex items-center relative">
        {/* Logo */}
        <section className='w-[30%]'>
            <img src={Logo} alt="logo" className='w-[160px]'/>
        </section>
        {/* Site Links */}
        <section className='w-[30%] h-full pt-10'>
            <Text txtContent={"Site Links"} txtStyles={"text-white text-sm font-semibold"}/>
            <ul className='text-nowrap'>
                <li> <Link to={"/user/home"} className='text-white'> Home </Link> </li>
                <li> <Link to={"/user/rentals"} className='text-white'> My Rentals </Link> </li>
                <li> <Link to={"/user/account"} className='text-white'> Account </Link> </li>
            </ul>
        </section>
        {/* Message Form */}
        <section className='flex flex-col h-full w-[40%] px-2 gap-2 pt-10'>
            <Text txtContent={"Contact Us"} txtStyles={"text-white text-sm font-semibold"}/>
            <TextArea txtStyles={"text-black bg-white h-[120px]"} placeholder={"Send us a message..."}/>
            <Button txtContent={"send a message"} isActive={false} btnStyles={'text-xtrasm w-full'}/>
        </section>
        {/* Copyrights */}
        <section className='absolute bottom-0 w-full flex items-center justify-center'>
            <Text txtContent={"© 2025 APTRADAR. All Rights Reserved"} txtStyles={"text-white text-sm font-semibold"}/>
        </section>
    </footer>
  )
}

export default Footer