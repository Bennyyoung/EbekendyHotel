import React from 'react'
import RoomFilter from './RoomFilter'
import Roomlist from './RoomList'
import { RoomConsumer, withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <Roomlist rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import Roomlist from './RoomList'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const { loading, sortedRooms, rooms } = value;
//                 if (loading) {
//                     return <Loading />;
//                 }
//                 return (
//                     <div>
//                         Hello from rooms container
//                         < RoomFilter rooms={rooms} />
//                         <Roomlist rooms={sortedRooms} />
//                     </div>
//                 );
//             }}
//         </RoomConsumer >
//     );
// }
