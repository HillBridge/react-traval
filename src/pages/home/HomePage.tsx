import React from "react";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartner,
} from '../../components'
import { Row, Col, Typography } from 'antd'
import { productList1, productList2, productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_02-04.png'
import sideImage2 from '../../assets/images/sider_2019_02-04-2.png'
import sideImage3 from '../../assets/images/sider_2019_12-09.png'
import styles from "./HomePage.module.css";

export class HomePage extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header></Header>
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <div style={{ background: 'red' }}>
                <SideMenu></SideMenu>
              </div>
            </Col>
            <Col span={18}>
              <div style={{ background: 'blue' }}>
                <Carousel></Carousel>
              </div>
            </Col>
          </Row>
          <ProductCollection
            title={<Typography.Text type="warning">爆款推荐</Typography.Text>}
            sideImage={sideImage}
            products={productList1}
          ></ProductCollection>
          <ProductCollection
            title={<Typography.Text type="danger">新品上市</Typography.Text>}
            sideImage={sideImage2}
            products={productList2}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Text type="secondary">国内游推荐</Typography.Text>
            }
            sideImage={sideImage3}
            products={productList3}
          ></ProductCollection>
          <BusinessPartner></BusinessPartner>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

