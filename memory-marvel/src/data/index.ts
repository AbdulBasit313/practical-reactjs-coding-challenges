import { shape1, shape2, shape3, shape4, shape5 } from '../config/icons'

export interface Shape {
  shapeId: string
  uniqueId: string
  shape: string
}

const shapes: Shape[] = [
  {
    shapeId: '01',
    uniqueId: '001',
    shape: shape1,
  },
  {
    shapeId: '02',
    uniqueId: '002',
    shape: shape2,
  },
  {
    shapeId: '03',
    uniqueId: '003',
    shape: shape3,
  },
  {
    shapeId: '04',
    uniqueId: '004',
    shape: shape4,
  },
  {
    shapeId: '05',
    uniqueId: '005',
    shape: shape5,
  },
]

export default shapes
