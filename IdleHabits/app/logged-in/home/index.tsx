import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import Button from "../../../components/Button";
import colors from "../../../styles/colors";
import { router } from "expo-router";
import HabitCell from "../../../components/cells/HabitCell";
import { useGetHabitsQuery } from "../../../data/query/useHabits";
import { IconButton } from "react-native-paper";


export default function Index() {


  const {data, isLoading,refetch} = useGetHabitsQuery()


  return (
    <>
      <FlatList
      contentContainerStyle={{
        padding: 20,
        gap: 10,
        paddingBottom: 120,
        flexGrow:1,
      }}

      data={data?.habits}
      renderItem={({item}) => <HabitCell {...item} />}
      onRefresh={refetch}
      refreshing={isLoading}
      refreshControl={<RefreshControl refreshing={isLoading}/>}
      />
      <View
       style={{
        width: 100,
        position: "absolute",
        bottom: 0,
        right: 0,
        marginBottom: 20,
        justifyContent: "center",
       }}
      >
        <IconButton 
          icon='plus'
          size={30}
          mode="contained-tonal"
          onPress={() => router.navigate("/logged-in/home/habitDetails")}  
        />
      </View>
    </>
  );
}
