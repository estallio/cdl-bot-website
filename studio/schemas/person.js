import { BsFillPersonFill } from 'react-icons/bs';

export default {
  title: 'Person',
  name: 'person',
  type: 'object',
  icon: BsFillPersonFill,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Picture',
      name: 'picture',
      type: 'image',
      description: 'The face should be visible in a 3:4 portrait mode box in the center of the image. The image scales up to the available place on the page with it\'s smalles side - the rest is cut off and not visible.'
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Info English',
      name: 'infoEn',
      type: 'simpleEditor'
    },
    {
      title: 'Info German',
      name: 'infoDe',
      type: 'simpleEditor'
    }
  ],
}
