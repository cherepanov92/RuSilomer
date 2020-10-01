import Modal from 'react-modal';
import cl from 'classnames';
import Close_button from '../Buttons/Close_button';
import {connect} from 'react-redux';
import {modalHide} from '../../actions/toggleModal';

const ModalComponent = ({children, modalShow, modalHide}) => {

  return(
    <Modal isOpen={modalShow}
           onRequestClose={modalHide}
           contentLabel="Модальное окно с календарём"
           overlayClassName={cl("modal-overlay")}
           portalClassName={"modal"}
           bodyOpenClassName={"body--modal-open"}
           className={"modal__content"}
           ariaHideApp={false}
           shouldCloseOnOverlayClick={true}
           shouldCloseOnEsc={true}>
      <Close_button cssClass={"modal__close-button"} onClick={modalHide} titleButton="Закрыть окно"/>
      {children}
    </Modal>
  )
}

const mapStateToProps = state => ({
  modalShow: state.modal.show,
});

const mapDispatchToProps =  {
  modalHide,
}

export default  connect(mapStateToProps, mapDispatchToProps)(ModalComponent);