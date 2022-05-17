import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

import PodcastFormModal from "../components/PodcastFormModal";
import Header from "../components/Header";
import PodcastListItem from "../components/PodcastListItem";
import Constants from "../Constants";

const PodcastLists = () => {
  const [podcastList, setPodcastList] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("ADD");
  const [podcastId, setPodcastId] = useState(0)

  const getPodcastListData = async () => {
    // TODO: answer here
    const PODCAST_URL = `https://62694140f2c0cdabac0bc516.mockapi.io/podcasts/api/Podcasts`
    try {
      const getPodcastList = await axios.get(PODCAST_URL)
      setPodcastList(getPodcastList.data)
    } catch (err) {
      console.log("Error fetch data", err)
    }
  };

  useEffect(() => {
    // TODO: answer here
    getPodcastListData()
  }, []);

  return (
    <div>
      <Header headerText={"My Top Podcasts"} />
      <div>
        <Button
          style={{ marginTop: 10, marginLeft: 10, alignSelf: "flex-end" }}
          variant="primary"
          onClick={() => setShowFormModal(true)}
        >
          + Add Podcasts
        </Button>
        {podcastList.map((item) => {
          // TODO: answer here
          return (
            <PodcastListItem 
            key={item}
            id={item.id}
            podcastItem={item} 
            setFormModalType={setFormModalType}
            setShowFormModal={setShowFormModal}
            setpodcastId={setPodcastId}
          />
          )
        })}
      </div>
      <PodcastFormModal
        podcastList={podcastList}
        setPodcastList={setPodcastList}
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
        setFormModalType={setFormModalType}
        formModalType={formModalType}
        podcastId={podcastId}
      />
    </div>
  );
};

export default PodcastLists;