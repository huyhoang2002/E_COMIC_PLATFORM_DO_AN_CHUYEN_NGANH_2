import { useEffect, useRef, useState } from "react"
import { startToConnect } from "../../utils/signalR/handleConnection"
import CommentInput from "./CommentInput"
import CommentList from "./CommentList"
import { HubConnection } from "@microsoft/signalr"

const Comment = () => {
  const [ connection, setConnection ] = useState<HubConnection| undefined>()
  useEffect(() => { 
    (async () => {
      const connection = await startToConnect()
      setConnection(connection)
    })()
  }, [])

  return (
    <div>
      <CommentInput 
        connection={connection}
      />
      <CommentList />
    </div>
  )
}

export default Comment