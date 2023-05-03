import React from "react";
import { useRouter } from "next/router";
import { db } from "../firebaseConfig";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function YoutubeDetails() {
  const router = useRouter();
  const youtubeID = router.query.detailsId;

  const [youTube, setYoutubeData] = useState([]);
  const youtubeCollectionRef = collection(db, "youTube", `html`, "data");

  const getTableData = () => {
    // onSnapshot(youtubeCollectionRef, (doc) => {
    //   const datarec = [];
    //   datarec.push({ ...doc.data() });
    //   setYoutubeData(datarec);
    //   console.log("Current data: ", datarec);
    // });
    onSnapshot(youtubeCollectionRef, (snaoshot) => {
      const datarec = [];
      snaoshot.forEach((doc) => {
        datarec.push({ ...doc.data() });
      });
      setYoutubeData(datarec);
    });
  };
  useEffect(() => {
    getTableData();
  }, []);

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const data = await getDocs(youtubeCollectionRef);
  //       console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //       console.log(data);
  //     };
  //     getUsers();
  //   }, []);

  return (
    <div className="grid place-items-center justify-center lg:mt-[10%] mt-[5%]">
      {youtubeID}

      <div className="flex justify-between w-[80%]">
        <div>search input</div>
        <div>Filter by years</div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-8 gap-10">
        {youTube.map(({ id, name, year, url }) => (
          <div key={id}>
            <div className="lg:w-[300px] md:w-[200px] w-[250px] h-[250px] border border-red-600 rounded-[20px] cursor-pointer hover:bg-red-600 transition-all durtaion-300 flex items-center justify-center shadow-lg"></div>
            <div className="mx-2 mt-2.5">
              <a href={url} target="_blank">
                {name}
              </a>
              <p>{year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YoutubeDetails;
