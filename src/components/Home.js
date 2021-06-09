import { React } from 'react';
import Product from '../components/Product'
import '../Home.css';
;
const url_product1Image = "http://www.pngmart.com/files/15/Beard-Trimmer-Philips-PNG.png";
const url_product2Image = "https://pngimage.net/wp-content/uploads/2019/05/smart-led-tv-png-3.png";
const url_product3Image = "https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-Transparent-Images.png";
const url_product4Image = "https://images.samsung.com/is/image/samsung/levant-c49hg90-lc49hg90dmmxzn-frontblack-76986739?$LazyLoad_Home_IMG$";
const url_product5Image = "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony-PlayStation-2-30001-wController-L.png";
const url_product6Image = "https://pngimg.com/uploads/leather_jacket/leather_jacket_PNG44.png";

const url_backgrndHomeImage = "https://www.gdonews.it/wp-content/uploads/2020/03/ece.jpg";
const Home = () => {

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={url_backgrndHomeImage} alt="Home page" />
                <div className="home__row">
                    <Product id="1" title="Philips Beard Trimmer Cordless for Men QT4005/15 " price="999" rating="4" imgSrc={url_product1Image}/>
                    <Product id="2" title="Mi 4X 138.8 cm (55 inch) Ultra HD (4K) LED Smart TV" price="26999" rating="3" imgSrc={url_product2Image} />
                    <Product id="3" title="Valeria ArmChair in Provincial Teak Finish. Woodsworth is classic, part contemporary." price="11999" rating="5" imgSrc={url_product3Image}/>
                </div>
                <div className="home__row">
                    <Product id="4" title="Buy LG 34 inch Curved 21:9 Ultrawide Gaming Monitor - 144Hz, 1ms, Full HD, IPS Panel with HDMI, Display Port, USB, Audio Out, Heaphone Ports - 34UC79G "
                    price="165000" rating="4" imgSrc={url_product4Image}/>
                </div>
                <div className="home__row">
                    <Product id="5" title="PlayStation 5. Sony. Push the boundaries of play with the new generation of PlayStation® accessories."
                    price="49000" rating="5" imgSrc={url_product5Image}/>
                    <Product id="6" title="CAPERLAN By Vera Moda - Men Black Solid Hooded Waterproof Leather Jacket"
                    price="16000" rating="4" imgSrc={url_product6Image}/>
                </div>
                <div className="home__row">
                    <Product id="7" title="Philips Beard Trimmer Cordless for Men QT4005/15 " price="999" rating="4" imgSrc={url_product1Image}/>
                    <Product id="8" title="Mi 4X 138.8 cm (55 inch) Ultra HD (4K) LED Smart TV" price="26999" rating="3" imgSrc={url_product2Image} />
                    <Product id="9" title="Valeria ArmChair in Provincial Teak Finish. Woodsworth is classic, part contemporary." price="11999" rating="5" imgSrc={url_product3Image}/>
                </div>
                
            </div>
        </div>
    )
}

export default Home;