import { Avatar, Card, Empty, Flex, Spin } from 'antd'
import Meta from 'antd/es/card/Meta'
import Button from '~/components/atoms/Button'

import productListStyles from './ProductList.module.scss'
import { IProduct } from '~/interfaces/products'
import { memo } from 'react'

interface IProductProps {
  data: IProduct[]
  onLoadMore: () => Promise<void>
  loading: boolean
  isLoadMore: boolean
}

const ProductList = ({ data, onLoadMore, loading, isLoadMore }: IProductProps) => {
  const isEmpty = !data.length

  return (
    <Flex vertical gap={55} justify='center' align='center'>
      {loading ? (
        <Spin className={productListStyles.spin} spinning={loading} style={{ minHeight: '60vh' }} />
      ) : (
        <Flex gap={40} wrap>
          {!isEmpty ? (
            <>
              {data.map((product) => {
                return (
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                    }
                  >
                    <Meta
                      avatar={<Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />}
                      title={product.title}
                      description='This is the description'
                    />
                  </Card>
                )
              })}
            </>
          ) : (
            <Empty className={productListStyles.empty} />
          )}
        </Flex>
      )}

      {!isEmpty && !loading && (
        <Button loading={isLoadMore} onClick={onLoadMore} className={productListStyles.btnViewMore} color='secondary'>
          View More
        </Button>
      )}
    </Flex>
  )
}

export default memo(ProductList)
