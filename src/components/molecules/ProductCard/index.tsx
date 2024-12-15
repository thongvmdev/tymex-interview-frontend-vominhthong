import { Avatar, Card, Flex, Space, Typography } from 'antd'
import productCardStyles from './ProductCard.module.scss'
import { IProduct } from '~/interfaces'
import Icon, { HeartFilled, UserOutlined } from '@ant-design/icons'
import AuthorStatusSvg from '~/components/atoms/AuthorStatusSvg/AuthorStatusSvg'

const { Meta } = Card

interface IProductCardProps {
  product: IProduct
}

const EthCoinSvg = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='8' height='14' viewBox='0 0 8 14' fill='none'>
    <g clip-path='url(#clip0_274_19)'>
      <path
        d='M3.99878 0.538452L3.91144 0.832863V9.37598L3.99878 9.46244L7.99759 7.11838L3.99878 0.538452Z'
        fill='#C1CCF7'
      />
      <path d='M3.99881 0.538452L0 7.11838L3.99881 9.46247V5.3159V0.538452Z' fill='white' />
      <path
        d='M3.99879 10.2133L3.94957 10.2728V13.3161L3.99879 13.4586L7.99998 7.87042L3.99879 10.2133Z'
        fill='#C1CCF7'
      />
      <path d='M3.99881 13.4586V10.2132L0 7.87036L3.99881 13.4586Z' fill='white' />
      <path d='M3.99878 9.46243L7.99753 7.11839L3.99878 5.31592V9.46243Z' fill='#8198EE' />
      <path d='M3.05176e-05 7.11839L3.99878 9.46243V5.31592L3.05176e-05 7.11839Z' fill='#C1CCF7' />
    </g>
    <defs>
      <clipPath id='clip0_274_19'>
        <rect width='8' height='12.9231' fill='white' transform='translate(0 0.538452)' />
      </clipPath>
    </defs>
  </svg>
)

const fakeUrl =
  'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Card
      bordered={false}
      className={productCardStyles.wrapper}
      cover={
        <div className={productCardStyles.cardCoverImg}>
          <img src={fakeUrl} alt='sample' className={productCardStyles.coverImg} />
          <div className={productCardStyles.topLeft}>{product.category}</div>
          <div className={productCardStyles.topRight}>
            <HeartFilled />
          </div>
        </div>
      }
    >
      <Flex vertical gap={16}>
        <Flex justify='space-between'>
          <Typography.Text className={productCardStyles.cardTitle}>{product.title}</Typography.Text>
          <Space size={8}>
            <Icon component={EthCoinSvg} />
            <Typography.Text className={productCardStyles.cardEthCoin}>{product.price} ETH</Typography.Text>
          </Space>
        </Flex>

        <Meta
          className={productCardStyles.cardMeta}
          avatar={
            <div className={productCardStyles.authorAvatarContainer}>
              <Avatar
                className={productCardStyles.authorAvatar}
                size={32}
                src={product?.author?.avatar}
                icon={<UserOutlined />}
              />
              <Icon
                key={Date.now()}
                className={productCardStyles.statusIndicator}
                component={() => <AuthorStatusSvg status={product?.author?.onlineStatus} />}
              />
            </div>
          }
          title={`${product.author?.firstName} ${product.author?.lastName}`}
        />
      </Flex>
    </Card>
  )
}

export default ProductCard
