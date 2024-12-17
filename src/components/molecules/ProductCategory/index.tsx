import { Tabs, TabsProps } from 'antd'

import productCategoryStyles from './ProductCategory.module.scss'
import classNames from 'classnames'
import { categoryOpts } from '~/constants'
import Icon from '@ant-design/icons'
import { memo } from 'react'

interface IProductCategoryProps extends TabsProps {
  onGetList: (category?: string) => Promise<void>
}

const ProductCategory = ({ onGetList, className, ...props }: IProductCategoryProps) => {
  return (
    <Tabs
      data-testid='product-category'
      {...props}
      tabBarGutter={24}
      onChange={(category) => onGetList(category)}
      defaultActiveKey={categoryOpts[0].value}
      className={classNames(productCategoryStyles.wrapper, className)}
      items={categoryOpts.map(({ value, label }) => ({
        label,
        key: value
      }))}
      more={{
        icon: (
          <Icon
            component={() => (
              <svg xmlns='http://www.w3.org/2000/svg' width='31' height='34' viewBox='0 0 31 34' fill='none'>
                <path
                  d='M15.8636 14.9643L22.8864 22.6667L24.5417 20.8512L15.8636 11.3334L7.18558 20.8512L8.84087 22.6667L15.8636 14.9643Z'
                  fill='#DA458F'
                />
              </svg>
            )}
          />
        )
      }}
    />
  )
}

export default memo(ProductCategory)
