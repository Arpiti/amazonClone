import { React } from 'react';
import Product from '../components/Product'
import '../Home.css';
;
const url_product1Image = "http://www.pngmart.com/files/15/Beard-Trimmer-Philips-PNG.png";
const url_product2Image = "https://pngimage.net/wp-content/uploads/2019/05/smart-led-tv-png-3.png";
const url_product3Image = "https://lh3.googleusercontent.com/proxy/SrghuhENU6XThyTy8k63DF7Gpry201leYyVbJD_x3_Ce6VMHtqDo2hXQt6pn8SiQKI2VBAOa3bRKSJjYLlA0DHQzWnt6Z6_AF53QPVxE8_AvX0LS3YiV9XoJN4z-5hZu5g";
const url_product4Image = "https://images.samsung.com/is/image/samsung/levant-c49hg90-lc49hg90dmmxzn-frontblack-76986739?$LazyLoad_Home_IMG$";
const url_product5Image = "https://lh3.googleusercontent.com/proxy/j35nhnM0uHU2YdXMXf0a5wi8CEGAhYj57Z_-AlUifpn5jPUCS5gDD3G8d5SbGk40h6Hd49xDOIBix6DgJLzk7c88Ftt06BI4Ry4gyBDUKFAkNAC7AxI5gCfBG8xVrKM";
const url_product6Image = "https://lh3.googleusercontent.com/proxy/dxr-aT7idI7qX75Nv4OKNYBm3-v7qNVO07jpakhjY7V-fcj6vO5dzn2WdsGadBv32b9CRjKeZSTnPG73ONgyRs1Kf0OElcHNavsSOAEMVHJk00AiD4hoEc7_tMvIJf5UuCv_XMfILg";

const url_backgrndHomeImage = "https://www.gdonews.it/wp-content/uploads/2020/03/ece.jpg";
const Home = () => {

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={url_backgrndHomeImage} alt="Home page" />
                <div className="home__row">
                    <Product title="Philips Beard Trimmer Cordless for Men QT4005/15 " price="999" rating="4" imgSrc={url_product1Image}/>
                    <Product title="Mi 4X 138.8 cm (55 inch) Ultra HD (4K) LED Smart TV" price="26999" rating="3" imgSrc={url_product2Image} />
                    <Product title="Valeria ArmChair in Provincial Teak Finish. Woodsworth is classic, part contemporary." price="11999" rating="5" imgSrc={url_product3Image}/>
                </div>
                <div className="home__row">
                    <Product title="Buy LG 34 inch Curved 21:9 Ultrawide Gaming Monitor - 144Hz, 1ms, Full HD, IPS Panel with HDMI, Display Port, USB, Audio Out, Heaphone Ports - 34UC79G "
                    price="165000" rating="4" imgSrc={url_product4Image}/>
                </div>
                <div className="home__row">
                    <Product title="PlayStation 5. Sony. Push the boundaries of play with the new generation of PlayStation® accessories."
                    price="49000" rating="5" imgSrc={url_product5Image}/>
                    <Product title="CAPERLAN By Vera Moda - Men Black Solid Hooded Waterproof Leather Jacket"
                    price="16000" rating="4" imgSrc={url_product6Image}/>
                </div>
                <div className="home__row">
                    <Product title="Philips Beard Trimmer Cordless for Men QT4005/15 " price="999" rating="4" imgSrc={url_product1Image}/>
                    <Product title="Mi 4X 138.8 cm (55 inch) Ultra HD (4K) LED Smart TV" price="26999" rating="3" imgSrc={url_product2Image} />
                    <Product title="Valeria ArmChair in Provincial Teak Finish. Woodsworth is classic, part contemporary." price="11999" rating="5" imgSrc={url_product3Image}/>
                </div>
                
            </div>
        </div>
    )
}

export default Home;