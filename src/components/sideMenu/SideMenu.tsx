import React from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GiftOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
  return (
    <>
      <Menu
        className={styles['side-menu']}
        mode="vertical"
        items={sideMenuList.map((m) => ({
          label: m.title,
          icon: <GiftOutlined></GiftOutlined>,
          key: m.title,
          children: m.subMenu.map((sm) => ({
            label: sm.title,
            icon: <GiftOutlined></GiftOutlined>,
            key: sm.title,
            children: sm.subMenu.map((sms) => ({
              label: sms,
              icon: <GiftOutlined></GiftOutlined>,
              key: sms,
            })),
          })),
        }))}
      ></Menu>
    </>
  )
}
