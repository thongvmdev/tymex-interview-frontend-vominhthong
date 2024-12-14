import { Col, Flex, Row } from 'antd'
import CoverImage from '~/components/molecules/CoverImage'
import FormFilter from '~/components/molecules/FormFilter'
import markerPlaceStyles from './Marketplace.module.scss'
import ProductList from '~/components/molecules/ProductList'
import ProductCategory from '~/components/molecules/ProductCategory'

const Marketplace = () => {
  return (
    <>
      <CoverImage />
      <Row gutter={[40, 40]} className={markerPlaceStyles.marketplaceContent}>
        <Col xs={24} lg={7}>
          <FormFilter />
        </Col>

        <Col xs={24} lg={17}>
          <Flex gap={40} vertical>
            <ProductCategory />
            <ProductList />
          </Flex>
        </Col>
      </Row>
    </>
  )
}

export default Marketplace
