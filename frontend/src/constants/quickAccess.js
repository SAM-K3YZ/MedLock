import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import theme from '../constants/theme';

const quickAccess = [
  {
    id: 1,
    name: 'Emergency',
    icon: (
      <FontAwesome5 name="ambulance" size={20} color={theme.SolidColor.White} />
    ),
    bg: theme.SolidColor.RedError,
  },
  {
    id: 2,
    name: 'Appointments',
    icon: (
      <FontAwesome5 name="calendar" size={20} color={theme.SolidColor.White} />
    ),
    bg: theme.SolidColor.PrimaryBlue,
  },
  {
    id: 3,
    name: 'Departments',
    icon: (
      <FontAwesome5 name="building" size={20} color={theme.SolidColor.White} />
    ),
    bg: theme.SolidColor.GreenSuccess,
  },
  {
    id: 4,
    name: 'Lab Tests',
    icon: (
      <FontAwesome5 name="flask" size={20} color={theme.SolidColor.White} />
    ),
    bg: theme.SolidColor.PurpleAccent,
  },
  {
    id: 5,
    name: 'Pharmacy',
    icon: (
      <FontAwesome5 name="pills" size={20} color={theme.SolidColor.White} />
    ),
    bg: theme.SolidColor.OrangeWarning,
  },
  {
    id: 6,
    name: 'Records',
    icon: <FontAwesome5 name="book" size={20} color={theme.SolidColor.White} />,
    bg: theme.SolidColor.SecondaryBlue,
  },
];

export default quickAccess;
