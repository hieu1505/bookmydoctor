import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard, ScrollView, FlatList

} from 'react-native'
import { fontSizes, } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome'
import specialistApi from "../Api/specialistApi";
import Specialistitem from '../component/specialistitem';
function TabSpecial({ navigation }, props) {
    const [chuyenkhoa, setchuyenkhoa] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const data = await specialistApi.getAllSpecialist()
                chuyenkhoas = data.message
                l = chuyenkhoas.map((course) => {
                    let s = {}
                    s.id = course.id
                    s.name = course.name
                    s.image = course.image
                    s.sumdoctor = course.sum_doctor
                    return s
                })
                setchuyenkhoa(l)

            } catch (err) {
                alert(err)
            }
        })()
    }, [])
    // console.log(chuyenkhoa)
    const [searchtext, setsearchtext] = useState('')
    const fillterSpecial = () => chuyenkhoa.filter(chuyenkhoa => chuyenkhoa.name.toLowerCase()
        .includes(searchtext.toLowerCase()))
    return <View style={{
        flex: 1, backgroundColor: 'white',
        paddingBottom: 20
    }}>
        <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingEnd: 40,

            }}><TouchableOpacity
                onPress={() => {
                    navigation.navigate('UITab')
                }}
            ><Icon name='close'
                size={35} color={'black'}
                style={{
                    top: 10,
                    left: 20
                }}></Icon></TouchableOpacity>

                <Text style={{
                    fontSize: 25,
                    color: 'blue', paddingTop: 10
                }}>Danh sach cac khoa</Text>
            </View>

            <View style={{
                height: 50,
                marginHorizontal: 10,
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center'

            }}><Icon name='search'
                size={15} color={'black'}
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 10
                }}></Icon>
                <TextInput autoCorrect={false}
                    onChangeText={(text) => {
                        setsearchtext(text)
                    }}
                    style={{
                        paddingStart: 30,
                        height: 40,
                        flex: 1,
                        marginEnd: 10,
                        borderRadius: 5,
                        opacity: 0.5
                    }} />
            </View>
            <View >
                <View style={{ height: 1, backgroundColor: 'black' }}></View>

            </View>
        </View>
        {fillterSpecial().length > 0 ? <FlatList
            data={fillterSpecial()}
            renderItem={({ item }) => <Specialistitem
                onPress={() => { navigation.navigate('Listdoctorbyspecial',{id:item.id})} }
                Special={item} key={item.id}
            />}
        /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{ color: 'black', fontSize: fontSizes.h3 }}>no Special found</Text>
        </View>}
    </View>
}
export default TabSpecial