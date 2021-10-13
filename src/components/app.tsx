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


if (typeof window !== "undefined") smoothscroll.polyfill();

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
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
