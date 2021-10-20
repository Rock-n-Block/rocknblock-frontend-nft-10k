import {Fragment, FunctionalComponent, h} from 'preact';
import {useEffect, useState} from 'preact/hooks';

import style from './style.scss';

import BlockHeader from '../block-header';

import useGoogleReCaptchaV2 from '../../hooks/useGoogleReCaptcha';
import { RECAPTCHA_KEY } from '../../definitions';
import {ContactUsProps} from "../../types";
import { SocialInput } from '..';

const ContactUs: FunctionalComponent<ContactUsProps> = ({title, subtitle}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [idea, setIdea] = useState('');
  const [social, setSocial] = useState('E-mail');
  const [token, setToken] = useState('');

  const { ReCaptchaBadge, executeReCaptcha } = useGoogleReCaptchaV2({
    siteKey: RECAPTCHA_KEY
  });

  const formData = JSON.stringify({name, contact, message: idea, social});

  const headers = {
    'Content-Type': 'application/json',
  };

  const fetchForm = (token: string): void => {
    if (token) fetch(`https://rnblading.rocknblock.io/api/v2/email/`, {
      method: 'POST',
      headers,
      body: formData
    }).then(response => {
      if (response.ok) {
        console.log('OK:', response.json());
        setIsSubmitted(true);
      } else {
        console.log('Error:', response);
      }
    }).catch(response => console.log('Error:', response));
  }

  const onSubmit = async (e: Event | undefined): Promise<void> => {
    if (e) e.preventDefault();

    if (name && contact && idea) {
      setIsCompleted(true);
      try {
        const token = await executeReCaptcha();
        setToken(token);
        fetchForm(token);
      } catch (e) {
        console.error(e);
      }

      setName('');
      setContact('');
      setIdea('');
    } else {
      setIsCompleted(false);
      setIsSubmitted(true);
    }
  }

  const onSetName = (e: any): void => {
    setName(e.target.value);
  }

  const onSetIdea = (e: any): void => {
    setIdea(e.target.value);
  }

  return (
      <div className={`${style['contact-us']} ${style.container}`} id="contact-us">
        <BlockHeader
            style={style}
            primary={title}
            secondary={subtitle}
        />
        <form name="contact-us-form" onSubmit={(): Promise<void> => onSubmit(event)} className={style['contact-us__form']}>
          <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
          <input type="hidden" name="action" value="validate_captcha" />
          <input
              className={style['contact-us__form__input']}
              type='text'
              placeholder='Name'
              value={name}
              onInput={(): void => onSetName(event)}
          />
          <label htmlFor="" className={style['visually-hidden']}>Enter your name</label>
          <SocialInput placeholder={'Your contact'}
                       customStyleBlock={style.socialsBlock}
                       customStyleInput={style['contact-us__form__input']}
                       customStyleSocials={style.socialsType}
                       value={contact}
                       type='text'
                       onChangeInput={setContact}
                       onChangeSocial={setSocial}
          />
          <textarea
              className={`${style['contact-us__form__input']} ${style['contact-us__form__input-textarea']}`}
              rows={1}
              placeholder="Briefly describe your project or idea"
              value={idea}
              onInput={(): void => onSetIdea(event)}
          />
          <label htmlFor="" className={style['visually-hidden']}>Briefly describe your project or idea</label>
          <p className={style.terms}>
            By using the service, you accept the <a href="/terms-of-service" target="_top">Terms of Service</a>
          </p>
          <button
              type="submit"
              className=
                  {`${style['contact-us__form__submit-btn']} ${style.btn} ${style['btn-orange']} ${style['btn-rounded']}`}
          >
            Submit request
          </button>
          <div className={style['g-recaptcha']}>
            {ReCaptchaBadge && ReCaptchaBadge}
          </div>
        </form>
        <div
            id="contact-us-popup"
            className={`${style['contact-us__popup-container']} ${isSubmitted ? style.show : null}`}
            onClick={(): void => setIsSubmitted(false)}
        >
          <div className={`${style['contact-us__popup']} ${style.popup}`}>
            <h3 className={style.popup__title}>{isCompleted ? 'Thanks for your request!' : 'Wrong input, please try again'}</h3>
            <button
                className={`${style.btn} ${style['btn-orange']} ${style['btn-rounded']} ${style['popup__button-ok']}`}
                onClick={(): void => setIsSubmitted(false)}
            >
              Close
            </button>
            <div className={`${style['background-img']} ${style['background-img-left']}`}>
              <img src="../../assets/img/background-popup-left.png" alt="background-popup-left" />
            </div>
            <div className={`${style['background-img']} ${style['background-img-right']}`}>
              <img src="../../assets/img/background-popup-right.png" alt="background-popup-right" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactUs;