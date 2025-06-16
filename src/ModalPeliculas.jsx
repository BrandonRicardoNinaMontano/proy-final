// ModalPeliculas.jsx
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

function ModalPeliculas({ titulo, resumen }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {titulo}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{titulo}</ModalHeader>
        <ModalBody>{resumen}</ModalBody>
      </Modal>
    </div>
  );
}

export default ModalPeliculas;
