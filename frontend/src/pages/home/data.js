import heroImg from '../../assets/home/hero.jpg';
import heroTabletImg from '../../assets/home/hero-tablet.jpg';
import womenImg from '../../assets/home/women.jpg';
import menImg from '../../assets/home/men.jpg';
import kidsImg from '../../assets/home/kids.jpg';
import saleImg from '../../assets/home/sale.jpg';

const homeData = [
  {
    heading: 'express yourself',
    image: { mobile: heroImg, tablet: heroTabletImg },
    linkTo: '/products',
  },
  {
    heading: `Women's \nSummer Collection`,
    image: womenImg,
    linkTo: '/products?category=women',
  },
  {
    heading: `Men's \nFall Collection`,
    image: menImg,
    linkTo: '/products?category=men',
  },
  {
    heading: `Kids' \nFall Collection`,
    image: kidsImg,
    linkTo: '/products?category=kids',
  },
  {
    heading: `Sale & Clearance`,
    image: saleImg,
    linkTo: '/products/sale',
  },
];

export default homeData;
