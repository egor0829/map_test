export interface IPremisesProps {
  activeFrom: number;
  activeTo: number;
  balloonContentHeader: string;
  balloonContentBody: string;
  balloonContentFooter: string;
  hintContent: string;
  additionalName: string;
  capacity: string;
  size: number;
  valueConferencePhone: string;
  valueVksPhone: string;
  ciscotel: string;
  isFree: boolean;
  isConferencePhone: boolean;
  isAppleTv: boolean;
  isSkype: boolean;
  isVKS: boolean;
  isZKPanel: boolean;
  isClickShare: boolean;
  isCoffeeMachine: boolean;
  isMicrowave: boolean;
  isPresentationPC: boolean;
  isProjector: boolean;
  indoors: boolean;
  notSeatingRules: boolean;
  variableSchedule: boolean;
  instructions: IPremisesInstruction[]
}

export type TPremisesOptions = 'capacity' | 'isConferencePhone' | 'isVKS' | 'isClickShare' | 'isAppleTv' | 'isZKPanel' | 'isPresentationPC' | 'isSkype' | 'kitchen' | 'wc' | 'wardrobe' | 'lift' | 'printerZone' | 'frontDesk' | 'isCoffeeMachine' | 'isMicrowave' | 'hasCups' | 'sinkInBooth' | 'isHangers' | 'isSmell' | 'isInk';
export type TPremisesType = 'meetingRoom' | 'kitchen' | 'wc' | 'wardrobe' | 'lift' | 'printerZone' | 'frontDesk';

export interface IPremisesInstruction {
  qr: string;
  url: string;
  text: string;
}

export interface IPremises {
  type: TPremisesType;
  name: string;
  options: {
    [key in TPremisesOptions]: string;
  },
  searchPhrases: {
    [key: string]: TPremisesOptions;
  },
  optionsForFilter: {
    [key in TPremisesOptions]: {
      title: string;
      instructions?: IPremisesInstruction[];
      additional?: {
        type: 'valueConferencePhone' | 'valueVksPhone';
        link: 'ciscotel' | 'sip';
      }
    }
  }
  color: string;
  icon: string;
}