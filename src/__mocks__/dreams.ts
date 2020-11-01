import { Dream } from '../context/dreams';
import CarImage from '../assets/Vagen.svg';
import Gifts from '../assets/Gifts.svg';
import Vacation from '../assets/Vacation.png';

const dreams: Dream[] = [
  {
    id: '1',
    name: 'Vacation',
    cost: 12000,
    image: Vacation,
  },
  {
    id: '2',
    name: 'Car',
    cost: 12000,
    image: CarImage,
  },
  {
    id: '3',
    name: 'Christmass Gifts',
    cost: 1000,
    image: Gifts,
  },
  {
    id: '4',
    name: 'Something Else',
    cost: 250,
  },
];

export default dreams;
