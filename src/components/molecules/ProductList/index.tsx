import { Empty, Flex, Spin } from 'antd'
import Button from '~/components/atoms/Button'

import productListStyles from './ProductList.module.scss'
import { memo } from 'react'
import { IProduct } from '~/interfaces'
import ProductCard from '../ProductCard'

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
                return <ProductCard key={product.id} product={product} />
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
