import cl from 'classnames';

const Backgound_wrapper = ({children, navShow}) => {


  return(
    <div className={cl( { "background-wrapper--colored": navShow
                        }, "background-wrapper")}>
      {children}
    </div>
  )

}


export default Backgound_wrapper;


