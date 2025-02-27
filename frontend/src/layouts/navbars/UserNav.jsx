import { useEffect, useState } from 'react';
import TextLink from '@/components/TextLink';
import Logo from '@/assets/logo.png';
import ProfilePic from '@/assets/sampleprofile.jpg';
import Text from '@/components/Text';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

function UserNav({ activeLink = 0 }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isThereUnreadNotifications, setIsThereUnreadNotifications] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileDpOpen, setIsProfileDpOpen] = useState(false);
  const [isOpenEnvelopeFocused, setIsOpenEnvelopeFocused] = useState(false);
  const [isTrashFocused, setIsTrashFocused] = useState(false);
  
  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsProfileDpOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileDpOpen(!isProfileDpOpen);
    setIsNotificationOpen(false)

  };

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  
  const onFocusNotifEnvelope = () => {setIsOpenEnvelopeFocused(true)}

  const onFocusTrashEnvelope = () => {setIsTrashFocused(true)}

  const onBlurNotifEnvelope = () => {setIsOpenEnvelopeFocused(false)}

  const onBlurTrashEnvelope = () => {setIsTrashFocused(false)}


  useEffect(() => {
    isMobileNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMobileNavOpen]);

  return (
    <section className="relative"> 
      {/* Mobile Links */}
      <section
        className={`absolute top-0 left-0 bg-black/50 z-10 w-screen h-screen ${
          isMobileNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileNav}
      >
        <ul
          className={`bg-white w-[40%] h-full flex flex-col justify-center gap-2 ease-in-out transition-transform duration-100 ${
            isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className={`pl-10 ${activeLink === 0 ? "border-r-4 border-r-blue-500" : ""}`}>
            <TextLink path={"/user/home"} txtContent="Home" txtStyles={`${activeLink === 0 ? "font-bold" : ""} text-md md:text-lg`} />
          </li>
          <li className={`pl-10 ${activeLink === 1 ? "border-r-4 border-r-blue-500" : ""}`}>
            <TextLink path={"/user/rentals"} txtContent="My Rentals" txtStyles={`${activeLink === 1 ? "font-bold" : ""} text-md md:text-lg`} />
          </li>
          <li className={`pl-10 ${activeLink === 2 ? "border-r-4 border-r-blue-500" : ""}`}>
            <TextLink path={"/user/account"} txtContent="Account" txtStyles={`${activeLink === 2 ? "font-bold" : ""} text-md md:text-lg`} />
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <nav className="relative flex items-center px-2 border-b-2 border-b-gray w-full h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px]">
        {/* Hamburger Icon */}
        <section className="w-[20%] z-20 cursor-pointer">
          <div
            onClick={toggleMobileNav}
            className="w-[32px] h-[5px] bg-black text-5xl rounded-sm before:absolute before:translate-y-2 before:rounded-sm before:bg-black before:w-[22px] before:h-[5px] after:absolute after:-translate-y-2 after:rounded-sm after:bg-black after:w-[22px] after:h-[5px]"
          ></div>
        </section>

        {/* Logo */}
        <section className="w-[80%] flex items-center justify-center">
          <Link to={'/user/home'}>
            <img src={Logo} alt="logo" className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px]" />
          </Link>
        </section>

        {/* Profile & Notifications */}
        <section className="w-[20%] flex justify-center relative">
          {isUserLoggedIn ? (
            <section className="flex gap-2 md:gap-10">
              {/* Notifications */}
              <section className="relative flex items-center">
                <div onClick={toggleNotifications} className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[18px] h-[18px] fill-black">
                    <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                  </svg>
                  <span className={`absolute top-2.5 -right-0.5 bg-red-600 text-white rounded-full w-[8px] h-[8px] ${isThereUnreadNotifications ? "flex" : "hidden"} items-center justify-center`}></span>
                </div>
              </section>

              {/* Profile */}
              <section className="rounded-full w-[42px] h-[42px] overflow-hidden" onClick={toggleProfile}>
                <img src={ProfilePic} className="w-full h-auto aspect-square" />
              </section>
            </section>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-black w-[32px] h-[32px]">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          )}
        </section>
      </nav>

      {/* Notification dropdown */}
      {isNotificationOpen && (
        <section className="absolute right-2 top-[70px] md:top-[80px] lg:top-[90px] xl:top-[100px] bg-white shadow-default w-[60%] md:w-[50%] xl:w-[40%] 2xl:w-[30%] rounded-sm h-[400px]">
          <section className='flex items-center justify-between border-b-2 border-b-gray p-3'>
            <Text txtContent={"Notifications"} txtStyles={'text-md font-semibold'}/>
            <Text txtContent={"Mark All As Read"} txtStyles={'text-sm text-blue hover:underline'}/>
          </section>
          {/* Notification Items */}
          <section className='flex flex-col'>
            {/* Notification Card */}
            <Link >
              <section className='flex items-center gap-2 p-5 hover:bg-gray-200 w-full'>
                {/* Notification Type Icon */}
                <section className='w-[10%]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-blue-500 w-[24px]'>
                    <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"/>
                  </svg>
                </section>
                {/* Notification Description */}
                <section className='flex flex-col w-[75%]'>
                  <Text txtContent={"You got a message."} txtStyles={'text-md font-semibold'}/>
                  <Text txtContent={"Please call my number +63919..."} txtStyles={'text-sm font-gray'}/>
                </section>
                {/* Notification Actions */}
                <section className='w-[15%] flex items-center gap-4'>
                  <section className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
                    className='fill-gray w-[16px] cursor-pointer' 
                    onMouseEnter={onFocusNotifEnvelope}
                    onMouseLeave={onBlurNotifEnvelope}
                    >
                      <path d="M64 208.1L256 65.9 448 208.1l0 47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5l0-47.4zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"/>
                    </svg>
                    {/* tooltip */}
                    <section className={`${isOpenEnvelopeFocused ? 'absolute -bottom-10 -left-10 text-nowrap bg-black p-2 rounded-full' : 'hidden overflow-hidden'}`}>
                      <Text txtContent={"Mark As Read"} txtStyles={'text-sm text-white font-semibold'}/>
                    </section>
                  </section>
                  <section className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                    className='fill-gray w-[16px]'
                    onMouseEnter={onFocusTrashEnvelope}
                    onMouseLeave={onBlurTrashEnvelope}
                    >
                      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/>
                    </svg>
                    {/* tooltip */}
                    <section className={`${isTrashFocused ? 'absolute -bottom-10 -left-8 text-nowrap bg-black p-2 rounded-full' : 'hidden overflow-hidden'}`}>
                      <Text txtContent={"Remove"} txtStyles={'text-sm text-white font-semibold'}/>
                    </section>
                  </section>
                </section>
              </section>
            </Link>
          </section>
        </section>
      )}

      {/* Profile dropdown */}
      {
        isProfileDpOpen && (
          <section className="absolute right-2 top-[70px] md:top-[80px] lg:top-[90px] xl:top-[100px] bg-white shadow-default w-[40%] md:w-[30%] xl:w-[20%] rounded-sm h-[120px]">
            <section className='p-2 flex items-center justify-center border-b-2 border-b-gray'>
              <Text txtContent={"Rami Al-Mansouri"} txtStyles={'text-sm font-semibold'}/>
            </section>
            <section className='relative p-2 h-[90%]'>
              <ul>
                <li> 
                  <Link>               
                    <Text txtContent={"Profile"} txtStyles={'hover:underlined'}/>
                  </Link>
                </li>
                <li>                
                  <Button 
                  txtContent={"Sign Out"} 
                  btnStyles={"font-medium w-[95%] absolute bottom-0"}
                  isActive={true}
                  />
                </li>
              </ul>
            </section>
          </section>
        )
      }
    </section> 
  );
}

export default UserNav;
