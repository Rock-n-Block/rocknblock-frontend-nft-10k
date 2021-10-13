import {FunctionalComponent, h} from "preact";
import style from './style.scss';

const KeyAreas: FunctionalComponent = () => {
    return (
        <div className={style['key-areas']}>
            <h2>Key areas of <span>our work</span></h2>
            <div>
                <img className={style['key-areas_img']} src='../../assets/img/10knft/10knft-key-areas.svg' alt='key areas of our work' />
            </div>
            <img className={style['key-areas_bg']} src='../../assets/img/10knft/key-areas-bg.svg' alt='bg' />
        </div>
    );
};

export default KeyAreas;