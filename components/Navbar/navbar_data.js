import { EmojiHeartEyes, Book, Coin, Star } from 'react-bootstrap-icons';

const list = [
    {
        id: 'demo',
        href: '/demo',
        external: false,
        icon: <EmojiHeartEyes />,
        text: 'Demo',
    },
    {
        id: 'apidocs',
        href: 'https://api-docs.myqr.com',
        external: true,
        newTab: true,
        icon: <Book />,
        text: 'API Docs',
    },
    {
        id: 'features',
        href: '/features',
        external: false,
        newTab: false,
        icon: <Star />,
        text: 'Features',
    },
    {
        id: 'pricing',
        href: '/pricing',
        external: false,
        icon: <Coin />,
        text: 'Pricing',
    }
]

export { list }