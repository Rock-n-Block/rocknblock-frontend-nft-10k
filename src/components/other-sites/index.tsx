import {FunctionalComponent, h} from "preact";
import style from "./style.scss";
import {otherSites} from "./mock";

const OtherSites: FunctionalComponent = () => {
    return (
        <div className={`${style['sites']}`}>
            <div className={style['sites__container']}>
                {otherSites.map((item, index: number) =>
                    <div key={`${item.title}_${index}`} className={style['sites__container_item']}>
                        <div className={style['sites__container_item_img']}>
                            <img src={item.img} alt={item.alt} />
                        </div>
                        <h3>{item.title}</h3>
                        <a
                            href={item.href}
                            rel="noreferrer"
                            target="_blank"
                            className={`${style['sites__buttons-order']} ${style.btn} ${style['btn-white']} ${style['btn-hover']} ${style['btn-rounded']}`}
                        >
                            Click here
                            <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OtherSites;