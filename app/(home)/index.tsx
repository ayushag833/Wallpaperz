import {Link } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Image, View  , FlatList, Pressable, TextInput } from 'react-native';

const index = () => {

    const [wallpapers, setWallpapers] = useState<any[]>([]);

    const searchWallpapers = async(word: string) => {
        try{
            if(word === '') {
                getWallpapers();
                return;
            }

            const response = await fetch(`https://api.pexels.com/v1/search?query=${word}` , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "vHGblEImlLfGsGN9FH3L68JqtAEoS7V2TPZoSlJ1lQd7qNMmq88U7h0x",
                },
            });

            const data = await response.json();            
            setWallpapers(data.photos);

        } catch(error){
            console.log(error);
            
        }
    }
    const getWallpapers = async () => {
        try{

            const response = await fetch('https://api.pexels.com/v1/curated?page=1&per_page=40' , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "vHGblEImlLfGsGN9FH3L68JqtAEoS7V2TPZoSlJ1lQd7qNMmq88U7h0x",
                },
            });

            const data = await response.json();            
            setWallpapers(data.photos);

        } catch(error){
            console.log(error);
            
        }
    }

    useEffect(() => {
        getWallpapers();
    }
     , []);
    
  return (
    <View>
        <TextInput placeholder='Search for wallpapers' style={{borderRadius:20, padding: 4, backgroundColor:"white", margin:5, textAlign:'center', borderWidth:1, fontSize:15}} onChangeText={(text)=>searchWallpapers(text)}/> 
        <FlatList
            data={wallpapers}
            style={{padding: 2}}
            numColumns={2}
            renderItem={({item}) => {
                return (
                        <View style={{flex:1 , margin:4}}>
                            <Link href={`/wallpaper/${item.id}`} asChild>
                                <Pressable>
                                    <Image source={{uri: item.src.portrait}} style={{width: '100%', height: 350 ,borderRadius: 10}}/>
                                </Pressable>
                            </Link>
                        </View>
                )
            }}
            keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default index