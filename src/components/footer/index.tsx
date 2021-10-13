import {FunctionalComponent, h} from 'preact';

import style from './style.scss';
import {useEffect, useState} from "preact/hooks";
import {getCurrentUrl} from "preact-router";
import {links} from "./mock";

const Footer: FunctionalComponent = () => {
    const [isIconsAvailable, setIsIconsAvailable] = useState<boolean>(true);
    const location = getCurrentUrl();

    useEffect(() => {
        if (location === '/company') {
            setIsIconsAvailable(false)
        } else setIsIconsAvailable(true)

    }, [location])

    return (
        <footer>
            <div className={`${style.container} ${style.footer}`}>
                {isIconsAvailable && <nav className={style['social-links']}>
                    <ul className={style['social-links__list']}>
                        {links.map(link => (
                            <li className={style['social-links__link']} key={link.name}>
                                <a
                                    className={style.icon}
                                    href={link.href}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        className={style[`icon-${link.name}`]}
                                        src={`../../assets/img/icons/icon-footer-${link.name}-mask.svg`}
                                        alt={link.name}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>}
                <div className={style.bottom}>
                    <div className={style.links}>
                        <p className={style['bottom__copyright-desktop']}>© Copyright Rock’n’Block 2021</p>
                        <a href="/privacy-policy" target="_top">Privacy Policy</a>
                        <a href="/terms-of-service" target="_top">Terms of Service</a>
                        <a href="/company" target="_top">Company</a>
                    </div>
                    <p className={style['bottom__copyright-mobile']}>© Copyright Rock’n’Block 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
