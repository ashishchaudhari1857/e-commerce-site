const Home = () => {
  //  this can use to navigate dynamically

  return (
    //  basically if u need anything to write the  text on  the img then just wrap the  img in div and make display relative
    <div className=" container-fluid">
      <div style={{ position: "relative" }}>
        <img
          src="/shop.jpg"
          className="img-fluid "
          style={{ height: "430px", width: "100%", objectFit: "cover" }}
        ></img>
      </div>

      <div style={{ position: "absolute", top: "250px", left: "5%"  }}
       className="text-center   mx-1">
        <p>Welcome To Our Website</p>
        
      </div>
      <div style={{ position: "absolute", top: "85%", left: "60%"   }}
       className="text-center">
        <p>Explore  & buy happiness</p>
        
      </div>
    </div>
  );
};
export default Home;
