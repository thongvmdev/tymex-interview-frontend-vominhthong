import coverImageStyles from './CoverImage.module.scss'
import coverImage from '~/assets/images/cover-image.jpg'

const CoverImage = () => {
  return (
    <div data-testid='cover-image' className={coverImageStyles.coverImageContainer}>
      <img src={coverImage} alt={'nft-cvi'} className={coverImageStyles.coverImage} />
    </div>
  )
}

export default CoverImage
