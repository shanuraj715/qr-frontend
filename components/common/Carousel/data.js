import logo from '@/assets/app/logo-white.png'
import dashboard from '@/assets/app/dashboard.png'
import api from '@/assets/app/api.png'

const carouselData = [
    {
        title: 'Customization in your <span>HAND</span>.',
        description: "Unlock limitless possibilities with our QR code customization service! Tailor QR codes to match your brand's identity and make them truly unique. From design to functionality, we've got you covered. Create eye-catching QR codes that leave a lasting impression.",
        image: logo.src
    },
    {
        title: '<span>Dashhboard</span> to manage everyhing.',
        description: 'Experience seamless control with our all-in-one dashboard. Effortlessly manage your account, generate API tokens, craft custom QR codes, and update your profile, all in one place. Streamline your operations and take charge of your digital experience today!',
        image: dashboard.src
    },
    {
        title: '<span>API:</span> Pay-as-You-Go',
        description: 'Experience QR code creation like never before with our revolutionary pay-as-you-go API. Get started with ease – generate stunning QR codes without any upfront costs. Try it out first, and only pay for additional QR codes as you need them.',
        image: api.src
    },
]

export {
    carouselData
}