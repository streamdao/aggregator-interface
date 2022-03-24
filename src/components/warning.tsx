import React from 'react'
import { Modal, Button } from 'antd'

const Warning = ({
  visible,
  onClick
}: {
  visible: boolean
  onClick: () => void
}) => {
  const handleOk = () => {
    localStorage.setItem('agreed', 'true')
    localStorage.setItem(
      'agreedExpire',
      `${Date.now() + 365 * 60 * 60 * 24 * 1000}`
    )

    onClick()
  }

  return (
    <Modal
      onOk={handleOk}
      visible={visible}
      footer={null}
      centered
      closable={false}
    >
      <div>
        <h2 style={{ textAlign: 'center', fontSize: '24px' }}>Warning</h2>

        <p style={{ fontSize: '16px' }}>
          No representation or warranty is made concerning any aspect of StreamDao,
          including its availability, quality, safety, or accessibility. Access
          to and use StreamDao Protocol is entirely at users' own risk and could lead to
          tangible losses. Therefore, users take full responsibility for their
          use of the Stream Protocol, including participation in trading, liquidity
          providing, lending, borrowing, purchasing, or selling of any products,
          including, without limitation of addresses, keys, accounts, tokens,
          coins, options, and other financial or non-financial assets.
        </p>

        <p style={{ fontSize: '16px' }}>
          StreamDao´s Protocol is not available to residents of these countries or areas:
          Democratic Republic of Congo, the Democratic People's Republic of
          Korea(DPRK), Cuba, Iran, Libya, Somalia, Sudan, South Sudan,
          Mainland(China), Hong Kong(China), Macau(China), Syria, the USA, and
          Yemen, or any other jurisdiction("Prohibited Jurisdiction") in which
          prohibiting accessing or using crypto currencies or any function of
          StreamDao.
        </p>

        <p style={{ fontSize: '16px' }}>
          Before using ANY product of StreamDao Protocol, you confirm that:
        </p>

        <p style={{ fontSize: '16px' }}>
          You do NOT reside in a Prohibited Jurisdiction.<br />
          You are legally allowed to use StreamDao´s Protocol in the area you're living.<br />
          You use Stream entirely at your own risk.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '40px'
          }}
        >
          <Button type="primary" size="large" onClick={handleOk}>
            Agree
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default Warning
