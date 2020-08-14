import {IPremisesProps} from './premises.types';

export interface IMapLocations {
  [key: string] : IMapFloor[];
}

// property
export interface IMapFloor {
  [key: string]: IMapObjects[];
}

export interface IMapObjects {
  data: IMapObject[];
}

export interface IMapObject {
  type: 'workplace' | 'lift' | 'frontDesk' | 'wardrobe' | 'printerZone' | 'kitchen' | 'wc' | 'meetingRoom';
  id: number;
  geometry: TGeometry;
  properties: IPremisesProps;
  user: IEmployee;
}

export type TGeometry = IPoint | ICircle | IPolygon;

export interface IPoint {
  type: 'Point';
  coordinates: [number, number];
}

export interface ICircle {
  type: 'Circle';
  coordinates: [number, number];
  radius: number;
}

export interface IPolygon {
  type: 'Polygon';
  coordinates: [number, number][];
}

export interface IEmployee {
  id: number;
  lastName: string;
  name: string;
  secondName: string;
  employeeName: string;
  workplaceName: string;
  email: string;
  photo: string;
  position: string;
  department: IDepartment[];
  personalPhone: string;
  innerPhone: number;
  organization: string;
}

export interface IDepartment {
  id: number;
  name: string;
}