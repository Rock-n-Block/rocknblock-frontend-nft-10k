import { FunctionalComponent, h } from 'preact';
import {useCallback, useEffect, useState} from 'preact/hooks';
import * as smoothscroll from 'smoothscroll-polyfill';
import {Terms, UpButton} from "../../components";

const TermsPage: FunctionalComponent = () => {
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
    <div>
      <Terms />
      {isActive ? <UpButton /> : null}
    </div>
  )
};

export default TermsPage;

