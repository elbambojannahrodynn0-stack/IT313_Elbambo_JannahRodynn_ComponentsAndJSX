import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import StudentCard from "./StudentCard";

const initialStudents = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);

  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.count}>{`${students.length} students`}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Reverse Roster" onPress={reverseRoster} />
      </View>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  count: {
    fontSize: 16,
    marginBottom: 12,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
