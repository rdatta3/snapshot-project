import axios from "axios";
import { useState, useEffect } from "react";
import OurForm from "./OurForm";
import Carousel from 'react-bootstrap/Carousel';
const GridContainer = (props) => {
    const [images, setImages] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [searchword, setSearchword] = useState("all");
    const formSubmit = (e) => {
        e.preventDefault();
        setSearchword(keyword);
        setKeyword("");
    };
    useEffect(() => {
    console.log(searchword)
        axios
            .get(
                `https://api.unsplash.com/search/photos?page=1&query=${searchword}&orientation=squarish&client_id=DcatpZ9T66kFddYG90iGQQ_2EnwEWQBX83oklAEL6rQ`
            )
            .then((response) => {
                setImages(response.data.results);

            })
            .catch((err) => {
                console.log("Error happened while fetching images data");
            });
    }, [searchword]);
    if(images.length===0)
                    {
                       return <h2>Loading...</h2>
                    }

    return (
        <>
            <OurForm
                formSubmit={formSubmit}
                keyword={keyword}
                setKeyword={setKeyword}
            />



            <Carousel>

               { images.map((val, idx) => {
                  return <Carousel.Item className="Hover">
                    <img
                      className="d-block w-100 imageSize"
                      src={val.urls.full}
                      alt="First slide"
                    />
                    <Carousel.Caption >
                      <h1 className="content-text">{searchword}</h1>
                      <h3 className="content-text">{val.alt_description}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  })}

                </Carousel>

        </>
    );
};
export default GridContainer;
