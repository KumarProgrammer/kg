import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useBarChartmyCb() {

	return {  }
}
export function useFlex1Cb() {
	const onClick = useCallback(callbackFactory("Flex1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useAlert1Cb() {
	const onClick = useCallback(callbackFactory("Alert1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}