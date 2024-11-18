const Info = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#697279" }}>차량명</span>
        <span style={{ color: "black" }}>쏘렌토</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#697279" }}>트림</span>
        <span style={{ color: "black" }}>가솔린 터보 2.5 4WD 트렌디</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#697279" }}>차량번호</span>
        <span style={{ color: "black" }}>123가0987</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#697279" }}>차량등록일</span>
        <span style={{ color: "black" }}>쏘렌토</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#697279" }}>주행거리</span>
        <span style={{ color: "black" }}>34,567km</span>
      </div>
    </section>
  );
};

export default Info;
