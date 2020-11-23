import React from "react";
import {Button, Dialog} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/esm/common/intent";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {clearErrors} from "../../redux/actions/error/ErrorActions";

export function ApiError(){
  const error = useSelector((state:RootStateType)=>state.error)
  const dispatch = useDispatch();
  return (
  <>
    <Dialog isOpen={error.message!==null}
            title={"We apologize"} icon={"warning-sign"}>
      <div style={{textAlign:"center"}}>
        <p>We are experiencing some trouble in our server. We shold be back soon...</p>
      </div>
      <div style={{margin:"auto"}}>
        <Button
            text={"Ok"} intent={Intent.PRIMARY}
            onClick={() => {
              console.info(error.message);
              dispatch(clearErrors());
            }}/>
      </div>
    </Dialog>
  </>
  )
}
