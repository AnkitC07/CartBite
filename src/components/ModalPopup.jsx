import { Redirect } from '@shopify/app-bridge/actions'
import { Button, Modal, TextContainer } from '@shopify/polaris'
import { useState, useCallback } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

function ModalPopup() {
  const [active, setActive] = useState(true)
  const navigate = useNavigate()
  const handleChange = useCallback(() => setActive(!active), [active])
  const handleproceedChange = useCallback(() => {
    navigate('/product')
  }, [active])

  const activator = <Button onClick={handleChange}>Save</Button>

  return (
    <div className="modal_popup" >
      <Modal
        className="modal_inner"
        activator={activator}
        open={!active}
        onClose={handleChange}
        title="Disable variants"
        primaryAction={{
          content: 'Proceed',
          onAction: handleproceedChange,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
              Disable the following variants from getting back in stock
              notifications?
            </p>
            <ul>
              <li>Black/medium</li>
              <li>Black/large</li>
              <li>White/medium</li>
            </ul>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  )
}

export default ModalPopup
