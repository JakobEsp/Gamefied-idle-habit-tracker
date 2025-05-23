import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import Button from "../../../components/Button";
import colors from "../../../styles/colors";
import { router } from "expo-router";
import HabitCell from "../../../components/cells/HabitCell";
import { useGetHabitsQuery } from "../../../data/query/useHabits";
import { FAB, IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMemo } from "react";


export default function Index() {
  const insets = useSafeAreaInsets()
  const {data, isLoading, refetch} = useGetHabitsQuery()

  const sortedHabits = useMemo(() => {
    if (!data?.habits) return [];
    return [...data.habits].sort((a, b) => Number(a.completed) - Number(b.completed));
  }, [data?.habits]);

  return (
    <>
      <FlatList
      contentContainerStyle={{
        paddingVertical: 20,
        paddingHorizontal: 20 + insets.left,
        gap: 10,
        paddingBottom: 120,
        flexGrow:1,
      }}
      data={sortedHabits}
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
