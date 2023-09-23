import { PatchQuestion, Telephone, Diagram3, Command } from 'react-bootstrap-icons';
import { DASHBOARD_URL } from '@/constants'

const footerData = [
    {
        text: "QR Demo",
        to: '/demo',
        external: false,
        classes: ''
    },
    {
        text: "API Documentation",
        to: 'https://api-docs.myqr.com/',
        external: true,
        classes: ''
    },
    {
        text: "Top Feaures",
        to: '/features',
        external: false,
        classes: ''
    },
    {
        text: "Pricing",
        to: '/pricing',
        external: false,
        classes: ''
    },
    {
        divider: true
    },
    {
        text: "FAQs",
        to: '/faq',
        external: false,
        classes: '',
        icon: <PatchQuestion />
    },
    {
        text: "Contact Us",
        to: '/contact-us',
        external: false,
        classes: '',
        icon: <Telephone />
    },
    {
        text: "Sitemap",
        to: '/sitemap',
        external: false,
        classes: '',
        icon: <Diagram3 />
    },

]

const footerData2 = [
    {
        text: "Visit Dashboard",
        to: DASHBOARD_URL,
        external: true,
        classes: '',
        icon: <Command />
    },
    {
        divider: true
    },
]

export {
    footerData,
    footerData2
}