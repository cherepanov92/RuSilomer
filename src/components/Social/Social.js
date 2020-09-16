import IN from './IN';
import YT from './YT';
import VK from './VK';
import cl from 'classnames';

const Social = ({socialList}) => {

function getImage(abbr){

    switch (abbr) {
        case 'IN':
            return (<IN />);
        case 'YT':
            return (<YT />);
        case 'VK':
            return (<VK />);
        default:
            return (<></>);
      }

}

function getName(abbr){
    let name;

    switch (abbr) {
        case 'IN':
          name= 'Instagram';
          break;
        case 'YT':
          name= 'Youtube';
          break;
        case 'VK':
          name= 'Вконтакте';
          break;
        default:
          name= ' ';
      }

      return name;
}

    return(
        <ul className="social">
            {Object.keys(socialList)
                        .map(e => <li id={e} key={e}
                                    className={cl("social__item")}>
                                    <a href={socialList[e].href}
                                        className={cl("social__link")}
                                        title={'Перейти в ' + getName(e)}>
                                        {getImage(e)}
                                    </a>
                                </li>
                        )
            }
        </ul>

    )

}

export default Social;