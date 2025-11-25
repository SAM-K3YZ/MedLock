import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import theme from '../constants/theme';

const quickAccess = [
  {
    id: 1,
    name: 'Emergency',
    icon: (
      <FontAwesome5
        name="ambulance"
        size={20}
        color={theme.SolidColor.SecondaryBlue}
      />
    ),
  },
  {
    id: 2,
    name: 'Appointments',
    icon: (
      <FontAwesome5
        name="calendar"
        size={20}
        color={theme.SolidColor.SecondaryBlue}
      />
    ),
  },
  {
    id: 3,
    name: 'Departments',
    icon: (
      <FontAwesome5
        name="building"
        size={20}
        color={theme.SolidColor.SecondaryBlue}
      />
    ),
  },
  {
    id: 4,
    name: 'Lab Tests',
    icon: (
      <FontAwesome5
        name="flask"
        size={20}
        color={theme.SolidColor.SecondaryBlue}
      />
    ),
  },
  {
    id: 5,
    name: 'Pharmacy',
    icon: (
      <FontAwesome5
        name="pills"
        size={20}
        color={theme.SolidColor.SecondaryBlue}
      />
    ),
  },
  {
    id: 6,
    name: 'Records',
    icon: (
      <FontAwesome5
        name="book"
        size={20}
        color={theme.SolidColor.SecondaryBlue}
      />
    ),
  },
];

export default quickAccess;
