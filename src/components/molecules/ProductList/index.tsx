import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card, Flex } from 'antd'
import Meta from 'antd/es/card/Meta'
import Button from '~/components/atoms/Button'

import productListStyles from './ProductList.module.scss'

const ProductList = () => {
  const products = Array.from({ length: 17 }, (_, index) => ({
    id: index,
    title: `Card title ${index + 1}`,
    description: `This is the description for card ${index + 1}`,
    imageUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg?seed=8'
  }))

  return (
    <Flex vertical gap={55} justify='center' align='center'>
      <Flex gap={40} wrap>
        {products.map((product) => {
          return (
            <Card
              style={{ width: 300 }}
              cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
              actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <EllipsisOutlined key='ellipsis' />
              ]}
            >
              <Meta
                avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />}
                title='Card title'
                description='This is the description'
              />
            </Card>
          )
        })}
      </Flex>

      <Button className={productListStyles.btnViewMore} color='secondary'>
        View More
      </Button>
    </Flex>
  )
}

export default ProductList
