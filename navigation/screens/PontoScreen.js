import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default function PontoScreen({ navigation }) {
    const [tableHead, setTableHead] = useState(['ID', 'Ponto Turístico', 'Cidade', 'Estado']);
    const [widthArr, setWidthArr] = useState([40, 160, 100, 100]);
  
    const tableData = [
      ['001', 'Ponte do Brooklyn', 'Nova York', 'Nova York'],
      ['002', 'Estátua da Liberdade', 'Nova York', 'Nova York'],
      ['003', 'Museu de História Natural', 'Nova York', 'Nova York'],
      ['004', 'Big Ben', 'Londres', 'Reino Unido'],
      ['005', 'Palácio de Buckingham', 'Londres', 'Reino Unido'],
      ['006', 'Torre Eiffel', 'Paris', 'França'],
      ['007', 'Museu do Louvre', 'Paris', 'França'],
      ['008', 'Cristo Redentor', 'Rio de Janeiro', 'Rio de Janeiro'],
      ['009', 'Machu Picchu', 'Cusco', 'Peru'],
      ['010', 'Coliseu', 'Roma', 'Itália'],
    ];
  
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
  });