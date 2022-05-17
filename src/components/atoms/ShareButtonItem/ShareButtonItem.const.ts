import {
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
} from './ShareButtonItem.styled'

export const shareButtonItemList = [
  {
    Icon: FacebookIcon,
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
    label: 'Facebook',
    onlyOnMobile: false,
  },
  {
    Icon: PinterestIcon,
    shareUrl: 'https://pinterest.com/pin/create/button/?url=',
    label: 'Pinterest',
    onlyOnMobile: false,
  },
  {
    Icon: TwitterIcon,
    shareUrl: 'https://twitter.com/intent/tweet?url=',
    label: 'Twitter',
    onlyOnMobile: false,
  },
]
