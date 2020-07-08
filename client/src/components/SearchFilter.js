import React, { useState } from "react";
//import { Button, Modal } from "semantic-ui-react";
import CheckBox from "./CheckBox";
import LocationFilter from "./LocationFilter";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SearchFilter = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Refine Search
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Search Filter</ModalHeader>
        <ModalBody>
          <LocationFilter />
          <CheckBox />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

// using semantic-ui-react
// problem with modal aligning to top left corner of the page
// const SearchFilter = () => {
//   return (
//     <div>
//       <Modal
//         size="tiny"
//         centered={false}
//         trigger={<Button primary>Refine Search</Button>}
//         closeIcon
//       >
//         <Modal.Header>Apply Search Filters</Modal.Header>
//         <Modal.Content>
//           <p>Testing the modal</p>
//           {<CheckBox />}
//         </Modal.Content>
//         <Modal.Actions>
//           <Button negative>Cancel</Button>
//           <Button positive icon="checkmark">
//             Save
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     </div>
//   );
// };

export default SearchFilter;
