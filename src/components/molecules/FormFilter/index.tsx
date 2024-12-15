import Icon, { SearchOutlined } from '@ant-design/icons'
import type { FormInstance, FormProps } from 'antd'
import { Flex, Form, Input, Select, Slider, Typography } from 'antd'
import Button from '~/components/atoms/Button'

import formFilterSearchStyles from './FormFilter.module.scss'
import { priceSortOpts, themeOpts, tierOpts, timeSortOpts } from '~/constants'
import { FieldType } from '~/interfaces'
import { memo } from 'react'

interface FormFilterProps {
  form: FormInstance
  onGetList: () => Promise<void>
  loading?: boolean
}

const initialValues = { createAtOrder: 'asc', priceSortOrder: 'desc', tier: '', theme: '', price: [0, 200] }

const ResetFilterIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M12 3.42856C7.26615 3.42856 3.42859 7.26612 3.42859 12C3.42859 16.7339 7.26615 20.5714 12 20.5714C16.7339 20.5714 20.5714 16.7339 20.5714 12C20.5714 9.7267 19.6684 7.54653 18.0609 5.93907C16.4535 4.33162 14.2733 3.42856 12 3.42856ZM14.7786 13.7857C14.9821 13.9904 15.0424 14.2974 14.9314 14.5639C14.8205 14.8303 14.5601 15.0038 14.2714 15.0036C14.0865 14.9944 13.9123 14.9137 13.7857 14.7786L12.0179 12.9928L10.25 14.7786C10.116 14.9127 9.93424 14.988 9.74466 14.988C9.55508 14.988 9.37328 14.9127 9.2393 14.7786C9.10518 14.6446 9.02981 14.4628 9.02981 14.2732C9.02981 14.0836 9.10518 13.9018 9.2393 13.7678L11.025 12L9.2393 10.2321C8.9602 9.95303 8.9602 9.50052 9.2393 9.22142C9.5184 8.94231 9.97092 8.94231 10.25 9.22142L12.0179 11.0071L13.7857 9.22142C14.0648 8.94231 14.5173 8.94231 14.7964 9.22142C15.0755 9.50052 15.0755 9.95303 14.7964 10.2321L13.0107 12L14.7786 13.7857Z'
      fill='#FBC625'
    />
  </svg>
)

const FormFilter = ({ form, onGetList, loading }: FormFilterProps) => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    onGetList()
  }

  const handleResetFilter = () => {
    form.resetFields()
    onGetList()
  }

  return (
    <Form
      form={form}
      name='filter-product'
      layout='vertical'
      labelCol={{ span: 8 }}
      className={formFilterSearchStyles.wrapper}
      initialValues={initialValues}
      onFinish={onFinish}
      autoComplete='off'
    >
      <Form.Item<FieldType> name='title'>
        <Input
          className={formFilterSearchStyles.quickSearch}
          prefix={<SearchOutlined className={formFilterSearchStyles.prefixIconQuickSearch} />}
          placeholder='Quick Search'
        />
      </Form.Item>

      <Form.Item<FieldType> className={formFilterSearchStyles.formItem} name='price' label='PRICE'>
        <Slider range min={0} max={200} />
      </Form.Item>

      <Form.Item<FieldType> className={formFilterSearchStyles.formItem} name='tier' label='TIER'>
        <Select className={formFilterSearchStyles.formSelect} options={tierOpts} />
      </Form.Item>

      <Form.Item<FieldType> className={formFilterSearchStyles.formItem} name='theme' label='THEME'>
        <Select className={formFilterSearchStyles.formSelect} options={themeOpts} />
      </Form.Item>

      <Form.Item<FieldType> className={formFilterSearchStyles.formItem} name='createAtOrder' label='TIME'>
        <Select
          className={formFilterSearchStyles.formSelect}
          defaultValue={timeSortOpts[0].value}
          options={timeSortOpts}
          disabled // TODO: check support multiple sort with jason-server
        />
      </Form.Item>

      <Form.Item<FieldType> className={formFilterSearchStyles.formItem} name='priceSortOrder' label='PRICE'>
        <Select
          className={formFilterSearchStyles.formSelect}
          defaultValue={priceSortOpts[0].value}
          options={priceSortOpts}
        />
      </Form.Item>

      <Form.Item>
        <Flex align='center' gap={12}>
          <Button
            disabled={loading}
            onClick={handleResetFilter}
            className={formFilterSearchStyles.resetBtn}
            type='text'
          >
            <Icon component={ResetFilterIcon} />
            <Typography.Text>Reset Filter</Typography.Text>
          </Button>
          <Button
            disabled={loading}
            className={formFilterSearchStyles.submitBtn}
            color='secondary'
            type='primary'
            htmlType='submit'
          >
            Search
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  )
}

export default memo(FormFilter)
