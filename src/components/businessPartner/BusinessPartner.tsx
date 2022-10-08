import React from "react";
import { Row, Col, Divider, Typography } from 'antd'

import image1 from '../../assets/images/microsoft-80658_640.png'
import image2 from '../../assets/images/icon-720944_640.png'
import image3 from '../../assets/images/follow-826033_640.png'
import image4 from '../../assets/images/facebook-807588_640.png'

const partnerImages = [
  { src: image1, title: 'Microsoft' },
  { src: image2, title: 'Youtube' },
  { src: image3, title: 'Ins' },
  { src: image4, title: 'Facebook' },
]

export const BusinessPartner: React.FC = () => {
  return (
    <>
      <Divider orientation="left">
        <Typography.Title level={4} type="secondary">
          合作企业
        </Typography.Title>
      </Divider>
      <Row>
        {partnerImages.map((item) => (
          <Col span={6} key={item.title}>
            <img
              src={item.src}
              alt="bussiness-partner"
              style={{
                width: '80%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}