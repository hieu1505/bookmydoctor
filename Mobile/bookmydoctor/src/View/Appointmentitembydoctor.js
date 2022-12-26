import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import strftime from 'strftime';
function Appointmentitemnydoctor(props) {
  let {name, begin, end, cost, status} = props.appointment;
  let opres = props.onPress;
  let opres2 = props.onPress2;
  let opres3 = props.onPress3;
  let date = strftime('%d-%m-%YT%H:%M:%S', new Date(begin)).split('T')[0];
  let h =
    strftime('%d-%m-%YT%H:%M:%S', new Date(begin)).split('T')[1] +
    '-' +
    strftime('%d-%m-%YT%H:%M:%S', new Date(end)).split('T')[1];

  return (
    <View
      style={{
        flex: 1,
        height: 120,
        paddingLeft: 10,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'F0FFF',
        borderColor: 'black',
        borderWidth: 1,
      }}>
      <View
        style={{
          //  padding:10,
          paddingStart: 5,
          flex: 70,
          marginRight: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {' '}
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingEnd: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              paddingEnd: 15,
            }}>
            Ngày khám :{date}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            giờ:{h}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingEnd: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              paddingEnd: 15,
            }}>
            Giá tiền: {cost} đ
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            Trạng thái :{status}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 20,
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={opres3}
          style={{
            color: 'white',
            backgroundColor: '#2ea7c6',
            borderRadius: 15,
            justifyContent: 'center',
            height: 40,
            alignItems: 'center',
          }}>
          <Text>Chi Tiết</Text>
        </TouchableOpacity>
        {status == 'NEW' ? (
          <TouchableOpacity
            onPress={opres}
            style={{
              backgroundColor: '#5F9EA0',
              borderRadius: 15,
              justifyContent: 'center',
              height: 40,
              alignItems: 'center',
            }}>
            <Text>Chấp Nhận</Text>
          </TouchableOpacity>
        ) : (
          <View style={{height: 0, width: 0}}></View>
        )}

        {status == 'DONE' ? (
          <TouchableOpacity
            onPress={opres2}
            style={{
              color:'#fff',
              backgroundColor: '#dc3545',
              borderRadius: 15,
              justifyContent: 'center',
              height: 35,
              alignItems: 'center',
            }}>
            <Text>không khám</Text>
          </TouchableOpacity>
        ) : (
          <View style={{width: 0, height: 0}}></View>
        )}
      </View>
    </View>
  );
}
export default Appointmentitemnydoctor;
