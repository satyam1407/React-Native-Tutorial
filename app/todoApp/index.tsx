import { FlatList, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ColorScheme, useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const dateGenerator = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // months start from 0
  const year = today.getFullYear();
  const formatted = `${day}/${month}/${year}`;
  return formatted;
}

export default function index() {
  const [todos, settodos] = useState<string[]>([]);
  const [inputvalue, setinputvalue] = useState("");
  const {color, isDarkMode} = useTheme();
  const style = commanstyle(color, isDarkMode);
  const date : string = dateGenerator();
  const [editable, seteditable] = useState<number>(-1);
  const [editValue, seteditValue] = useState("");

  const handleAdd = () => {
    if(!inputvalue.trim()) return;
    settodos([...todos, inputvalue]);
    setinputvalue("")
  }
  const handleDelete = (index : number) => {
    const todoList = todos.filter((_, i) => i !== index);
    settodos(todoList)
  }  

  const handleEdit = (index : number) => {
    seteditable(index);
    seteditValue(todos[index]);
  }

  const handleEditSave = (index : number) => {
    todos[index] = editValue;
    settodos(todos);
    seteditable(-1);
    seteditValue("");
  }

  return (
    <View>
      <StatusBar backgroundColor={color.statusBarStyle} />
      <View style={style.headingContainer}>
        <View style={style.iconContainer}>
          <Ionicons name='book' color={"white"} size={80}/>
        </View>
        <View>
          <Text style={style.firstTextHeading}>Todays Task</Text>
          <Text style={style.secondTextHeading}>{date}</Text>
        </View>
      </View>
      <View style={style.inputContainer}>
          <TextInput 
            placeholder='Enter new Task'
            value={inputvalue}
            onChangeText={(value) => setinputvalue(value)}
            style={style.inputfield}
            placeholderTextColor={color.textMuted}
            inputMode='text'
          />
          <Pressable style={style.addBtn} onPress={handleAdd}>
            <Text style={style.addBtnText}>Add</Text>
          </Pressable>
      </View>
      <View>
        <FlatList 
        data={todos}
        renderItem={({item, index})=>{
          let shrink : boolean = false;
          if(item.length >= 18){
            shrink = true;
          }
          return (
            <View key={index} style={style.listItemContainer}>
              {editable == index ? <>
              <TextInput
                placeholder={item}
                value={editValue}
                onChangeText={(value)=>seteditValue(value)}
                style={style.editInputField}
              />
              <View style={style.listItemSubContainer}>
                  <TouchableOpacity style={shrink ? {...style.listItemPressable, margin: 2}:style.listItemPressable} onPress={() => handleEditSave(index)}>
                  <Text style={style.listItemPressableText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={shrink ? {...style.listItemPressable, margin: 2}:style.listItemPressable} onPress={() => seteditable(-1)}>
                  <Text style={style.listItemPressableText}>Cancel</Text>
                </TouchableOpacity>
                </View>
              </>
              :
                <>
                    <Text style={shrink ? {...style.ListItemText, fontSize: 20} : style.ListItemText}>
                  {item}
                </Text>
                <View style={style.listItemSubContainer}>
                  <TouchableOpacity style={shrink ? {...style.listItemPressable, margin: 2}:style.listItemPressable} onPress={() => handleEdit(index)}>
                  <Text style={style.listItemPressableText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={shrink ? {...style.listItemPressable, margin: 2}:style.listItemPressable} onPress={() => handleDelete(index)}>
                  <Text style={style.listItemPressableText}>Delete</Text>
                </TouchableOpacity>
                </View>
                </>
              }
            </View>
          )
        }}
        ListEmptyComponent={() => (
          <View style={style.noelement}>
            <Text style={style.noElementText}>No task</Text>
          </View>
        )}
        />
      </View>
    </View>
  )
}

const commanstyle = (color : ColorScheme, isDarkMode: boolean) => {

  const styles = StyleSheet.create({
    opacity: {
      width:  120,
      padding: 10,
      backgroundColor: color.bg,
      alignItems: "center",
      borderRadius: 10,
      margin: 10,
      shadowColor: color.shadow,
      elevation: 10
    },
    text: {
      color: color.text
    },
    headingContainer: {
      height: 100,
      width: 450,
      alignSelf: "center",
      marginTop: 15,
      marginLeft: 20,
      flexDirection: "row",
    },
    iconContainer: {
      backgroundColor: "green",
      width: 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      marginRight: 20,
    },
    firstTextHeading: {
      color: color.primary,
      fontSize: 40,
      fontWeight: "800"
    },
    secondTextHeading: {
      color: color.primary,
      marginLeft: 10,
      fontSize: 25,
      fontWeight: "400"
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    inputfield: {
      color: color.text,
      backgroundColor: color.bg,
      outlineWidth: 1,
      outlineColor: "black",
      borderRadius: 10,
      height: 50,
      width: 320,
      textAlign: "left",
      paddingLeft: 15
      
    },
    addBtn: {
      backgroundColor: color.primary,
      paddingVertical: 13,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginLeft: 15,
    },
    addBtnText: {
      fontSize: 18,
      color: "white",
      fontWeight: "400"
    },
    listItemContainer: {
      width: 450,
      height: 80,
      margin: 10,
      backgroundColor: color.surface,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
    },
    listItemSubContainer: {
      flexDirection: "row",
    },
    ListItemText: {
      fontSize: 25,
      flexShrink: 1,
    },
    listItemPressable: {
      margin: 4,
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 10,
      backgroundColor: "black"
    },
    listItemPressableText: {
      color: "white",
      fontWeight: "400",
    },
    noelement: {
      width: 420,
      height: 80,
      margin: 10,
      backgroundColor: color.surface,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 15,
      alignSelf: "center"
    },
    noElementText: {
      fontSize: 25,
      flexShrink: 1,
    },
    editInputField: {
      color: color.text,
      backgroundColor: color.bg,
      outlineWidth: 1,
      outlineColor: "black",
      borderRadius: 10,
      textAlign: "left",
      paddingLeft: 15,
      fontSize: 25,
    }
  });
  return styles;
}