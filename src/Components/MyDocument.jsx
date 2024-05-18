import React from 'react'; // রি‌‌‌‌‌‌‌‌‌য়াক্ট ইম্পোর্ট করুন

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import SummaryDetails from './AppliedJob/SummaryDetails';
import useAuth from './hooks/useAuth';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});


// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Assalamuoalaikum,
            My Name Is Juyel Rana
            
        </Text>
      </View>
      {/* <View style={styles.section}>
        <Text>hello</Text>
      </View> */}
    </Page>
  </Document>
);
export default MyDocument;
