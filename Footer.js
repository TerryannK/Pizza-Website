import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <FacebookIcon />
            <p>&copy; 2024 Terryann Kiguta</p>
        </div>
           
         

    </div>
  )
}

export default Footer;
