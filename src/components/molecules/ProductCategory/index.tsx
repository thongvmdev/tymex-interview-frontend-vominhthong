import { Tabs, TabsProps } from 'antd'

// import productCategoryStyles from './ProductCategory.module.scss'
import classNames from 'classnames'

type ITabsProps = TabsProps

const ProductCategory = ({ className, ...props }: ITabsProps) => {
  return (
    <Tabs
      {...props}
      // className={classNames(productCategoryStyles.wrapper, className)}
      items={new Array(30).fill(null).map((_, i) => {
        const id = String(i)
        return {
          label: <span style={{ color: '#FFF' }}>{`Tab-${id}`}</span>,
          key: id,
          disabled: i === 28
          // children: `Content of tab ${id}`
        }
      })}
      // onChange={handleTabChange}
      // activeKey={activeSection}
    />
  )
}

export default ProductCategory
