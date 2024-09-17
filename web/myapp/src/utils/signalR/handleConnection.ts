import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr'

export const createConnection = (url: string) => {
    return new HubConnectionBuilder()
    .withUrl(url, {
        transport: HttpTransportType.WebSockets,
        skipNegotiation: true
      })
    .build()
}

export const startToConnect = async () => {
    const connection = createConnection("ws://localhost:5261/comment")
    await connection.start()
    return connection
}