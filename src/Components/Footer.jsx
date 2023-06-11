import React from 'react'
import Title from '../assets/Title.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter,faFacebook,faPinterest, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser)

const Footer = () => {
  return (
    <div className='max-w-[860px] mx-auto py-12 px-3 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img src={Title} alt="" className='w-28'/>  
        <p className='py-3'>Calendly is a note-taking and task management application developed by the Calendly Corporation. It is intended for archiving and creating notes in which photos, audio and saved web content can be embedded. Notes are stored in virtual "notebooks" and can be tagged, annotated, edited, searched, and exported.</p>
        <br />
        <p>
        Calendly is available on Android, iOS, macOS, and Microsoft Windows, as well as a web client. It offers free and paid plans for use.
        </p>

        <div className='flex justify-between md:w-[75%] my-4 '>
        
            <a href='/'><FontAwesomeIcon className='p-5' icon="fa-brands fa-twitter" /></a>
            <a href='/'><FontAwesomeIcon className='p-5' icon="fa-brands fa-facebook" /></a>
            <a href='/'><FontAwesomeIcon className='p-5' icon="fa-brands fa-github" /></a>
            <a href='/'><FontAwesomeIcon className='p-5' icon="fa-brands fa-instagram" /></a>
            <a href='/'><FontAwesomeIcon className='p-5' icon="fa-brands fa-whatsapp" /></a>
          
        </div>
      </div>

      <div className='lg:col-span-2 flex justify-between mt-4'>
        <div>
            <h6 className='font-bold text-white'>Product</h6>
            <ul>
                <li className='py-1 text-sm cursor-pointer'>Calendly Free</li>
                <li className='py-1 text-sm cursor-pointer'>Calendly Professional</li>
                <li className='py-1 text-sm cursor-pointer'>Calendly Teams</li>
                <li className='py-1 text-sm cursor-pointer'>Compare Plans</li>
                <li className='py-1 text-sm cursor-pointer'>Student Discount</li>
            </ul>
        </div>

        <div>
            <h6 className='font-bold text-white '>Features</h6>
            <ul>
                <li className='py-1 text-sm cursor-pointer'>Web Clipper</li>
                <li className='py-1 text-sm cursor-pointer'>Templates</li>
                <li className='py-1 text-sm cursor-pointer'>Spaces</li>
                <li className='py-1 text-sm cursor-pointer'>Integration</li>
                <li className='py-1 text-sm cursor-pointer'>Notes Sync</li>
            </ul>
        </div>


        <div>
            <h6 className='font-bold text-white '>Resources</h6>
            <ul>
                <li className='py-1 text-sm cursor-pointer'>Make Connections</li>
                <li className='py-1 text-sm cursor-pointer'>Become an Expert</li>
                <li className='py-1 text-sm cursor-pointer'>Find an Expert</li>
                <li className='py-1 text-sm cursor-pointer'>Early Access</li>
                <li className='py-1 text-sm cursor-pointer'>Affiliates</li>
            </ul>
        </div>


        <div>
            <h6 className='font-bold text-white '>Support</h6>
            <ul>
                <li className='py-1 text-sm cursor-pointer'>Help & Learning</li>
                <li className='py-1 text-sm cursor-pointer'>Troubleshooting</li>
                <li className='py-1 text-sm cursor-pointer'>Forum</li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer
