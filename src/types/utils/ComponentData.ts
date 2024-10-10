import {IconNames} from '@/components/Icon';
import {Pages} from '@/navigation';

export interface IOption {
  id: string;
  name: string;
  icon?: IconNames | undefined;
  navigateTo?: Pages;
  navigateParams?: any;
}

export interface ISection {
  id: string;
  title: string | undefined;
  options: IOption[];
}

export interface AccordionItem {
  title: string;
  desc: string;
}
