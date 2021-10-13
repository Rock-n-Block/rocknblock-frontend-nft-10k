import {FunctionalComponent, h} from "preact";
import style from './style.scss';
import {howItWorksCards} from "./mock";

const HowItWorksCards: FunctionalComponent = () => {
    return (
        <div className={style['how-it-works__cards']}>
            <h2>We HELP you step by step into creating <br />
                your own 10K/20K <span>NFT Collection</span></h2>

            <div className={style['how-it-works__cards_block']}>
                {howItWorksCards.map(item =>
                    <div key={`${item.alt}_`} className={style['how-it-works__cards_block_item']}>
                        <div>
                            <img src={item.img} alt={item.alt} />
                        </div>
                        <h3>{item.title}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HowItWorksCards;