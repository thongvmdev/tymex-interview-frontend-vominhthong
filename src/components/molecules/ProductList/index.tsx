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

const ProductList = ({ data, onLoadMore, isLoadMore, loading }: IProductProps) => {
  const isEmpty = !data?.length

  return (
    <div data-testid='product-list' className={productListStyles.wrapper}>
      {loading ? (
        <Flex align='center' className={productListStyles.loadingWrapper} justify='center'>
          <Spin data-testid='spinner-product-list' className={productListStyles.spin} spinning={loading} />
        </Flex>
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
            <Empty className={productListStyles.empty} data-testid='empty-product-list' />
          )}
        </>
      )}

      {!isEmpty && !loading && (
        <Flex justify='center'>
          <Button
            data-testid='view-more-btn'
            loading={isLoadMore}
            onClick={onLoadMore}
            className={productListStyles.btnViewMore}
            color='secondary'
          >
            View More
          </Button>
        </Flex>
      )}
      {/* // TODO: need to custom jason-server to return totals items for handle disable load more */}
    </div>
  )
}

export default memo(ProductList)
