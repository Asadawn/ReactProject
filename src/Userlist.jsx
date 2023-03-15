import Users from "./Users"
function Userlist(){
    return <>
        
    <div className="container">
        <div className="row">
        
            <Users className="col" img='https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8&w=1000&q=80'
            uname='asad' email='asdawn3@gmail.com'/>
            <Users className="col" img='https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            uname='asad' email='asdawn3@gmail.com'/>
        </div>
    </div>
    </>
}
export default Userlist