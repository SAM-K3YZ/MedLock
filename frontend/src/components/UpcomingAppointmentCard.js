import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Helper to calculate difference in days
const getDaysDifference = (date) => {
  const now = new Date();
  const d = new Date(date);
  const diffTime = d - now;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export default function UpcomingAppointmentCard({ uaData = [] }) {
  const now = new Date();

  // Filter only future appointments
  const upcomingAppointments = uaData.filter(
    (item) => new Date(item.appointmentDate) >= now,
  );

  // Sort by closest date
  upcomingAppointments.sort(
    (a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate),
  );

  // Pick closest appointment dynamically based on how soon it is
  const closestAppointments = upcomingAppointments.filter((item) => {
    const daysDiff = getDaysDifference(item.appointmentDate);

    if (daysDiff === 0) return true; // today
    if (daysDiff <= 7) return true; // this week
    if (daysDiff <= 30) return true; // this month
    if (daysDiff <= 365) return true; // this year
    return false;
  });

  // Optionally, show only the very first match (closest)
  const displayAppointments = closestAppointments.slice(0, 1);

  return (
    <View style={styles.uaContainer}>
      {displayAppointments.length > 0 ? (
        displayAppointments.map((item) => (
          <View key={item._id} style={styles.uaItem}>
            <View style={styles.left}>
              <Text style={styles.name}>
                Dr {item.doctorId?.firstname || 'Unknown'}{' '}
                {item.doctorId?.lastname || ''}
              </Text>
              <Text style={styles.specialty}>
                {item.doctorId?.specialty || 'N/A'}
              </Text>
              <Text style={styles.department}>
                {item.doctorId?.department || 'N/A'}
              </Text>
              <Text style={styles.date}>
                {item.appointmentDate
                  ? new Date(item.appointmentDate).toLocaleDateString()
                  : 'N/A'}
              </Text>
              <Text style={styles.time}>{item.appointmentTime || 'N/A'}</Text>
            </View>

            <View style={styles.right}>
              <FontAwesome5
                name={item.iconName || 'calendar-alt'}
                size={22}
                color="#2e8b57"
              />
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.empty}>No upcoming appointments</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  uaContainer: { flexDirection: 'column', gap: 12, paddingVertical: 10 },
  uaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  left: { flex: 1 },
  right: { justifyContent: 'center', alignItems: 'center' },
  name: { fontWeight: '600', fontSize: 16, marginBottom: 2 },
  specialty: { color: '#666', marginBottom: 2 },
  department: { color: '#666', marginBottom: 2 },
  date: { color: '#444', marginBottom: 2 },
  time: { color: '#444' },
  empty: {
    fontStyle: 'italic',
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
});
