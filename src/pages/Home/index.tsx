import {Fragment, FunctionalComponent, h} from 'preact';
import {
    About,
    HowItWorks,
    HowItWorksCards,
    NftGenerator,
    ContactUs,
    CreateNftCollection,
    KeyAreas, UpButton, OtherSites
} from "../../components";
import TelegramWidget from "../../components/telegram-widget";
import {useCallback, useEffect, useState} from "preact/hooks";


const HomePage: FunctionalComponent = () => {

    const [isActive, setIsActive] = useState(false);

    const logIt = useCallback(() => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [])

    useEffect(() => {

        const watchScroll = (): void => {
            window.addEventListener("scroll", logIt);
        }
        watchScroll();
        return (): void => {
            window.removeEventListener("scroll", logIt);
        };
    });

    return (
        <Fragment>
            <TelegramWidget />
            {isActive ? <UpButton /> : null}
            <About />
            <HowItWorksCards />
            <HowItWorks />
            <NftGenerator />
            <CreateNftCollection />
            <KeyAreas />
            <OtherSites />
            <ContactUs title={'GET LIVE TECHNICAL DEMO'} />
        </Fragment>
    )
};

export default HomePage;
