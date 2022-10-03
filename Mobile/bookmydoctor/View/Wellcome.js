import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity


} from "react-native";

import { fontSizes } from '../constants'


function Wellcome(props) {
    return <View style={{
        backgroundColor: "white",
        flex: 100
    }}>
        <ImageBackground source={require('../icon/bk.jpg')}
            resizeMode='cover'
            style={{
                flex: 100,

            }}>
            <View style={{
                flexDirection: 'row',
                height: 50,
                flex: 20,
                justifyContent: 'space-around',
                marginTop: 15


            }}>
                <Image source={require('../icon/heart.png')}
                    style={{
                        marginStart: 10,
                        width: 30,
                        height: 30
                    }}></Image>

                <Text style={{
                    color: "white"
                }}>Theo dõi sức khỏe và Hỏi Bác sĩ miễn phí </Text>
                <Image source={require('../icon/question.png')}
                    style={{
                        marginEnd: 10,
                        width: 20,
                        height: 20
                    }}></Image>

            </View>
            <View style={{
                flex: 20,
                width: '100%',

                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Text style={{ marginBottom: 7, color: 'white', fontSize: 20 }}>Chào Mừng Bạn </Text>
                <Text style={{ marginBottom: 7, color: 'white', fontSize: 18 }}>Đến Với Booking My Doctor </Text>
            </View>
            <View style={{
                flex: 40,
                marginTop: 40


            }}
            >
                <TouchableOpacity style={{
                    borderColor: 'white',
                    borderRadius: 5,
                    borderWidth: 1,
                    height: 40,
                    marginHorizontal: 65,
                    marginVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <Text style={{
                        color: 'white'
                    }}>chuyen khoa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderColor: 'white',
                    borderRadius: 5,
                    borderWidth: 1,
                    height: 40,
                    marginHorizontal: 65,
                    marginVertical: 15,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <Text style={{
                        color: 'white'
                    }}>co so y te</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderColor: 'white',
                    borderRadius: 5,
                    borderWidth: 1,
                    height: 40,
                    marginHorizontal: 65,
                    marginVertical: 15,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <Text style={{
                        color: 'white'
                    }}>bac si</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 20,
                

            }}
            >
                <TouchableOpacity style={{
                    borderColor: 'white',
                    borderRadius: 5,
                    borderWidth: 1,
                    height: 40,
                    marginHorizontal: 65,
                    marginVertical: 15,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <Text style={{
                        color: 'white'
                    }}>Dang Nhap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    justifyContent:'center',
                    alignItems:'center',
                    padding:10
                }}>
                <Text style={{
                    marginBottom: 7,
                    color: "white",
                    fontSize: 18,
                    textDecorationLine:'underline', 
                }}>Dang ky</Text>
                </TouchableOpacity>
                
            </View>

        </ImageBackground>

    </View>
}
export default Wellcome