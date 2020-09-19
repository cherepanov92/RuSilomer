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


      if (socialList) {
          return(
            <ul className="social">
            {socialList.map(item=> <li key={item.socialName}
                                      className={cl("social__item")}>
                                      <a href={item.socialLink}
                                        className={cl("social__link")}
                                        title={'Перейти в ' + getName(item.socialName)}>
                                        {getImage(item.socialName)}
                                      </a>
                                </li>
                        )
            }
          </ul>
        )
      } else {
        return(<></>)
      }


}

export default Social;