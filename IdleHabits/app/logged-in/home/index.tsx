import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import Button from "../../../components/Button";
import colors from "../../../styles/colors";
import { router } from "expo-router";
import HabitCell from "../../../components/cells/HabitCell";
import { useGetHabitsQuery } from "../../../data/query/useHabits";
import { FAB, IconButton } from "react-native-paper";


export default function Index() {

  const {data, isLoading, refetch} = useGetHabitsQuery()

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
      refreshControl={<RefreshControl onRefresh={refetch} refreshing={isLoading}/>}
      />
      <FAB
        icon={'plus'}
        style={{        
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: 20
        }}
        onPress={() => router.navigate("/logged-in/home/habitDetails")}  
      />
    </>
  );
}
