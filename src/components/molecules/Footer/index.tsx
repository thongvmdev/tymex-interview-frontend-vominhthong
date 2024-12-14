import { Row, Col, Typography, Layout, Space, Flex, Divider } from 'antd'
import footerStyles from './Footer.module.scss'
import Button from '~/components/atoms/Button'
import Input from '~/components/atoms/Input'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const Footer = () => {
  return (
    <Layout.Footer className={footerStyles.wrapper}>
      <Row justify='space-between'>
        <Col xs={24} xxl={8}>
          <Title className={footerStyles.title} level={4}>
            Navigation
          </Title>
          <Flex gap={48}>
            <Flex vertical gap={12}>
              <Text className={footerStyles.text}>Home</Text>
              <Text className={footerStyles.text}>About us</Text>
              <Text className={footerStyles.text}>Our teams</Text>
            </Flex>

            <Flex vertical gap={12}>
              <Text className={footerStyles.text}>Whitepaper</Text>
              <Text className={footerStyles.text}>Marketplace</Text>
              <Text className={footerStyles.text}>Roadmap</Text>
            </Flex>

            <Flex vertical gap={12}>
              <Text className={footerStyles.text}>FAQs</Text>
              <Text className={footerStyles.text}>News</Text>
              <Text className={footerStyles.text}>Community</Text>
            </Flex>
          </Flex>
        </Col>

        <Col xs={24} xxl={7}>
          <Title className={footerStyles.title} level={4}>
            Contact Us
          </Title>
          <Flex vertical gap={16}>
            <Space>
              <PhoneOutlined />
              <Text className={footerStyles.text}>01234568910</Text>
            </Space>
            <Space>
              <MailOutlined />
              <Text className={footerStyles.text}>tymex-talent@tyme.com</Text>
            </Space>
          </Flex>
        </Col>

        <Col xs={24} xxl={9}>
          <Title className={footerStyles.title} level={4}>
            Subscribe to receive our latest update
          </Title>
          <Flex gap={16}>
            <Input className={footerStyles.inputEmail} width={250} placeholder='Enter your email' />
            <Button color='secondary' type='primary'>
              Subscribe
            </Button>
          </Flex>
        </Col>
      </Row>

      <Divider className={footerStyles.divider} />

      <Row gutter={32} justify='space-between'>
        <Col xs={24} lg={12} xl={12}>
          <Text className={footerStyles.text}>©2023 Tyme - Edit. All Rights reserved.</Text>
        </Col>

        <Col xs={24} lg={12} xl={10} xxl={6}>
          <Flex gap={48}>
            <Text className={footerStyles.text}>Security</Text>
            <Text className={footerStyles.text}>Legal</Text>
            <Text className={footerStyles.text}>Privacy</Text>
          </Flex>
        </Col>
      </Row>
    </Layout.Footer>
  )
}

export default Footer
