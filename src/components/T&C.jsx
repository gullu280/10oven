import React from 'react'
import Footer from './Footer'
function TermAndCondt() {
  return (
    <>
    <div className="container mx-auto mt-28 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms <span className='text-red-700'>and </span>Conditions</h1>
      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">Order Delivery</h2>
        <p>Currently we are only delivering through Swiggy and Zomato...</p>
        {/* Add the rest of your content here */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">Menu</h2>
        <p>The menu is displayed as per the availability of the menu items in the mapped restaurant In case certain menu items are not listed in the menu page, the particular restaurant does not carry those items in the menu. In case of non-availability of ordered product at the mapped restaurant, the order would not be executed. Same would be informed by the restaurant near you. ALL PICTURES SHOWN ARE FOR ILLUSTRATION PURPOSE ONLY.ACTUAL PRODUCT MAY VARY DUE TO PRODUCT ENHANCEMENT.</p>
        {/* Add the rest of your content here */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">Coupons</h2>
        <p>Only 10oven authorised e- Coupons shall be applicable for online order The complete code has to be punched in the coupon section for availing the coupon. The coupon code is not case sensitive. The coupon may not work if the conditions defined in the coupon details are not fulfilled in the order. 10oven holds the right to accept or reject any coupon without giving any reason whatsoever. The coupons are valid for specified period only and will not be accepted after the expiry of the validity period. Coupons cannot be clubbed with any other offer / scheme. Please announce the coupon and coupon code to the order taker while placing the order at the Restaurant. In case of online or on call order, cut and hand over hard-copy of the coupon to the delivery person while taking the delivery Only one coupon is valid per order. Offer valid only in participating restaurants.</p>
        {/* Add the rest of your content here */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">Modify / Cancel the Online Order</h2>
        <p>The online order once placed cannot be modified or cancelled via any digital medium. You can get updated on the status of the order by calling the restaurant directly In case the order which is paid through digital payment method is cancelled due to non-availability of the ordered product at the restaurant, the amount will be returned by reversing the transaction by 10oven. This refund will be returned on the actual source within 5 to7 working days. However, 10oven is not responsible for any delay on the bank side.</p>
        {/* Add the rest of your content here */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">Limited area of delivery</h2>
        <p>Prices are exclusive of all taxes. Prices subject to change without prior notice. Total amount rounded off to the nearest rupee. Delivery guarantee is applicable at the first barrier point (security guard/reception etc.). 10oven does not penalize its drivers for late delivery. 10oven reserves the right to withdraw the service guarantee without prior intimation. Conditions apply.</p>
        {/* Add the rest of your content here */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">Information Security</h2>
        <p>What personal information we gather from you (customers)?

The information we gather from you helps us personalise and continually improve your ordering experience at 10oven through various channels like mobile app, website, information provided by you during ordering process in restaurants, etc.

We use your information to assist you in handling your orders, deliver products and services, process payments, communicate with you about orders, products, services and promotional offers. We also update our records and generally maintain your accounts with us, display your saved order and customer reviews, recommend products and services that might be of your interest such as combos. We further use this information to improve our platform, prevent or detect fraud or abuses of our website and enable third parties to carry out technical, logistical or other functions on our behalf</p>
        {/* Add the rest of your content here */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">Third Party Links</h2>
        <p>The Services may contain links to third-party websites. Your use of these features may result in the collection, processing or sharing of information about you, depending on the feature. Please be aware that we are not responsible for the content or privacy practices of other websites or services which may be linked on our services. We do not endorse or make any representations about third-party websites or services. Our privacy policy does not cover the information you choose to provide to or that is collected by these third parties. We strongly encourage you to read such third parties' privacy policies</p>
        {/* Add the rest of your content here */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">Do we share your information with anybody else?</h2>
        <p>Customer information is the most important part of our business and we take care this information on priority. We only share this information with our business partners for internal purpose to enhance the functionality and improve the quality of our Services, and to personalize your experience while using our Services. We also use this information to display relevant advertising, provide support to you, communicate with you, and comply with our legal obligations</p>
        {/* Add the rest of your content here */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-red-600 font-semibold">How secure is your information with 10oven?</h2>
        <p>We have implemented appropriate physical, electronic, and managerial procedures to safeguard and help prevent unauthorized access to your information and to maintain data security. These safeguards take into account the sensitivity of the information that we collect, process and store and the current state of technology. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. The third party service providers with respect to payment gateway and payment processing are all validated as compliant with the payment card industry standard 

We have implemented SSL on our website so that information collected from you is encrypted during transit as per International Security Standard IS/ISO/IEC 27001:2013.

We don’t store any of your credit card information.  While paying by credit card you are redirected to payment gateway for payment and come back to site after payment.

We have implemented security recommendations as per to safeguard your information as per ISO27001:2013 and PCI-DSS.

We encrypt and store your passwords in our website. We assume no liability or responsibility for disclosure of your information due to errors in transmission, unauthorized third-party access, or other causes beyond our control. You play an important role in keeping your personal information secure. You should not share your user name, password, or other security information for your 10oven’s account with anyone. If we receive instructions using your user name and password, we will consider that you have authorized the instructions
</p>
        {/* Add the rest of your content here */}
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default TermAndCondt
