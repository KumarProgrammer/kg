import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { BarChart } from "@atrilabs/react-component-manifests/src/manifests/charts/BarChart/BarChart.tsx";
import { Alert } from "@atrilabs/react-component-manifests/src/manifests/Alert/Alert.tsx";
import { useFlex1Cb, useBarChartmyCb, useAlert1Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const BarChartmyProps = useStore((state)=>state["Home"]["BarChartmy"]);
const BarChartmyIoProps = useIoStore((state)=>state["Home"]["BarChartmy"]);
const BarChartmyCb = useBarChartmyCb()
const Alert1Props = useStore((state)=>state["Home"]["Alert1"]);
const Alert1IoProps = useIoStore((state)=>state["Home"]["Alert1"]);
const Alert1Cb = useAlert1Cb()

  return (<>
  <BarChart className="p-Home BarChartmy bpt" {...BarChartmyProps} {...BarChartmyCb} {...BarChartmyIoProps}/>
<Flex className="p-Home Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Alert className="p-Home Alert1 bpt" {...Alert1Props} {...Alert1Cb} {...Alert1IoProps}/>
</Flex>
  </>);
}
