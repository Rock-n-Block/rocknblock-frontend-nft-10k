import {FunctionalComponent, h} from 'preact';

import style from './style.scss';

const About: FunctionalComponent = () => {
    return (
        <div className={style.about}>
            <img className={style['about__desc-img']} src='../../assets/img/10knft/10knft-desc.svg' alt='nft generator' />
            <img className={style['about__title-img']} src='../../assets/img/10knft/10knft-title.svg' alt='10k' />
            <h2>Generate 10,000 randomly created NFTs based on traits like CryptoPunks</h2>
                <picture>
                    <source type="image/webp" srcSet='../../assets/img/10knft/10knft-arts-mobile.webp' media='(max-width: 768px)' />
                    <source type="image/webp" srcSet='../../assets/img/10knft/10knft-arts.webp' media='(min-width: 768px)' />
                    <img className={style['about__art-img']} src='../../assets/img/10knft/10knft-arts.svg' alt='pixel art' />
                </picture>
                <img className={style['about__bg']} src='../../assets/img/10knft/art-bg.svg' alt='background' />

        </div>
    )
};

export default About;
