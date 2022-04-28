import { useEffect, useContext } from "react";
import { RouteContext } from "../Context/RouteContext";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RouteParams } from "../Navigation/Navigation";

export default function UseRouteName() {
  const route = useRoute<RouteProp<RouteParams>>();
  const { routeName, setRouteName } = useContext(RouteContext);

  useEffect(() => {
    setRouteName(route.name);
  }, [route]);

  return { routeName };
}
