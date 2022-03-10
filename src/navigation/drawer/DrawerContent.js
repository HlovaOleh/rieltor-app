import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Drawer, 
    Title, 
    Avatar, 
    Caption,
    Paragraph
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

const DrawerContent = (props) => {
    return(
        <View style={{flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ marginTop: 15, flexDirection: 'row'}}>
                            <Avatar.Image 
                             source={{
                                 uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoBi7WK7jjRuEE9xuWr8QUIztGOoFbbEpAA&usqp=CAU"
                             }}
                             size={60}
                            />
                            <View style={{ flexDirection: 'column', marginLeft: 15}}>
                                <Title>John Doe</Title>
                                <Caption>john_doe@gmail.com</Caption>
                            </View>
                        </View>

                        <View style={styles.rowSection}>
                            <View style={styles.rowSubSection}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Feedbacks</Caption>
                            </View>
                            <View style={styles.rowSubSection}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>5</Paragraph>
                                <Caption style={styles.caption}>Average Rate</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.navigationSection}>
                        <DrawerItem 
                         icon={({color, size})=>(
                             <Ionicons
                              name="home-outline"
                              color={color}
                              size={size}
                             />
                         )}
                         label="Home"
                         onPress={()=>props.navigation.navigate('List')}
                        />
                        <DrawerItem 
                         icon={({color, size})=>(
                             <Ionicons
                              name="person-outline"
                              color={color}
                              size={size}
                             />
                         )}
                         label="Profile"
                         onPress={()=>props.navigation.navigate('Profile')}
                        />
                        <DrawerItem 
                         icon={({color, size})=>(
                             <Ionicons
                              name="paper-plane-outline"
                              color={color}
                              size={size}
                             />
                         )}
                         label="Feedbacks"
                         onPress={()=>props.navigation.navigate('Feedbacks')}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                 icon={({color, size})=>(
                     <Ionicons 
                      name="log-out-outline"
                      color={color}
                      size={size}
                     />
                 )}
                 label="Sign Out"
                 onPress={()=>props.navigation.popToTop()}
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    rowSection: {
        marginTop: 15,
        flexDirection: 'row',
    },
    rowSubSection: {
        marginRight: 15,
        flexDirection: 'row'
    },
    caption: {
        fontSize: 14
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    navigationSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopWidth: 1,
        borderTopColor: '#f4f4f4'
    }
})