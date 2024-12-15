import { Empty, Flex, Spin } from 'antd'
import Button from '~/components/atoms/Button'

import productListStyles from './ProductList.module.scss'
import { memo } from 'react'
import { IProduct } from '~/interfaces'
import ProductCard from '../ProductCard'
import classNames from 'classnames'

interface IProductProps {
  data: IProduct[]
  onLoadMore: () => Promise<void>
  loading: boolean
  isLoadMore: boolean
}

const ProductList = ({ data, onLoadMore, loading, isLoadMore }: IProductProps) => {
  const isEmpty = !data?.length

  return (
    <div className={productListStyles.wrapper}>
      {loading ? (
        <Spin className={productListStyles.spin} spinning={loading} style={{ minHeight: '60vh' }} />
      ) : (
        <>
          {!isEmpty ? (
            <Flex
              className={classNames(productListStyles.productList, productListStyles.customScrollbar)}
              gap={40}
              wrap
            >
              {data.map((product) => {
                return <ProductCard key={product.id} product={product} />
              })}
            </Flex>
          ) : (
            <Empty className={productListStyles.empty} />
          )}
        </>
      )}

      {!isEmpty && !loading && (
        <Flex justify='center'>
          <Button loading={isLoadMore} onClick={onLoadMore} className={productListStyles.btnViewMore} color='secondary'>
            View More
          </Button>
        </Flex>
      )}
    </div>
  )
}

export default memo(ProductList)
