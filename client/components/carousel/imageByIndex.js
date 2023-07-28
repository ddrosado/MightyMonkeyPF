import image1 from '../../assets/images/hockey.jpg'
import image2 from '../../assets/images/golf.jpg'
import image3 from '../../assets/images/soccer.jpg'
import image4 from '../../assets/images/basket.jpg'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
