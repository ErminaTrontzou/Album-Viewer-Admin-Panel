import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Artist',
    url: '/artist',
    icon: 'icon-drop'
  },
  {
    name: 'Category',
    url: '/category',
    icon: 'icon-drop'
  },
];
