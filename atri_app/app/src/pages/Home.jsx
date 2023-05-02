import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { BarChart } from "@atrilabs/react-component-manifests/src/manifests/charts/BarChart/BarChart.tsx";
import { useBarChartmyCb } from "../page-cbs/Home";
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

  const BarChartmyProps = useStore((state)=>state["Home"]["BarChartmy"]);
const BarChartmyIoProps = useIoStore((state)=>state["Home"]["BarChartmy"]);
const BarChartmyCb = useBarChartmyCb()

  return (<>
  <BarChart className="p-Home BarChartmy bpt" {...BarChartmyProps} {...BarChartmyCb} {...BarChartmyIoProps}/>
  </>);
}
