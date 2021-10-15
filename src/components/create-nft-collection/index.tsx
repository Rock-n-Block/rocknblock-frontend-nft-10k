import {FunctionalComponent, h} from "preact";
import style from './style.scss';

const CreateNftCollection: FunctionalComponent = () => {
    return (
        <div className={style['create-nft']}>
            <div className={style['create-nft__block']}>
                <div className={style['create-nft__block_img']}>
                    <img className={style['create-nft__block_img_cryptopunk']}
                         src='../../assets/img/10knft/10knft-cryptopank.svg' alt='cryptopunk nft' />
                    <div className={style['create-nft__block_img_bg']} />
                </div>
                <h2>Create a 10000+ NFT Pixel Art Collection <span>like CryptoPunk</span></h2>
                <div className={style['create-nft__block_button']}>
                    <a
                        href="#contact-us"
                        className={`${style['about__buttons-contact']} ${style.btn} ${style['btn-orange-cl-solid']} ${style['btn-rounded']}`}>
                        Order Project
                        <img
                            src="../../assets/img/icons/icon-arrow-right-mask.svg"
                            alt="arrow-right"
                        />
                    </a>
                </div>
            </div>
            <div className={style['create-nft__bg']}>
                <img className={style['create-nft__bg_desktop']} src='../../assets/img/10knft/10knft-background.png' alt='bg' />
                <img className={style['create-nft__bg_mobile']} src='../../assets/img/10knft/10knft-background-mobile.png' alt='bg' />
            </div>

            <div className={style['create-nft__block-2']}>
                <div className={style['create-nft__block-2_img']}>
                    <img className={style['create-nft__block-2_img_title-desktop']}  src='../../assets/img/10knft/10knft-big-title.svg' alt='nft big title' />
                    <img className={style['create-nft__block-2_img_title-mobile']}  src='../../assets/img/10knft/10knft-big-title-mobile.png' alt='nft big title' />
                    <img className={style['create-nft__block-2_img_bg']} src='../../assets/img/10knft/10knft-big-title-bg.svg' alt='nft big title bg' />
                </div>
                <div className={style['create-nft__block-2_desc']}>
                    <h2>Do you want to create your OWN "<span>10.000 NFT Collection</span>" like Cryptopunks?</h2>
                    <h3>The Rock'n'Block team allows you to bring your further ideas and connections to life by dynamically
                        filtering and sorting your entire collection in one visually engaging experience. We change the way
                        you use attribute data, revealing trends that would otherwise be invisible. Get your own 10k
                        generator.</h3>
                </div>
            </div>
        </div>
    );
};

export default CreateNftCollection;