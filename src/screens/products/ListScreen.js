import React, {useEffect} from 'react';
import {
    View, 
    StyleSheet, 
    Button,
    ScrollView,
    Text,
    FlatList,
    SafeAreaView
} from 'react-native';
import {connect} from 'react-redux';

import Card from '../../components/Card';

import {fetchUsers} from '../../actions/userActions';

const ListScreen = (props) => {
    useEffect(()=>{
        props.fetchUsers()
    })
    return (
        <SafeAreaView style={styles.screenContent}>
            <FlatList 
                data={props.users}
                style={styles.scrollItems}
                keyExtractor={item => item.id.toString()}
                renderItem={(item)=> {
                    return(
                        <Card 
                            data={item}
                            styles={{
                                // width: "80%",
                            }}
                            navigation={props.navigation}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )
}
const mapStateToProps = state => ({
    users: state.users.items
})
export default connect(mapStateToProps, {fetchUsers})(ListScreen);

const styles = StyleSheet.create({
    screenContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollItems: {
        width: "90%",
    }
})