import { Dream } from '../context/dreams';
import CarImage from '../assets/car.jpg';

const dreams: Dream[] = [
  {
    id: '1',
    name: 'Vacation',
    cost: 12000,
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
  },
  {
    id: '4',
    name: 'Something Else',
    cost: 250,
  },
];

export default dreams;
