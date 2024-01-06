import {
    Inter,
    Lato as LatoFont,
    Open_Sans,
    Gothic_A1,
    Libre_Franklin
} from 'next/font/google';
import localFont from 'next/font/local'

export const inter = Inter({subsets: ['latin']});
export const lato = LatoFont({subsets: ['latin'], weight: ["300", "400", "700"]});
export const open_sans = Open_Sans({subsets: ['latin']});
export const gothic_a1 = Gothic_A1({subsets: ['latin'], weight: ["300", "400", "700"]});
export const libre_franklin = Libre_Franklin({subsets: ['latin'], weight: ["300", "400", "700"]});

export const trade_gothic = localFont({
    src: './fonts/TradeGothic-Bold.woff2',
    display: 'swap',
});


