import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start flex-wrap gap-20 max-lg:flex-col '>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo}
              alt=""
              width={150}
              height={46} />
          </a>
          <p className=' text-white-400 sm:max-w-sm mt-5 text-base leading-7 font-montserrat '>Get shoes ready for the new term at your nearest Nike store.
            Find Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center mt-8 gap-5'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}

          </div>
        </div>

        <div className='flex justify-between flex-1 lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white text-2xl font-montserrat leading-normal 
               font-medium mb-6'>
                {section.title}
              </h4>
              <ul >
                {section.links.map((link) => (
                  <li className='text-white-400 hover:text-slate-gray
                   font-montserrat text-base leading-normal cursor-pointer mt-3'
                    key={link.name}>
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>

      <div className='flex justify-between text-white-400 
        mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 
            font-montserrat cursor-pointer'>
          <img src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className=' font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer