const Home = () => {
  return (
    <div className="container-fluid">
      <div style={{ position: "relative" }}>
        <img
          src="/shop.jpg"
          className="img-fluid"
          style={{ height: "430px", width: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          fontFamily:"cursive",
          fontWeight:"bold"
          }}
        >
          <h3>"Get ready to shop 'til you drop!</h3>
          <h3>Welcome to our fabulous online store."</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
