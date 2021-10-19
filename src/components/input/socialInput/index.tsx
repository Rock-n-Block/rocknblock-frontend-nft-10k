import { Fragment, FunctionalComponent, h } from "preact";
import { useCallback, useState } from "preact/hooks";
import style from './style.scss';

interface Social {
  name: string;
  iconUrl?: string;
}

const socials: Social[] = [
  {
    name: 'Telegram',
    iconUrl: '../../../assets/img/icons/telegram.svg'
  },
  {
    name: 'E-mail',
    iconUrl: '../../../assets/img/icons/email.svg'
  },
  {
    name: 'Discord',
    iconUrl: '../../../assets/img/icons/discord.svg'
  },
  {
    name: 'Other',
  },
]

interface PropsSocialBtn {
  social: Social;
  isCurrent?: boolean;
  action(): void;
}

interface SocisalsProps {
  onChangeSocial(social: string): void;
  customStyleSocials?: string;
}

const Socials: FunctionalComponent<SocisalsProps> = ({onChangeSocial, customStyleSocials}: SocisalsProps) => {
  const [isVisibleList, setVisibleList] = useState(false);
  const [currentSocial, setCurrentSocial] = useState<Social>(socials[1]);

  const Social: FunctionalComponent<PropsSocialBtn> = ({social, action, isCurrent = false}: PropsSocialBtn) => {
    return (
        <div class={`${style.socBlock} ${customStyleSocials}`} onClick={action}>
          {social.iconUrl ? <img class={style.socIcon} src={social.iconUrl} /> : null}
          <label class={style.socName}>{social.name}</label>
          {isCurrent ? <img class={style.downIcon} src='../../../assets/img/icons/down.svg' /> : null}
        </div>
    )
  }

  const SocialList: FunctionalComponent = () => {
    const action = useCallback((item: Social): void => {
      setVisibleList(false)
      setCurrentSocial(item);
      onChangeSocial(item.name)
    }, [currentSocial]);

    return (
        <div class={style.socList}>
          {socials.map((item) => <Social key={item.name} social={item}
                                         action={ () => action(item)}
          />)}
        </div>
    )
  }

  const onChangeVisible = useCallback((): void => {
    setVisibleList(!isVisibleList)
  }, [isVisibleList]);

  return (
      <div>
        <div class={style.block}>
          <Social social={currentSocial} isCurrent={true} action={onChangeVisible} />
          {isVisibleList ? <SocialList /> : null}
        </div>
      </div>
  )
}

interface Props {
  value: string;
  onChangeInput(contact: any): void;
  onChangeSocial(social: string): void;
  type?: string;
  placeholder?: string;
  customStyleInput?: string;
  customStyleBlock?: string;
  customStyleSocials?: string;
}

const SocialInput: FunctionalComponent<Props> = ({value,placeholder, type, customStyleInput, customStyleBlock, customStyleSocials, onChangeInput, onChangeSocial}) => {
  const onChange = useCallback((event: any): void => onChangeInput(String(event?.target?.value)), []);
  return (
      <Fragment>
        <div class={`${style.inputBlock} ${customStyleBlock}`}>
          <input class={`${style.input} ${customStyleInput}`}
                 placeholder={placeholder}
                 type={type ?? 'text'}
                 value={value}
                 onInput={onChange}
          />
        </div>
        <Socials customStyleSocials={customStyleSocials} onChangeSocial={onChangeSocial} />
      </Fragment>
  )
}

export default SocialInput;