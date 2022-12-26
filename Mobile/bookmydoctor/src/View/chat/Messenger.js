import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
  RefreshControl,
} from 'react-native';
import {SocketContext} from '../../a';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import UIHeader from './UIHeader';
import Messengeritem from './Messengeritem';
import messageApi from '../../Api/messageApi';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  },
};
function Messenger({route, navigation}) {
  const [imgs, setimgs] = useState('');
  const [refreshControl,setrefreshControl]=useState(false)
  const opengallery = async () => {
    const result = await launchImageLibrary(options);
    console.log(result);
    setimgs({
      uri: result.assets[0].uri,
      type: result.assets[0].type,
      name: result.assets[0].fileName,
    });
  };
  const socket = useContext(SocketContext);
  const {id, img, name} = route.params.doctor;
  const [iduser, setiduser] = useState('');
  const [page, setpage] = useState(0);
  const [totalpage, settotalpage] = useState('')
  const [chathistory, setchathistory] = useState([]);
  const getmessage = async page => {
    try {
      d = await AsyncStorage.getItem('user');
      k = JSON.parse(d);
      setiduser(k.id);
      const respone = await messageApi.getMessage({
        from_user: k.id,
        to_user: id,
        page: page,
      });
      d=respone.messages
      settotalpage(respone.page.totalPages)
      if(page==0){ setchathistory(respone.messages);}
      else{
        setchathistory(chathistory.concat(...d))
      }
     
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getmessage(page);
  }, [page]);
  const [mess, setmess] = useState('');
  const handleSendMess = (mess, imgst) => {
    let dataimg = {};
    if (imgst == '') {
      dataimg = '';
    } else {
      dataimg = imgs;
    }
    const valueSubmit = {
      from_user: iduser,
      to_user: id,
      text: mess,
      image: dataimg,
    };
    const formData = new FormData();
    for (let key in valueSubmit) {
      formData.append(key, valueSubmit[key]);
    }
    (async () => {
      try {
        token = await AsyncStorage.getItem('access_token');
        const respone = await messageApi.addMessage(formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
          },
        });
        setmess('');
        const valueSocket = {
          to_user: respone.message.to_user,
          text: respone.message.text,
          from_user: respone.message.from_user,
          date: respone.message.date,
          image: respone.message.image,
        };
        // handleDeleteImg()
        socket.emit('addMessage', valueSocket);
        // setMessage('')
        if (chathistory.length > 19) {
          const arrTemp = [...chathistory, respone.message];
          arrTemp.splice(0, 1);
          setchathistory(arrTemp);
        } else {
          setchathistory([...chathistory, respone.message]);
        }
      } catch (err) {
        return err.message;
      }
    })();
  };

  useEffect(() => {
    socket.on('addMessageToClient', msg => {
      console.log('chathistory arr', chathistory);
      console.log('akjsdhaksjda');
      if (msg.from_user === id) {
        getmessage(page);
      }
    });
    return () => socket.off('addMessageToClient');
  }, [socket]);

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
      }}>
      <UIHeader
        title={name}
        lefIconname={'arrow-left'}
        rightIconname={'ellipsis-v'}
        onpresslefIcon={() => {
          navigation.goBack();
        }}
        onpressrightIcon={() => {}}
      />

      <FlatList
        data={chathistory.sort((item, item1) => item.id - item1.id)}
        renderItem={({item}) => (
          <Messengeritem id={id} user={item} key={item.id} />
        )}
        refreshControl={<RefreshControl refreshing={refreshControl} onRefresh={()=>{
          setrefreshControl(true)
          console.log('lammoi')
          console.log(totalpage)
          if(page<=totalpage){
            setpage(page+1)
          }
          setrefreshControl(false)
        }} color={['red']}/>}
      />
      {imgs!=''?<View style={{flexDirection:'row'}}>
        <Image
          source={{uri: imgs.uri}}
          style={{
            width: 120,
            height: 120,
            alignItems: 'center',
            borderRadius: 50,
          }}
        />
        <Icon2 name="circle-with-cross"
            size={23}
            color={'red'}
            onPress={()=>{
              setimgs('')
            }}
            style={{padding: 5}}/>
      </View>:<View style={{
        width:0,height:0
      }}></View>}
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={text => setmess(text)}
          value={mess}
          style={{
            fontSize: 20,
            color: 'black',
            paddingStart: 20,
            backgroundColor: '#C0C0C0',
            borderRadius: 10,
            width: 300,
          }}
          placeholder=""
          placeholderTextColor={'rgba(0,0,0,0.6'}></TextInput>
        <TouchableOpacity
          onPress={() => {
            opengallery();
            console.log(imgs);
           
          }}>
          <Icon
            name="photo-video"
            size={23}
            color={'red'}
            style={{padding: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (mess != '') {
              handleSendMess(mess,imgs);
              setimgs('')
            }
            else{
              handleSendMess('',imgs);
              setimgs('')
            }
          }}>
          <Icon
            name="paper-plane"
            size={23}
            color={'red'}
            style={{padding: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Messenger;
