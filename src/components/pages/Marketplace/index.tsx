import { Col, Flex, Form, Row } from 'antd'
import CoverImage from '~/components/molecules/CoverImage'
import FormFilter from '~/components/molecules/FormFilter'
import markerPlaceStyles from './Marketplace.module.scss'
import ProductList from '~/components/molecules/ProductList'
import ProductCategory from '~/components/molecules/ProductCategory'
import useActions from './hooks/useActions'
import { FieldType } from '~/interfaces'

const Marketplace = () => {
  const [form] = Form.useForm<FieldType>()
  const { data, loading, handleLoadMore, isLoadMore, getList } = useActions(form)

  return (
    <>
      <CoverImage />
      <Row className={markerPlaceStyles.marketplaceContent}>
        <Col xs={24} md={24} lg={6} xl={7}>
          <FormFilter form={form} onGetList={getList} loading={loading} />
        </Col>

        <Col xs={24} md={24} lg={16} xl={16}>
          <Flex gap={40} vertical>
            <ProductCategory onGetList={getList} />
            <ProductList data={data} onLoadMore={handleLoadMore} loading={loading} isLoadMore={isLoadMore} />
          </Flex>
        </Col>
      </Row>
    </>
  )
}

export default Marketplace
