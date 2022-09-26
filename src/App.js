import styles from './App.module.css'
import { Header, Footer, SideMenu, Carousel } from './components'
import { Row, Col } from 'antd'

function App() {
  return (
    <div className={styles.App}>
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
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
