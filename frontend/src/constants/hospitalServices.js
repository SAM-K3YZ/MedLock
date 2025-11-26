import { Fontisto, FontAwesome5, Feather } from '@expo/vector-icons';
import theme from './theme';

const hospitalServices = [
  {
    id: 1,
    name: 'Ambulance',
    icon: (
      <FontAwesome5
        name="ambulance"
        size={20}
        color={theme.SolidColor.RedError}
      />
    ),
  },
  {
    id: 2,
    name: 'Blood Bank',
    icon: (
      <Fontisto
        name="calendar"
        size={20}
        color={theme.SolidColor.PrimaryBlue}
      />
    ),
  },
  {
    id: 3,
    name: 'Radiology',
    icon: (
      <FontAwesome5
        name="radiation"
        size={20}
        color={theme.SolidColor.GreenSuccess}
      />
    ),
  },
  {
    id: 4,
    name: 'Surgery',
    icon: (
      <FontAwesome5
        name="stethoscope"
        size={20}
        color={theme.SolidColor.PurpleAccent}
      />
    ),
  },
  {
    id: 5,
    name: 'Vacation',
    icon: (
      <FontAwesome5
        name="syringe"
        size={20}
        color={theme.SolidColor.OrangeWarning}
      />
    ),
  },
  {
    id: 6,
    name: 'Bed Status',
    icon: (
      <FontAwesome5
        name="bed"
        size={20}
        color={theme.SolidColor.GreenSuccess}
      />
    ),
  },
  {
    id: 7,
    name: 'Telemedicine',
    icon: (
      <FontAwesome5
        name="phone"
        size={20}
        color={theme.SolidColor.SecondaryBlue}
      />
    ),
  },
  {
    id: 8,
    name: 'Symptom Checker',
    icon: (
      <FontAwesome5
        name="search"
        size={20}
        color={theme.SolidColor.OrangeWarning}
      />
    ),
  },
  {
    id: 9,
    name: 'Health Packages',
    icon: (
      <Feather name="package" size={20} color={theme.SolidColor.GreenSuccess} />
    ),
  },
  {
    id: 10,
    name: 'Insurance',
    icon: (
      <FontAwesome5
        name="certificate"
        size={20}
        color={theme.SolidColor.RedError}
      />
    ),
  },
  {
    id: 11,
    name: 'Mental Health',
    icon: (
      <FontAwesome5
        name="heart"
        size={20}
        color={theme.SolidColor.PinkAccent}
      />
    ),
  },
  {
    id: 12,
    name: 'Staff Directory',
    icon: (
      <FontAwesome5
        name="user-md"
        size={20}
        color={theme.SolidColor.PurpleAccent}
      />
    ),
  },
  {
    id: 13,
    name: 'Pregnancy Care',
    icon: (
      <FontAwesome5 name="baby" size={20} color={theme.SolidColor.PinkAccent} />
    ),
  },
  {
    id: 14,
    name: 'Health Education',
    icon: (
      <FontAwesome5
        name="book-medical"
        size={20}
        color={theme.SolidColor.PrimaryBlue}
      />
    ),
  },
  {
    id: 15,
    name: 'Home Healthcare',
    icon: (
      <FontAwesome5
        name="home"
        size={20}
        color={theme.SolidColor.GreenSuccess}
      />
    ),
  },
];

export default hospitalServices;
