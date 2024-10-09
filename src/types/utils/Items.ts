import {IconNames} from '@/components/Icon';

export interface IOption {
  id: string;
  name: string;
  icon: IconNames | undefined;
}

export interface ISection {
  id: string;
  title: string | undefined;
  options: IOption[];
}
