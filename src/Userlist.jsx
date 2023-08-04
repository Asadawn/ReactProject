import Users from "./Users";
import Cdata from "./Cdata";
const ncard = (val, index) => {
  return (
    <Users key={index} img={val.img} uname={val.uname} email={val.email} />
  );
};
function Userlist() {
  return (
    <>
      <div className="container ">
        <h1 className="text-dark align-center"> Userlist</h1>
        <div className="row ">{Cdata.map(ncard)}</div>
      </div>
    </>
  );
}
export default Userlist;
