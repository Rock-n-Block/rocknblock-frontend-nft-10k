import {FunctionalComponent, h} from 'preact';
import {Router} from 'preact-router';

import * as smoothscroll from 'smoothscroll-polyfill';

import Header from './header';
import Footer from './footer';
import ThanksPage from '../pages/Thanks';
import PrivacyPolicyPage from '../pages/PrivacyPolicy';
import TermsPage from '../pages/Terms';
import CompanyPage from '../pages/Company';
import HomePage from "../pages/Home";
import {useEffect, useState} from "preact/hooks";
import PopupPreloader from "./PopupPreloader";


if (typeof window !== "undefined") smoothscroll.polyfill();

const App: FunctionalComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(
        () => {
            setTimeout(
                () => {
                    setIsLoading(!isLoading);
                },
                2000
            );
        },
        []
    );
    return (
        <div id="preact_root">
            {isLoading && <PopupPreloader />}
            <Header />
            <Router>
                <HomePage path='/' />
                <ThanksPage path='/calendly' />
                <PrivacyPolicyPage path='/privacy-policy' />
                <TermsPage path='/terms-of-service' />
                <CompanyPage path='/company' />
            </Router>
            <Footer />
        </div>
    )
};

export default App;
