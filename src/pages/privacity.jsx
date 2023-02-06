import React from 'react'
import { Countries } from '../assets/svg'
import Footer from '../components/footer'
import Topper from '../components/topper'

import '../styles/infoPages.css'

export default function Privacity() {
  const topperPosition = {
    position: 'absolute',
    top: '1rem',
    left: '5rem'
  }
  return (
    <>
      <section style={topperPosition}>
        <Topper />
      </section>
      <section className='info-container'>
        <h2 className='info-title'>Privacity</h2>

        <div className='info-container-paragraph'>
          <p>Our company is committed to protecting your privacy. We use the information we collect about you to process bookings and to provide a more personalized experience. Please read on for more details about our privacy policy. When you book with us, we need to know your name, e-mail address, and credit card details. This allows us to process and fulfill your booking and to notify you of the status of your request. We also ask for your telephone number, which enables us to contact you urgently if there is a problem with your booking. For some international bookings, we may also ask for your passport number and details of your overseas contacts, which will be used in case of an emergency. To customize the information you receive from us, we may ask for information such as where you heard about us, whether you have visited our site before, what kind of special offers you would be interested in receiving, and whether you would like to receive regular updates and special offers via e-mail. This is all information that will help us improve our service and make your shopping experience more personal and convenient.</p>

          <p>We may also use your personal information to conduct prize draws or competitions and to tell you about any new developments or changes to our business and website.</p>

          <p>Your details are not passed onto any third party unless they are a supplier or contractor directly involved in your booking or your trip. These companies will never share or sell your information and have agreed to treat your details as highly confidential.</p>

          <p><b>Hotely</b> uses Google Analytics (GA) to track user interaction. We use this data to determine the number of people using our site, to better understand how they find and use our web pages and to see their journey through the website.</p>

          <p>Although GA records data such as your geographical location, device, internet browser and operating system, none of this information personally identifies you to us. GA also records your computer's IP address which could be used to personally identify you but Google do not grant us access to this. We consider Google to be a third party data processor.</p>

          <p>Google Analytics makes use of cookies, details of which can be found on Google's developer guides. Disabling cookies on your internet browser will stop GA from tracking any part of your visit to pages within this website.</p>

          <p>We hold personal information for as long as is necessary for the purpose for which it was collected, or as required by law. Personal information provided as part of a booking will be held in accordance with the legal requirement under UAE law. In order to request any amendment or deletion of personal information provided as part of a booking please email: contact@theflightpartnership.com. Please note that all requests for amendment or deletion are subject to any applicable legal and ethical reporting or document filing retention requirements imposed on us.</p>

          <p>You agree to accept our privacy policy when you become a client of <b>Hotely</b> by accessing <b>www.hotely.com</b></p>

          <p>By disclosing your personal information to us using this website or over the telephone, you consent to the collection, storage and processing of your personal information by <b>Hotely</b> as stated in this privacy policy.</p>

          <p>We offer links to other websites. Please note: When you click on links to other websites, we encourage you to read their privacy policies. Their standards may differ from ours.</p>

          <p>As a data subject whose personal information we hold, you have certain rights. If you wish to exercise any of these rights, please email: contact@hotely.com In order to process your request, we will ask you to provide two valid forms of identification for verification purposes. Your rights are as follows:</p>
          <p>* The right to request rectification of any inaccurate personal information we hold about you. In certain circumstances, you may also request the correction of factual inaccuracies.</p>

          <p>The right to object to processing of your personal information where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground. You also have the right to object where we are processing your personal information for direct marketing purposes.</p>

          <p>In certain situations, you have the right to receive a copy of your personal information in a machine-readable format.
          </p>

          <p>Where we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</p>

          <p>
            If you have any questions or comments regarding privacy online privacy issues, please email: contact@hotely.com or write to us at: Office Protection, <b>Hotely</b>, Abu106 First Mall Tower 1 Jumeirah Lakes Towers, Dubai, United Arab Emirates, PO Box: 59515 or you (+971 4 323 2916). If physical postal will be considered within forty days and answered. <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer'>Google Map Location</a>
          </p>
          <Countries />
        </div>

      </section>
      <Footer />
    </>
  )
}
